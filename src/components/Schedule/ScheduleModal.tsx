import { ScheduleController } from '@/controllers/schedule';
import { createdServices } from '@/controllers/schedule/createdServices';
import { Dialog, DialogContent, DialogTitle } from '@mui/material';

export const ScheduleModal = () => {
  const { open, toggleScheduler, register, handleSubmit, onSubmit, isValid } = ScheduleController();

  return (
    <Dialog open={open} onClose={toggleScheduler}>
      <DialogTitle>Agendar</DialogTitle>
      <DialogContent>
        <form
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 4,
          }}
          onSubmit={handleSubmit(onSubmit)}
        >
          <label htmlFor="selectService">Selecciona un servicio</label>
          <select
            {...register('serviceId', {
              required: 'Este campo es requerido',
            })}
          >
            {createdServices.map((service) => (
              <option key={service.id} value={service.id}>
                {service.name}
              </option>
            ))}
          </select>

          <label htmlFor="selectDate">Selecciona una fecha</label>
          <input
            {...register('date', {
              required: 'Este campo es requerido',
            })}
            type="date"
          />

          <label htmlFor="selectTime">Selecciona una hora</label>
          <input
            {...register('time', {
              required: 'Este campo es requerido',
            })}
            type="time"
          />

          <label htmlFor="userName">Nombre</label>
          <input
            {...register('userName', {
              required: 'Este campo es requerido',
            })}
            type="text"
            placeholder="Tu nombre aqui"
          />

          <label htmlFor="userEmail">Correo</label>
          <input
            {...register('userEmail', {
              required: 'Este campo es requerido',
            })}
            type="email"
            placeholder="tuEmail@gmail.com"
          />

          <button type="submit" disabled={!isValid}>
            Agendar
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
};
