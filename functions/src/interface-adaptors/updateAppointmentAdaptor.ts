import { AppointmentRepository } from '../infraestructure/repositories/appointment.repository';
import { Request, Response } from 'express';
import * as logger from 'firebase-functions/logger';
import { PaymentResult } from '../entities/models/paymentResult';

export const updateAppointmentAdaptor = async (req: Request, res: Response) => {
  const appointmentId = req.params.appointmentId;
  logger.info('PAyku response body:', req.body);
  const paymentResult: PaymentResult = req.body;
  const appointmentRepository = new AppointmentRepository();
  const appointmentUpdated = await appointmentRepository.updateAppointment(
    appointmentId,
    paymentResult,
  );
  res.status(201).json(appointmentUpdated);
};
