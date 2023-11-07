import { faker } from "@faker-js/faker";
import { getRandomInt } from "./utils";

export const fakerCustomerReview = () => ({
  title: faker.lorem.sentence({ max: 3, min: 1 }),
  rating: faker.number.int({ min: 1, max: 5 }),
  comment: faker.lorem.paragraph({ min: 1, max: 2 }),
});

export const fakerCustomerReviews = Array.from({
  length: getRandomInt(1, 20),
}).map(() => {
  return { ...fakerCustomerReview() };
});
