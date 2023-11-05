import { Options, OptionsSchema } from "@shopnest/prisma-dev";
import axiosInstance from "../axios-instance";

export const allOptions = async () => {
  const { data } = await axiosInstance.get<Options[]>("/options");
  const options = OptionsSchema.array().parse(data);
  return options;
};
