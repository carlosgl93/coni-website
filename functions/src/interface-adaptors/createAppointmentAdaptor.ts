import { AppointmentRepository } from '../infraestructure/repositories/appointment.repository';
import { Request, Response } from 'express';

export const createAppointmentAdaptor = async (req: Request, res: Response) => {
  const appointmentRepository = new AppointmentRepository();
  const appointmentCreated = await appointmentRepository.createAppointment(req.body);
  res.status(201).json(appointmentCreated);
};
