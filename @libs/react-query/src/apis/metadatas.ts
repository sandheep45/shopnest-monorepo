import { MetaData, MetaDataSchema } from "@shopnest/prisma-dev";
import axiosInstance from "../axios-instance";

export const allMetaData = async () => {
  const { data } = await axiosInstance.get<MetaData[]>("/metadatas");
  const metadatas = MetaDataSchema.array().parse(data);
  return metadatas;
};
