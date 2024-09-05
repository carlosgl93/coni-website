import { z } from 'zod';

const paymentResultSchema = z.object({
  transaction_id: z.string(),
  payment_key: z.string(),
  transaction_key: z.string(),
  verification_key: z.string(),
  order: z.string(),
  status: z.enum(['success', 'failed']),
});

export type PaymentResult = z.infer<typeof paymentResultSchema>;
