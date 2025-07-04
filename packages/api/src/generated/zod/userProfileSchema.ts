/**
 * Generated by Kubb (https://kubb.dev/).
 * Do not edit manually.
 */

import type { UserProfile } from '../types/UserProfile.ts'
import type { ToZod } from '@kubb/plugin-zod/utils'
import { z } from 'zod'

export const userProfileSchema = z.object({
  id: z.string().optional(),
  email: z.string().email().optional(),
  name: z.string().optional(),
  avatar: z.string().optional(),
  role: z.enum(['admin', 'user', 'moderator']).optional(),
  created_at: z.string().datetime({ offset: true }).optional(),
  updated_at: z.string().datetime({ offset: true }).optional(),
}) as unknown as ToZod<UserProfile>