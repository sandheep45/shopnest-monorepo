import { User, UserSchema } from "@shopnest/prisma-dev";
import axiosInstance from "../axios-instance";

export const user = async () => {
  const { data } = await axiosInstance.get<User[]>("/users");
  const users = UserSchema.array().parse(data);
  return users;
};
