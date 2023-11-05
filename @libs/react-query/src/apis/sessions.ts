import { Session, SessionSchema } from "@shopnest/prisma-dev";
import axiosInstance from "../axios-instance";

export const allSessions = async () => {
  const { data } = await axiosInstance.get<Session[]>("/sessions");
  const sessions = SessionSchema.array().parse(data);
  return sessions;
};
