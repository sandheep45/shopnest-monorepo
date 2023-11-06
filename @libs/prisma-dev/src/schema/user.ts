import * as z from "zod"
import { UserStatus, Role } from "@prisma/client"
import { CompleteMedia, RelatedMediaSchema, CompleteCustomerReview, RelatedCustomerReviewSchema, CompleteAccount, RelatedAccountSchema } from "./index"

export const UserSchema = z.object({
  id: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  name: z.string().nullish(),
  username: z.string(),
  email: z.string(),
  hashedPassword: z.string().nullish(),
  status: z.nativeEnum(UserStatus),
  role: z.nativeEnum(Role),
  mediaId: z.string().nullish(),
  emailVerified: z.date().nullish(),
  image: z.string().nullish(),
})

export interface CompleteUser extends z.infer<typeof UserSchema> {
  Media?: CompleteMedia | null
  CustomerReview: CompleteCustomerReview[]
  accounts: CompleteAccount[]
}

/**
 * RelatedUserSchema contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedUserSchema: z.ZodSchema<CompleteUser> = z.lazy(() => UserSchema.extend({
  Media: RelatedMediaSchema.nullish(),
  CustomerReview: RelatedCustomerReviewSchema.array(),
  accounts: RelatedAccountSchema.array(),
}))
