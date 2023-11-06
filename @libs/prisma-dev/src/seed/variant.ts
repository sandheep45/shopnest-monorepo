import { fakerMedia } from "./media";
import { faker } from "@faker-js/faker";
import { getRandomInt } from "./utils";

export const fakerVariant = () =>
  ({
    Media: {
      create: fakerMedia(),
    },
    description: faker.commerce.productDescription(),
    sku: faker.number.int({ max: 200 }),
    price: faker.number.int({ max: 200 }),
    barcode: faker.number.int({ max: 200 }),
    taxPercent: faker.number.int({ max: 200 }),
    onSelfQuantity: faker.number.int({ max: 200 }),
    inWareHouseQuantity: faker.number.int({ max: 200 }),
  } as const);

export const fakerVariants = Array.from({ length: getRandomInt(1, 20) }).map(
  () => fakerVariant(),
);
