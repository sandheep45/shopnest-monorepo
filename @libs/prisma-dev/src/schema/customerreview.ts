import * as z from "zod"
import { CompleteProduct, RelatedProductSchema, CompleteUser, RelatedUserSchema } from "./index"

export const CustomerReviewSchema = z.object({
  id: z.string(),
  title: z.string(),
  comment: z.string(),
  rating: z.number().int(),
  createdAt: z.date(),
  productId: z.string(),
  userId: z.string().nullish(),
})

export interface CompleteCustomerReview extends z.infer<typeof CustomerReviewSchema> {
  Product: CompleteProduct
  User?: CompleteUser | null
}

/**
 * RelatedCustomerReviewSchema contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedCustomerReviewSchema: z.ZodSchema<CompleteCustomerReview> = z.lazy(() => CustomerReviewSchema.extend({
  Product: RelatedProductSchema,
  User: RelatedUserSchema.nullish(),
}))
