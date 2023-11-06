import { getRandomInt } from "./utils";
import { faker } from "@faker-js/faker";
import { fakerCategory } from "./category";
import { fakerMedia } from "./media";
import { Status } from "@prisma/client";

export const fakerProduct = () => ({
  length: faker.number.int({ max: 200 }),
  name: faker.commerce.productName(),
  tags: faker.commerce.department(),
  width: faker.number.int({ max: 200 }),
  height: faker.number.int({ max: 200 }),
  rating: faker.number.int({ max: 5, min: 1 }),
  status: Status.DRAFT,
  weight: faker.number.int({ max: 200 }),
  description: faker.commerce.productDescription(),
  Media: {
    create: fakerMedia(),
  },
  Category: {
    create: fakerCategory(),
  },
});

export const fakerProducts = Array.from({
  length: getRandomInt(1, 20),
}).map(() => fakerProduct());
