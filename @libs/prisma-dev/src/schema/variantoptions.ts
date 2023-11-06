import * as z from "zod";
import { CompleteProduct, RelatedProductSchema } from "./index";

export const VariantOptionsSchema = z.object({
  id: z.string(),
  name: z.string(),
  value: z.string(),
  productId: z.string(),
});

export interface CompleteVariantOptions
  extends z.infer<typeof VariantOptionsSchema> {
  Product: CompleteProduct;
}

/**
 * RelatedVariantOptionsSchema contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedVariantOptionsSchema: z.ZodSchema<CompleteVariantOptions> =
  z.lazy(() =>
    VariantOptionsSchema.extend({
      Product: RelatedProductSchema,
    }),
  );
