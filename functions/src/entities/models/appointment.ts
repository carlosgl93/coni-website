import { z } from 'zod';

const appointmentSchema = z.object({
  id: z.string(),
  serviceId: z.string(),
  userEmail: z.string(),
  userName: z.string(),
  date: z.string(),
  time: z.string(),
  status: z.string(),
  createdAt: z.string().optional(),
  updatedAt: z.string().optional(),
});

export type Appointment = z.infer<typeof appointmentSchema>;

const createAppointmentSchema = appointmentSchema.pick({
  serviceId: true,
  userEmail: true,
  userName: true,
  date: true,
  time: true,
});

export type CreateAppointment = z.infer<typeof createAppointmentSchema>;
