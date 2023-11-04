import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from '@shopnest/prisma-dev';

@Controller('/user')
export class UserController {
  constructor(private readonly userServices: UserService) {}

  @Get()
  async getAllUsers(): Promise<User[]> {
    return await this.userServices.getAllUsers();
  }
}
