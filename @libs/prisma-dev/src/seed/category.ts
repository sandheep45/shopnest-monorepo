import { getRandomInt } from "./utils";
import { faker } from "@faker-js/faker";
import { fakerMedia } from "./media";
import { Status } from "@prisma/client";
import { fakerMetadatas } from "./metadata";

export const fakerCategory = () => ({
  name: faker.commerce.product(),
  tags: faker.commerce.department(),
  status: Status.DRAFT,
  description: faker.commerce.productDescription(),
  Media: {
    create: fakerMedia(),
  },
  Metadata: {
    create: fakerMetadatas,
  },
});

export const fakerCategories = Array.from({
  length: getRandomInt(1, 20),
}).map(() => fakerCategory());
