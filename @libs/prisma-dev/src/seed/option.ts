import { faker } from "@faker-js/faker";
import { getRandomInt } from "./utils";

export const fakerOption = () =>
  ({
    name: faker.lorem.word(),
    value: faker.lorem.sentence({ min: 1, max: 5 }),
  } as const);

export const fakerOptions = Array.from({ length: getRandomInt(1, 20) }).map(
  () => fakerOption(),
);
