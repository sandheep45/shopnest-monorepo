import { useQuery } from "react-query";
import { user } from "../apis";

export const useUser = () => {
  const data = useQuery("users", user);
  return data;
};
