import * as z from "zod";
import {
  CompleteOptions,
  RelatedOptionsSchema,
  CompleteMedia,
  RelatedMediaSchema,
  CompleteMetaData,
  RelatedMetaDataSchema,
  CompleteProduct,
  RelatedProductSchema,
} from "./index";

export const VariantSchema = z.object({
  id: z.string(),
  description: z.string(),
  sku: z.number().int(),
  price: z.number().int(),
  barcode: z.number().int(),
  taxPercent: z.number().int(),
  onSelfQuantity: z.number().int(),
  inWareHouseQuantity: z.number().int(),
  productId: z.string(),
});

export interface IVariant extends z.infer<typeof VariantSchema> {}

export interface CompleteVariant extends IVariant {
  options: CompleteOptions[];
  Media: CompleteMedia[];
  VariantMetaData: CompleteMetaData[];
  Product: CompleteProduct;
}

/**
 * RelatedVariantSchema contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedVariantSchema: z.ZodSchema<CompleteVariant> = z.lazy(() =>
  VariantSchema.extend({
    options: RelatedOptionsSchema.array(),
    Media: RelatedMediaSchema.array(),
    VariantMetaData: RelatedMetaDataSchema.array(),
    Product: RelatedProductSchema,
  }),
);
