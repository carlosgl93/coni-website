import { atom } from 'recoil';
import { AvailabilityData } from '../availability';

export interface Prestador {
  email: string;
  id: string;
  role: string;
  firstname?: string;
  lastname?: string;
  rut: string;
  telefono?: string;
  isLoggedIn?: boolean;
  availability?: AvailabilityData[];
  averageReviews?: number;
  description?: string;
  totalReviews?: number;
  offersFreeMeetAndGreet: boolean;
  imageUrl?: string;
  gender?: string;
  dob?: string;
  address?: string;
  settings: {
    servicios: boolean;
    detallesBasicos: boolean;
    disponibilidad: boolean;
    comunas: boolean;
    tarifas: boolean;
    experiencia: boolean;
    cuentaBancaria: boolean;
    historialLaboral: boolean;
    educacionFormacion: boolean;
    registroSuperIntendenciaSalud: boolean;
    insignias: boolean;
    inmunizacion: boolean;
    idiomas: boolean;
    antecedentesCulturales: boolean;
    religion: boolean;
    interesesHobbies: boolean;
    sobreMi: boolean;
    misPreferencias: boolean;
  };
}
export const defaultPrestador = {
  email: '',
  id: '',
  role: '',
  firstname: '',
  lastname: '',
  rut: '',
  comunas: [],
  tarifas: [],
  servicio: '',
  especialidad: '',
  availability: [
    {
      id: 0,
      day: 'Lunes',
      times: {
        startTime: '00:00',
        endTime: '23:59',
      },
      isAvailable: true,
    },
    {
      id: 1,
      day: 'Martes',
      times: {
        startTime: '00:00',
        endTime: '23:59',
      },
      isAvailable: true,
    },
    {
      id: 2,
      day: 'Miércoles',
      times: {
        startTime: '00:00',
        endTime: '23:59',
      },
      isAvailable: true,
    },
    {
      id: 3,
      day: 'Jueves',
      times: {
        startTime: '00:00',
        endTime: '23:59',
      },
      isAvailable: true,
    },
    {
      id: 4,
      day: 'Viernes',
      times: {
        startTime: '00:00',
        endTime: '23:59',
      },
      isAvailable: true,
    },
    {
      id: 5,
      day: 'Sábado',
      times: {
        startTime: '00:00',
        endTime: '23:59',
      },
      isAvailable: true,
    },
    {
      id: 6,
      day: 'Domingo',
      times: {
        startTime: '00:00',
        endTime: '23:59',
      },
      isAvailable: true,
    },
  ],
  averageReviews: 0,
  totalReviews: 0,
  description: '',
  offersFreeMeetAndGreet: false,
  settings: {
    servicios: false,
    detallesBasicos: false,
    disponibilidad: false,
    comunas: false,
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

export const prestadorState = atom<null | Prestador>({
  key: 'prestadorState',
  default: defaultPrestador,
});
