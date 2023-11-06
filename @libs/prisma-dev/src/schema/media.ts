import * as z from "zod";
import { Mediatype } from "@prisma/client";
import {
  CompleteVariant,
  RelatedVariantSchema,
  CompleteProduct,
  RelatedProductSchema,
  CompleteCategory,
  RelatedCategorySchema,
  CompleteUser,
  RelatedUserSchema,
} from "./index";

export const MediaSchema = z.object({
  id: z.string(),
  type: z.nativeEnum(Mediatype),
  url: z.string(),
  variantId: z.string().nullish(),
});

export interface CompleteMedia extends z.infer<typeof MediaSchema> {
  Variant?: CompleteVariant | null;
  Product: CompleteProduct[];
  Category: CompleteCategory[];
  User: CompleteUser[];
}

/**
 * RelatedMediaSchema contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedMediaSchema: z.ZodSchema<CompleteMedia> = z.lazy(() =>
  MediaSchema.extend({
    Variant: RelatedVariantSchema.nullish(),
    Product: RelatedProductSchema.array(),
    Category: RelatedCategorySchema.array(),
    User: RelatedUserSchema.array(),
  }),
);
