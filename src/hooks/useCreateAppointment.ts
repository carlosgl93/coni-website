import { createAppointment } from '@/api/appointments/create';
import { useMutation } from 'react-query';

export const useCreateAppointment = () => {
  const {
    mutate: mutateCreateAppointment,
    isLoading: isCreatingAppointment,
    error: createAppointmentError,
  } = useMutation(createAppointment);

  return {
    mutateCreateAppointment,
    isCreatingAppointment,
    createAppointmentError,
  };
};
