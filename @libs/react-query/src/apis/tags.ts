import { Tags, TagsSchema } from "@shopnest/prisma-dev";
import axiosInstance from "../axios-instance";

export const allTags = async () => {
  const { data } = await axiosInstance.get<Tags[]>("/tags");
  const tags = TagsSchema.array().parse(data);
  return tags;
};
