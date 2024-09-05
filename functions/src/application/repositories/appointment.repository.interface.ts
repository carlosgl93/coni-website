import { Appointment, CreateAppointment } from '../../entities/models/appointment';
import { PaymentResult } from '../../entities/models/paymentResult';

export interface IAppointmentsRepository {
  createAppointment(appointment: CreateAppointment): Promise<Appointment>;
  updateAppointment(appointmentId: string, paymentResult: PaymentResult): Promise<Appointment>;
}
