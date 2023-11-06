import { faker } from "@faker-js/faker";
import { getRandomInt } from "./utils";

export const fakerMetadata = () =>
  ({
    title: faker.lorem.sentence({ min: 1, max: 5 }),
    description: faker.commerce.productDescription(),
    keywords: faker.commerce.department(),
  } as const);

export const fakerMetadatas = Array.from({ length: getRandomInt(1, 20) }).map(
  () => fakerMetadata(),
);
