import {
  VerificationToken,
  VerificationTokenSchema,
} from "@shopnest/prisma-dev";
import axiosInstance from "../axios-instance";

export const allVerificationToken = async () => {
  const { data } = await axiosInstance.get<VerificationToken[]>(
    "/verification-tokens",
  );
  const verificationTokens = VerificationTokenSchema.array().parse(data);
  return verificationTokens;
};
