import { VariantOptions, VariantOptionsSchema } from "@shopnest/prisma-dev";
import axiosInstance from "../axios-instance";

export const allVariantOptions = async () => {
  const { data } =
    await axiosInstance.get<VariantOptions[]>("/variant-options");
  const variantOptions = VariantOptionsSchema.array().parse(data);
  return variantOptions;
};
