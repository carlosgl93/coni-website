import { atom } from 'recoil';

export const SchedulerModalState = atom<boolean>({
  key: 'SchedulerModalState',
  default: false,
});
