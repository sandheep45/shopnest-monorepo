import axiosInstance from "../axios-instance";

export const allAuth = async () => {
  const { data } = await axiosInstance.get("/auth");
  return data;
};
