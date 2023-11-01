import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) {}

  async getHello(): Promise<string> {
  const newUser = await this.prisma.user.create({
    data: {
      email: "test@test.com",
      name: "Test",
      role: "ADMIN",
    }
  })

  console.log(newUser);

    return 'Hello World!';
  }
}
