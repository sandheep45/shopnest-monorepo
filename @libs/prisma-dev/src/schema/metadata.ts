import * as z from "zod";
import {
  CompleteProduct,
  RelatedProductSchema,
  CompleteVariant,
  RelatedVariantSchema,
  CompleteCategory,
  RelatedCategorySchema,
} from "./index";

export const MetaDataSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  keywords: z.string(),
  productId: z.string().nullish(),
  variantId: z.string().nullish(),
  categoryId: z.string().nullish(),
});

export interface CompleteMetaData extends z.infer<typeof MetaDataSchema> {
  Product?: CompleteProduct | null;
  Variant?: CompleteVariant | null;
  Category?: CompleteCategory | null;
}

/**
 * RelatedMetaDataSchema contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedMetaDataSchema: z.ZodSchema<CompleteMetaData> = z.lazy(() =>
  MetaDataSchema.extend({
    Product: RelatedProductSchema.nullish(),
    Variant: RelatedVariantSchema.nullish(),
    Category: RelatedCategorySchema.nullish(),
  }),
);
