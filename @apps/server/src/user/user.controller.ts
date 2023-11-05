import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { UserService } from './user.service';
import { User } from '@shopnest/prisma-dev';
import { ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('/users')
@ApiTags('Users')
export class UserController {
  constructor(private readonly userServices: UserService) {}

  @Get()
  async getAllUsers(): Promise<User[]> {
    return await this.userServices.getAllUsers();
  }

  @Post()
  async createUser(@Body() createUser: CreateUserDto): Promise<User> {
    return await this.userServices.createUser(createUser);
  }

  @Patch()
  async updateUser(@Body() updateUserDto: UpdateUserDto): Promise<User> {
    return await this.userServices.updateUser(updateUserDto);
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: string): Promise<User> {
    return await this.userServices.deleteUser(id);
  }
}
