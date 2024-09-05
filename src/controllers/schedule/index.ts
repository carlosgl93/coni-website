import { useRecoilState } from 'recoil';
import { SubmitHandler, useForm } from 'react-hook-form';
import { SchedulerModalState } from '@/store/schedule';
import { useCreateAppointment } from '@/hooks/useCreateAppointment';
import { CreateAppointment } from '../../../functions/src/entities/models/appointment';

export const ScheduleController = () => {
  const [isOpen, setIsOpen] = useRecoilState(SchedulerModalState);
  const { mutateCreateAppointment } = useCreateAppointment();

  const toggleScheduler = () => setIsOpen(!isOpen);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<CreateAppointment>();

  const onSubmit: SubmitHandler<CreateAppointment> = (data) => {
    // validate inputs
    if (Object.keys(errors).length) {
      console.log(errors.userEmail);
    }

    mutateCreateAppointment(data);
  };

  return {
    open: isOpen,
    errors,
    isValid,
    toggleScheduler,
    register,
    handleSubmit,
    onSubmit,
  };
};
