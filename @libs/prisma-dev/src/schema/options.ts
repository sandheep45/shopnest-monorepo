import * as z from "zod"
import { CompleteVariant, RelatedVariantSchema } from "./index"

export const OptionsSchema = z.object({
  id: z.string(),
  name: z.string(),
  value: z.string(),
  variantId: z.string().nullish(),
})

export interface CompleteOptions extends z.infer<typeof OptionsSchema> {
  Variant?: CompleteVariant | null
}

/**
 * RelatedOptionsSchema contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedOptionsSchema: z.ZodSchema<CompleteOptions> = z.lazy(() => OptionsSchema.extend({
  Variant: RelatedVariantSchema.nullish(),
}))
