import * as z from "zod"
import { Status } from "@prisma/client"
import { CompleteVariantOptions, RelatedVariantOptionsSchema, CompleteMetaData, RelatedMetaDataSchema, CompleteCustomerReview, RelatedCustomerReviewSchema, CompleteVariant, RelatedVariantSchema, CompleteMedia, RelatedMediaSchema, CompleteCategory, RelatedCategorySchema } from "./index"

export const ProductSchema = z.object({
  id: z.string(),
  name: z.string(),
  tags: z.string(),
  description: z.string(),
  status: z.nativeEnum(Status),
  rating: z.number().int(),
  width: z.number().int(),
  height: z.number().int(),
  length: z.number().int(),
  weight: z.number().int(),
  mediaId: z.string(),
  categoryId: z.string(),
})

export interface CompleteProduct extends z.infer<typeof ProductSchema> {
  VariantOptions: CompleteVariantOptions[]
  MetaData: CompleteMetaData[]
  CustometReview: CompleteCustomerReview[]
  Variant: CompleteVariant[]
  Media: CompleteMedia
  Category: CompleteCategory
}

/**
 * RelatedProductSchema contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedProductSchema: z.ZodSchema<CompleteProduct> = z.lazy(() => ProductSchema.extend({
  VariantOptions: RelatedVariantOptionsSchema.array(),
  MetaData: RelatedMetaDataSchema.array(),
  CustometReview: RelatedCustomerReviewSchema.array(),
  Variant: RelatedVariantSchema.array(),
  Media: RelatedMediaSchema,
  Category: RelatedCategorySchema,
}))
