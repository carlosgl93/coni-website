import dayjs from 'dayjs';

export const defaultAvailability = [
  {
    id: 1,
    isAvailable: true,
    day: 'Lunes',
    times: {
      startTime: dayjs().startOf('day').format('HH:mm'),
      endTime: dayjs().endOf('day').format('HH:mm'),
    },
  },
  {
    id: 2,
    isAvailable: true,
    day: 'Martes',
    times: {
      startTime: dayjs().startOf('day').format('HH:mm'),
      endTime: dayjs().endOf('day').format('HH:mm'),
    },
  },
  {
    id: 3,
    isAvailable: true,
    day: 'Miercoles',
    times: {
      startTime: dayjs().startOf('day').format('HH:mm'),
      endTime: dayjs().endOf('day').format('HH:mm'),
    },
  },
  {
    id: 4,
    isAvailable: true,
    day: 'Jueves',
    times: {
      startTime: dayjs().startOf('day').format('HH:mm'),
      endTime: dayjs().endOf('day').format('HH:mm'),
    },
  },
  {
    id: 5,
    isAvailable: true,
    day: 'Viernes',
    times: {
      startTime: dayjs().startOf('day').format('HH:mm'),
      endTime: dayjs().endOf('day').format('HH:mm'),
    },
  },
  {
    id: 6,
    isAvailable: true,
    day: 'Sabado',
    times: {
      startTime: dayjs().startOf('day').format('HH:mm'),
      endTime: dayjs().endOf('day').format('HH:mm'),
    },
  },
  {
    id: 0,
    isAvailable: true,
    day: 'Domingo',
    times: {
      startTime: dayjs().startOf('day').format('HH:mm'),
      endTime: dayjs().endOf('day').format('HH:mm'),
    },
  },
];
