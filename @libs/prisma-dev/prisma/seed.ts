import {PrismaClient} from "@prisma/client"

const prisma = new PrismaClient()

const main = async () => {
  const newUser = await prisma.user.create({
    data: {
      email: "test@test.com",
      name: "Test",
      role: "ADMIN",
    }
  })

  console.log(newUser);
  
}

main().then(console.log).catch(console.log)
