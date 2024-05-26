import { atom } from 'recoil';

export interface TimeSlot {
  startTime: string;
  endTime: string;
}

export interface AvailabilityData {
  id: number;
  day: string;
  times: TimeSlot;
  isAvailable: boolean;
}

export const availabilityState = atom<AvailabilityData[]>({
  key: 'availabilityState',
  default: [],
});

export const editDisponibilidadState = atom<boolean>({
  key: 'editDisponibilidadState',
  default: false,
});
