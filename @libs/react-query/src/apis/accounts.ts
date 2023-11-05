import { Account, AccountSchema } from "@shopnest/prisma-dev";
import axiosInstance from "../axios-instance";

export const allAccounts = async () => {
  const { data } = await axiosInstance.get<Account[]>("/accounts");
  const accounts = AccountSchema.array().parse(data);
  return accounts;
};
