import { z } from 'zod';

export enum ServiceType {
  RECURRENT = 'Recurrente',
  SINGLE = 'Único',
}

export enum ServiceCategory {
  TAROT = 'Tarot',
  DOULA = 'Doula',
}

const serviceSchema = z.object({
  id: z.string(),
  name: z.string(),
  category: z.nativeEnum(ServiceCategory),
  type: z.nativeEnum(ServiceType),
  duration: z.number(),
  price: z.number(),
  description: z.string().optional(),
  icon: z.function().optional(),
});

export type Service = z.infer<typeof serviceSchema>;
export const createServiceSchema = serviceSchema.pick({
  name: true,
  category: true,
  type: true,
  duration: true,
  price: true,
  description: true,
});
export type CreateService = z.infer<typeof createServiceSchema>;
