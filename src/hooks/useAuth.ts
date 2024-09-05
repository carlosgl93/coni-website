import { useNavigate } from 'react-router-dom';
import { useMutation, useQueryClient } from 'react-query';
import { auth, db } from '../firebase/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import {
  collection,
  query,
  where,
  getDocs,
  limit,
  writeBatch,
  doc,
  setDoc,
} from 'firebase/firestore';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { notificationState } from '@/store/snackbar';
import { FirebaseError } from 'firebase/app';
import { Prestador, prestadorState } from '@/store/auth/prestador';
import { AvailabilityData, editDisponibilidadState } from '@/store/availability';

export type CreateAccountParams = {
  firstname: string;
  lastname: string;
  rut: string;
  email: string;
  password: string;
};

export const useAuth = () => {
  const [, setNotification] = useRecoilState(notificationState);
  const [prestador, setPrestadorState] = useRecoilState(prestadorState);
  const setEditDisponibilidad = useSetRecoilState(editDisponibilidadState);

  const isLoggedIn = prestador?.isLoggedIn;
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: createPrestador, isLoading: createPrestadorLoading } = useMutation(
    async ({ firstname, lastname, email, password, rut }: CreateAccountParams) => {
      setNotification({
        open: true,
        message: 'Creando tu cuenta...',
        severity: 'info',
      });

      // Check if a user with the given email already exists in the users collection
      const userQuery = query(collection(db, 'users'), where('email', '==', email));
      const userSnapshot = await getDocs(userQuery);
      if (!userSnapshot.empty) {
        throw new Error('Este email ya tiene una cuenta.');
      }

      // Check if a user with the given email already exists in the providers collection
      const providerQuery = query(collection(db, 'providers'), where('email', '==', email));
      const providerSnapshot = await getDocs(providerQuery);

      if (!providerSnapshot.empty) {
        throw new Error('Este email ya tiene una cuenta.');
      }

      return createUserWithEmailAndPassword(auth, email, password).then(({ user }) => {
        const newPrestador: Prestador = {
          email,
          id: user.uid,
          role: 'prestador',
          firstname,
          lastname,
          rut,
          averageReviews: 0,
          totalReviews: 0,
          description: '',
          offersFreeMeetAndGreet: false,
          settings: {
            servicios: false,
            detallesBasicos: false,
            disponibilidad: false,
            comunas: true,
            tarifas: false,
            experiencia: false,
            cuentaBancaria: false,
            historialLaboral: false,
            educacionFormacion: false,
            registroSuperIntendenciaSalud: false,
            insignias: false,
            inmunizacion: false,
            idiomas: false,
            antecedentesCulturales: false,
            religion: false,
            interesesHobbies: false,
            sobreMi: false,
            misPreferencias: false,
          },
        };
        const providerRef = doc(db, 'providers', user.uid);
        return setDoc(providerRef, newPrestador).then(() => {
          const batch = writeBatch(db);

          // defaultAvailability.forEach((day) => {
          //   const dayRef = doc(providerRef, 'availability', day.day);
          //   batch.set(dayRef, day);
          // });

          return batch.commit().then(() => newPrestador);
        });
      });
    },
    {
      onSuccess(data) {
        setNotification({
          open: true,
          message: `Cuenta creada exitosamente`,
          severity: 'success',
        });
        setPrestadorState({ ...data, isLoggedIn: true } as Prestador);
        queryClient.setQueryData(['prestador', data.email], prestador);
        navigate('/backoffice');
      },
      onError(error: FirebaseError) {
        let message = 'Hubo un error creando el prestador: ';

        switch (error.code) {
          case 'auth/email-already-in-use':
            message += 'El correo electrónico ya está en uso.';
            break;
          case 'auth/invalid-email':
            message += 'El correo electrónico no es válido.';
            break;
          case 'auth/operation-not-allowed':
            message += 'La operación no está permitida.';
            break;
          case 'auth/weak-password':
            message += 'La contraseña es demasiado débil.';
            break;
          default:
            message += error.message;
        }

        setNotification({
          open: true,
          message,
          severity: 'error',
        });
      },
    },
  );

  // const { mutate: createUser, isLoading: createUserLoading } = useMutation(
  //   async ({
  //     firstname,
  //     lastname,
  //     email,
  //     password,
  //     rut,
  //   }: CreateAccountParams) => {
  //     setNotification({
  //       open: true,
  //       message: 'Creando tu cuenta...',
  //       severity: 'info',
  //     });
  //     // Check if a user with the given email already exists in the users collection
  //     const userQuery = query(collection(db, 'users'), where('email', '==', email));
  //     const userSnapshot = await getDocs(userQuery);
  //     if (!userSnapshot.empty) {
  //       throw new Error('Este email ya tiene una cuenta.');
  //     }

  //     // Check if a user with the given email already exists in the providers collection
  //     const providerQuery = query(collection(db, 'providers'), where('email', '==', email));
  //     const providerSnapshot = await getDocs(providerQuery);
  //     if (!providerSnapshot.empty) {
  //       throw new Error('Este email ya tiene una cuenta.');
  //     }
  //     const { user } = await createUserWithEmailAndPassword(auth, email, password);
  //     const newUser = {
  //       ...defaultNewUser,
  //       email: email,
  //       id: user.uid,
  //       role: 'user',
  //       firstname,
  //       lastname,
  //       rut,
  //     };
  //     const userRef = doc(db, 'users', user.uid);
  //     return await setDoc(userRef, newUser).then(() => newUser);
  //   },
  //   {
  //     onSuccess(data) {
  //       setNotification({
  //         open: true,
  //         message: `Cuenta creada exitosamente`,
  //         severity: 'success',
  //       });
  //       setUserState({ ...data, isLoggedIn: true } as User);
  //       queryClient.setQueryData(['user', data?.email], user);
  //       window.scrollTo(0, 0);
  //       redirectAfterLogin ? navigate(redirectAfterLogin) : navigate(`/usuario-dashboard`);
  //     },
  //     onError(error: FirebaseError) {
  //       let message = 'Hubo un error creando tu cuenta: ';

  //       switch (error.code) {
  //         case 'auth/email-already-in-use':
  //           message += 'El correo electrónico ya está en uso.';
  //           break;
  //         case 'auth/invalid-email':
  //           message += 'El correo electrónico no es válido.';
  //           break;
  //         case 'auth/operation-not-allowed':
  //           message += 'La operación no está permitida.';
  //           break;
  //         case 'auth/weak-password':
  //           message += 'La contraseña es demasiado débil.';
  //           break;
  //         default:
  //           message += error.message;
  //       }

  //       setNotification({
  //         open: true,
  //         message,
  //         severity: 'error',
  //       });
  //     },
  //   },
  // );

  const { mutate: login, isLoading: loginLoading } = useMutation(
    async ({ correo, contrasena }: { correo: string; contrasena: string }) => {
      setNotification({
        open: true,
        message: 'Iniciando sesión...',
        severity: 'info',
      });
      return signInWithEmailAndPassword(auth, correo, contrasena).then(async () => {
        const usersColectionRef = collection(db, 'users');
        const prestadorCollectionRef = collection(db, 'providers');
        const userQuery = query(usersColectionRef, limit(1), where('email', '==', correo));
        const prestadorQuery = query(
          prestadorCollectionRef,
          limit(1),
          where('email', '==', correo),
        );
        const users = await getDocs(userQuery);
        const prestadores = await getDocs(prestadorQuery);

        if (users.docs.length > 0) {
          const user = users.docs[0].data();
          // setUserState({ ...user, isLoggedIn: true });
          queryClient.setQueryData(['user', correo], user);
          return { role: 'user', data: user };
        } else if (prestadores.docs.length > 0) {
          const prestador = prestadores.docs[0].data() as Prestador;
          const availabilityCollectionRef = collection(
            db,
            'providers',
            prestador.id,
            'availability',
          );
          const availabilityData = await getDocs(availabilityCollectionRef);
          const availability = availabilityData.docs.map((doc) => doc.data()) as AvailabilityData[];
          prestador.availability = availability;
          setPrestadorState({ ...prestador, isLoggedIn: true });
          queryClient.setQueryData(['prestador', correo], prestador);
          return { role: 'prestador', data: prestador };
        }
      });
    },
    {
      onError(error: FirebaseError) {
        let message = 'Error: ';

        switch (error.code) {
          case 'auth/user-not-found':
            message += 'No se encontró ningún usuario con ese correo electrónico.';
            break;
          case 'auth/wrong-password':
            message += 'La contraseña es incorrecta.';
            break;
          case 'auth/invalid-email':
            message += 'El correo electrónico no es válido.';
            break;
          case 'auth/invalid-credential':
            message += 'Email o contraseña incorrecta.';
            break;
          default:
            message += error.message;
        }

        setNotification({
          open: true,
          message,
          severity: 'error',
        });
      },
      onSuccess(data) {
        setNotification({
          open: true,
          message: `Sesión iniciada exitosamente`,
          severity: 'success',
        });
        // if (data?.role === 'user') {
        // setUserState({ ...data.data, isLoggedIn: true } as User);
        // redirectAfterLogin ? navigate(redirectAfterLogin) : navigate(`/usuario-dashboard`);
        // } else {
        if (data?.role === 'prestador') {
          setPrestadorState({ ...data.data, isLoggedIn: true } as Prestador);
          navigate(`/backoffice`);
          // }
        }
      },
    },
  );

  const { mutate: logout } = useMutation(() => signOut(auth), {
    onSuccess: () => {
      // setUserState(null);
      setPrestadorState(null);
      queryClient.resetQueries();
      navigate('/ingresar');
      setEditDisponibilidad(false);
    },
  });

  return {
    // createUser,
    // createUserLoading,
    createPrestador,
    createPrestadorLoading,
    login,
    loginLoading,
    // user,
    prestador,
    logout,
    isLoggedIn,
  };
};
