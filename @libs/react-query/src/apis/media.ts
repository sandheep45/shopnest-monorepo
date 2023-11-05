import { Media, MediaSchema } from "@shopnest/prisma-dev";
import axiosInstance from "../axios-instance";

export const allMedia = async () => {
  const { data } = await axiosInstance.get<Media[]>("/medias");
  const media = MediaSchema.array().parse(data);
  return media;
};
