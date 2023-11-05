import { Variant, VariantSchema } from "@shopnest/prisma-dev";
import axiosInstance from "../axios-instance";

export const allVariant = async () => {
  const { data } = await axiosInstance.get<Variant[]>("/variants");
  const variants = VariantSchema.array().parse(data);
  return variants;
};
