import { atom } from 'recoil';

export const redirectToAfterLoginState = atom<string | null>({
  key: 'redirectToAfterLoginState',
  default: null,
});
