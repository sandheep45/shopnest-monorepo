import { Category, CategorySchema } from "@shopnest/prisma-dev";
import axiosInstance from "../axios-instance";

export const allCategories = async () => {
  const { data } = await axiosInstance.get<Category[]>("/categories");
  const categories = CategorySchema.array().parse(data);
  return categories;
};
