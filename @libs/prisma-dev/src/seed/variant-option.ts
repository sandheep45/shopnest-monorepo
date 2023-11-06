import { faker } from "@faker-js/faker";
import { getRandomInt } from "./utils";

export const fakerVariantOption = () =>
  ({
    value: faker.lorem.words(),
    name: faker.lorem.word(),
  } as const);

export const fakerVariantOptions = Array.from({
  length: getRandomInt(1, 20),
}).map(() => fakerVariantOption());
