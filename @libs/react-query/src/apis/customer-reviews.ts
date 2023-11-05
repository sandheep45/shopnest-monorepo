import { CustomerReview, CustomerReviewSchema } from "@shopnest/prisma-dev";
import axiosInstance from "../axios-instance";

export const allReviews = async () => {
  const { data } =
    await axiosInstance.get<CustomerReview[]>("/customer-reviews");

  const reviews = CustomerReviewSchema.array().parse(data);
  return reviews;
};
