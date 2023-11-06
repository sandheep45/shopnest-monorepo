import { faker } from "@faker-js/faker";
import { getRandomInt } from "./utils";
import { Mediatype } from "@prisma/client";

export const fakerMedia = () => ({
  url: faker.image.urlLoremFlickr({ category: "people" }),
  type: Mediatype.IMAGE,
});

export const fakerMedias = Array.from({ length: getRandomInt(1, 20) }).map(() =>
  fakerMedia(),
);
