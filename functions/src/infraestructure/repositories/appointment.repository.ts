import { IAppointmentsRepository } from '../../application/repositories/appointment.repository.interface';
import { PaymentResult } from '../../entities';
import { Appointment, CreateAppointment } from '../../entities/models/appointment';
import { db } from '../services/firebase';
import { randomUUID } from 'crypto';
import * as logger from 'firebase-functions/logger';

export class AppointmentRepository implements IAppointmentsRepository {
  async createAppointment(appointment: CreateAppointment): Promise<Appointment> {
    logger.info('create appointment body:', appointment);
    try {
      const newAppointment: Appointment = {
        ...appointment,
        id: randomUUID(),
        status: 'pending',
        createdAt: new Date().toISOString(),
      };
      await db.doc(`appointments/${newAppointment.id}`).set(newAppointment);
      return newAppointment;
    } catch (error) {
      logger.error('Error creating appointment', error);
      throw new Error('Error creating appointment');
    }
  }

  async updateAppointment(
    appointmentId: string,
    paymentResult: PaymentResult,
  ): Promise<Appointment> {
    logger.info('updating appointment:', appointmentId);
    const resultStatus = paymentResult.status;
    try {
      const appointmentRef = db.doc(`appointments/${appointmentId}`);
      const appointment = await appointmentRef.get();
      if (!appointment.exists) {
        throw new Error('Appointment not found');
      }
      const isUpdated = Boolean(await appointmentRef.update({ status: resultStatus }));
      if (!isUpdated) {
        throw new Error('Error updating appointment');
      }
      return {
        ...(appointment.data() as Appointment),
        status: 'paid',
      };
    } catch (error) {
      logger.error('Error updating appointment', error);
      throw new Error('Unhandled error updating appointment');
    }
  }
}
