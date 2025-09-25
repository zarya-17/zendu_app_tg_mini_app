import { z } from 'zod';

export const UserSchema = z.object({
  id: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  username: z.string(),
  photoUrl: z.string(),
});

export type User = z.infer<typeof UserSchema>;
