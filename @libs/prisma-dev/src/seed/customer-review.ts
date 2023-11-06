import { faker } from "@faker-js/faker";
import { getRandomInt } from "./utils";

export const fakerCustomerReview = () =>
  ({
    title: faker.lorem.sentence(),
    rating: faker.number.int({ max: 200 }),
    comment: faker.lorem.paragraph({ min: 1, max: 3 }),
  } as const);

export const CategoryReviews = Array.from({ length: getRandomInt(1, 20) }).map(
  () => fakerCustomerReview(),
);
