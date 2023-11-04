import { Injectable } from '@nestjs/common';
import { type User } from '@shopnest/prisma-dev';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async getAllUsers(): Promise<User[]> {
    const users = await this.prisma.user.findMany();
    return users;
  }
}
