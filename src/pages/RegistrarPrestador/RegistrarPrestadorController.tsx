import { notificationState } from '@/store/snackbar';
import { ChangeEvent, useReducer } from 'react';
import { useRecoilState } from 'recoil';
import { CreateAccountParams, useAuth } from '@/hooks/useAuth';

type FormState = {
  error: string;
  firstname: string;
  lastname: string;
  rut: string;
  email: string;
  password: string;
  confirmPassword: string;
};

type FormActions =
  | {
      type: 'CHANGE';
      payload: {
        name: string;
        value: string;
      };
    }
  | {
      type: 'ERROR';
      payload: {
        error: string;
      };
    };

const reducer = (state: FormState, action: FormActions) => {
  switch (action.type) {
    case 'CHANGE':
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    case 'ERROR':
      return {
        ...state,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

const RegistrarPrestadorController = () => {
  const [notification, setNotification] = useRecoilState(notificationState);
  const { createPrestador } = useAuth();

  const initialState = {
    error: '',
    firstname: '',
    lastname: '',
    rut: '',
    email: '',
    password: '',
    confirmPassword: '',
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch({ type: 'CHANGE', payload: { name, value } });
  };

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const rutRegex = /^[0-9]+-[0-9kK]{1}$/;

  const handleSubmit = async () => {
    const { firstname, lastname, rut, email, password, confirmPassword } = state;

    if (!emailRegex.test(email)) {
      dispatch({
        type: 'ERROR',
        payload: {
          error: 'Email inválido',
        },
      });
      setNotification({
        ...notification,
        open: true,
        message: 'Email inválido',
        severity: 'error',
      });
      setTimeout(() => dispatch({ type: 'ERROR', payload: { error: '' } }), 5000);
    } else if (!rutRegex.test(rut)) {
      dispatch({
        type: 'ERROR',
        payload: {
          error: 'RUT inválido',
        },
      });
      setNotification({
        ...notification,
        open: true,
        message: 'RUT inválido',
        severity: 'error',
      });
      setTimeout(() => dispatch({ type: 'ERROR', payload: { error: '' } }), 5000);
    } else if (confirmPassword !== password) {
      dispatch({
        type: 'ERROR',
        payload: {
          error: 'Las contraseñas no coinciden',
        },
      });
      setNotification({
        ...notification,
        open: true,
        message: 'Las contraseñas no coinciden',
        severity: 'error',
      });
      setTimeout(() => dispatch({ type: 'ERROR', payload: { error: '' } }), 5000);
    } else {
      const prestador: CreateAccountParams = {
        firstname,
        lastname,
        rut,
        email,
        password,
      };

      createPrestador(prestador);
    }
  };

  const handleSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    dispatch({ type: 'CHANGE', payload: { name, value } });
  };

  return {
    state,
    handleChange,
    handleSubmit,
    handleSelect,
  };
};

export default RegistrarPrestadorController;
