import { z } from 'zod';

import { UserSchema } from '@shared/types';

export const SessionSchema = z.object({
  accessToken: z.string(),
  user: UserSchema,
});

export type Session = z.infer<typeof SessionSchema>;
