import { faker } from "@faker-js/faker";

export const fakerTag = () =>
  ({
    name: faker.lorem.words({ min: 1, max: 5 }),
  } as const);
