import { createdServices } from '@/controllers/schedule/createdServices';
import { appointmentApi, paykuApi } from '..';
import { Appointment, CreateAppointment } from '../../../functions/src/entities/models/appointment';
import { paymentSettings } from '@/utils/config';

const baseUrl = import.meta.env.VITE_BASE_URL;
const notifyUrl = import.meta.env.VITE_NOTIFY_URL;

export async function createAppointment(data: CreateAppointment) {
  const service = createdServices.find((service) => service.id === data.serviceId);
  try {
    const newAppointment = await appointmentApi.post<Appointment>('/appointments', data);
    const paykuRes = await paykuApi.post<{
      status: string;
      id: string;
      url: string;
    }>('/transaction', {
      email: data.userEmail,
      order: newAppointment.data.id,
      subject: `Pago de servicio: ${service?.name} a ${import.meta.env.VITE_TENANT_NAME}`,
      amount: Math.round(service!.price * paymentSettings.appCommission),
      currency: paymentSettings.currency,
      payment: paymentSettings.paymentMethods,
      urlreturn: `${baseUrl}/payment?appointmentId=${newAppointment.data.id}`,
      urlnotify: `${String(notifyUrl)}/${newAppointment.data.id}`,
      // TODO CHANGE URL NOTIFY TO THE UPDATE APPOINTMENT HANDLER IN THE BACKEND
    });
    console.log(paykuRes.data);
    window.location.href = paykuRes.data.url;
  } catch (error) {
    console.error(error);
  }
}
