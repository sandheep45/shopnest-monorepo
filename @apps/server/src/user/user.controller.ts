import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from '@shopnest/prisma-dev';
import { ApiTags } from '@nestjs/swagger';

@Controller('/user')
@ApiTags('Users')
export class UserController {
  constructor(private readonly userServices: UserService) {}

  @Get()
  async getAllUsers(): Promise<User[]> {
    return await this.userServices.getAllUsers();
  }
}
