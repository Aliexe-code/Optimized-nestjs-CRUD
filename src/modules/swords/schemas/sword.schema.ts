import { z } from 'zod';
import { Rarity } from '../../../generated/prisma';

export const createSwordSchema = z.object({
  name: z.string().min(3).max(50),
  damage: z.number().int().positive(),
  rarity: z.nativeEnum(Rarity),
  isMagic: z.boolean().optional().default(false),
  enchantments: z.array(z.string()).optional().default([]),
});

export const updateSwordSchema = createSwordSchema.partial();
//!Dtos
export type CreateSwordDto = z.infer<typeof createSwordSchema>;
export type UpdateSwordDto = z.infer<typeof updateSwordSchema>;
