import { SchedulerModalState } from '@/store/schedule';
import { useRecoilState } from 'recoil';
import { useCallback } from 'react';

export const ScheduleController = () => {
  const [isOpen, setIsOpen] = useRecoilState(SchedulerModalState);

  const toggleModal = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen, setIsOpen]);

  return {
    isOpen,
    toggleModal,
  };
};
