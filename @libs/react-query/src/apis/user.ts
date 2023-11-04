import { User } from "@shopnest/prisma-dev";
import axiosInstance from "../axios-instance";

export const user = async () => {
  const { data } = await axiosInstance.get<User[]>("/");
  return data;
};
