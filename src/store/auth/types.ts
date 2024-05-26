import { Prestador } from './prestador';

type Actions = {
  login: (email: string, password: string) => void;
  logout: () => void;
  redirectAfterLogin: () => void;
  updateRedirectToAfterLogin: (path: string) => void;
  createPrestador: (prestador: Prestador) => void;
};

export type { Actions };
