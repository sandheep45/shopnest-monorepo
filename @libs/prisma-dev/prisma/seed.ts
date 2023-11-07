import {
  fakerProduct,
  fakerVariant,
  fakerUser,
  fakerOptions,
  fakerMetadatas,
  fakerVariantOptions,
  fakerCustomerReviews,
  fakerMedia,
} from "../src";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  const products: unknown[] = [];
  for (let i = 1; i <= 20; i++) {
    const product = await prisma.product.create({
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
          create: fakerCustomerReviews.map((review) => ({
            ...review,
            User: {
              create: fakerUser(),
            },
          })),
        },
        VariantOptions: {
          create: fakerVariantOptions,
        },
        Media: {
          create: fakerMedia(),
        },
      },
    });

    products.push(product);
  }
  return products;
};

main().then(console.log).catch(console.log);
