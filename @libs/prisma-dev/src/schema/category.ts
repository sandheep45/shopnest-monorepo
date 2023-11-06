import * as z from "zod";
import { Status } from "@prisma/client";
import {
  CompleteMedia,
  RelatedMediaSchema,
  CompleteMetaData,
  RelatedMetaDataSchema,
  CompleteProduct,
  RelatedProductSchema,
} from "./index";

export const CategorySchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  status: z.nativeEnum(Status),
  tags: z.string(),
  mediaId: z.string(),
});

export interface CompleteCategory extends z.infer<typeof CategorySchema> {
  Media: CompleteMedia;
  Metadata: CompleteMetaData[];
  Product: CompleteProduct[];
}

/**
 * RelatedCategorySchema contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedCategorySchema: z.ZodSchema<CompleteCategory> = z.lazy(() =>
  CategorySchema.extend({
    Media: RelatedMediaSchema,
    Metadata: RelatedMetaDataSchema.array(),
    Product: RelatedProductSchema.array(),
  }),
);
