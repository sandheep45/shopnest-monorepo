import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { type User } from '@shopnest/prisma-dev';
import { PrismaService } from 'src/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { hash } from 'bcrypt';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async getAllUsers(): Promise<User[]> {
    const users = await this.prisma.user.findMany();
    return users;
  }

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const { password, ...rest } = createUserDto;
    const hashedPassword = await hash(password, 10);
    const user = await this.prisma.user.create({
      data: {
        ...rest,
        hashedPassword,
      },
    });

    return user;
  }

  async updateUser(updateUserDto: UpdateUserDto): Promise<User> {
    const { id, ...rest } = updateUserDto;
    const updateUser = await this.prisma.user.update({
      where: {
        id: id,
      },
      data: rest,
    });

    return updateUser;
  }

  async deleteUser(id: string): Promise<User> {
    const user = await this.prisma.user.delete({
      where: {
        id,
      },
    });

    return user;
  }

  async doesUserExist(email: string, name: string): Promise<boolean> {
    const [userUsingEmail, userUsingName] = await this.prisma.$transaction([
      this.prisma.user.findFirst({
        where: {
          email,
        },
      }),
      this.prisma.user.findFirst({
        where: {
          name,
        },
      }),
    ]);

    if (userUsingEmail && userUsingName) {
      throw new HttpException(
        'Email and Username already taken',
        HttpStatus.CONFLICT,
      );
    }

    if (userUsingName) {
      throw new HttpException('Username already taken', HttpStatus.CONFLICT);
    }

    if (userUsingEmail) {
      throw new HttpException('Email already taken', HttpStatus.CONFLICT);
    }

    return false;
  }
}
