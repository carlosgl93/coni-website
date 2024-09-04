import { Appointment, CreateAppointment } from '../../entities/models/appointment';

export interface IAppointmentsRepository {
  createAppointment(appointment: CreateAppointment): Promise<Appointment>;
}
