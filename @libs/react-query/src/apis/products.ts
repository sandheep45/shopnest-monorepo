import { Product, ProductSchema } from "@shopnest/prisma-dev";
import axiosInstance from "../axios-instance";

export const allProducts = async () => {
  const { data } = await axiosInstance.get<Product[]>("/products");
  const products = ProductSchema.array().parse(data);
  return products;
};
