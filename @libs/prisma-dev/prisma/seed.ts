import { fakerUser } from "../src/seed/user";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  console.log(fakerUser);
  const users = await prisma.user.createMany({
    data: fakerUser,
  });

  return users;
};

main().then(console.log).catch(console.log);
