import { IAppointmentsRepository } from '../../application/repositories/appointment.repository.interface';
import { Appointment, CreateAppointment } from '../../entities/models/appointment';
import { db } from '../services/firebase';
import { randomUUID } from 'crypto';
import * as logger from 'firebase-functions/logger';

export class AppointmentRepository implements IAppointmentsRepository {
  async createAppointment(appointment: CreateAppointment): Promise<Appointment> {
    logger.info('post appointment body:', appointment);
    try {
      const newAppointment: Appointment = {
        ...appointment,
        id: randomUUID(),
        status: 'register',
        createdAt: new Date().toISOString(),
      };
      await db.collection('appointments').add(appointment);
      return newAppointment;
    } catch (error) {
      logger.error('Error creating appointment', error);
      throw new Error('Error creating appointment');
    }
  }
}
