import {
  fakerProduct,
  fakerVariant,
  fakerCustomerReview,
  fakerUser,
  fakerOptions,
  fakerMetadatas,
  fakerVariantOptions,
} from "../src/seed";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  const products = await prisma.product.create({
    data: {
      ...fakerProduct(),
      Variant: {
        create: {
          ...fakerVariant(),
          options: {
            create: fakerOptions,
          },
          VariantMetaData: {
            create: fakerMetadatas,
          },
        },
      },
      MetaData: {
        create: fakerMetadatas,
      },
      CustometReview: {
        create: {
          ...fakerCustomerReview(),
          User: {
            create: fakerUser(),
          },
        },
      },
      VariantOptions: {
        create: fakerVariantOptions,
      },
    },
  });

  return products;
};

main().then(console.log).catch(console.log);
