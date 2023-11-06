import { faker } from "@faker-js/faker";
import { hashSync } from "bcryptjs";
import { Prisma } from "@prisma/client";

const getRandomInt = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const password = "@Test1234";
const hashedPassword = hashSync(password, 10);

export const fakerUser: Prisma.UserCreateManyInput[] = Array.from({
  length: getRandomInt(1, 20),
}).map(() => ({
  username: faker.person.fullName(),
  role: "ADMIN",
  email: faker.internet.email(),
  name: faker.person.fullName(),
  status: "ACTIVE",
  image: faker.image.urlLoremFlickr({ category: "people" }),
  hashedPassword,
}));
