import { faker } from "@faker-js/faker";
import { hashSync } from "bcryptjs";
import { getRandomInt } from "./utils";
import { fakerMedia } from "./media";

const password = "@Test1234";
const hashedPassword = hashSync(password, 10);

export const fakerUser = () =>
  ({
    username: faker.person.fullName(),
    role: "CUSTOMER",
    email: faker.internet.email(),
    name: faker.person.fullName(),
    status: "ACTIVE",
    image: faker.image.urlLoremFlickr({ category: "people" }),
    hashedPassword,
    Media: {
      create: fakerMedia(),
    },
  }) as const;

export const fakerUsers = Array.from({
  length: getRandomInt(1, 20),
}).map(() => fakerUser());
