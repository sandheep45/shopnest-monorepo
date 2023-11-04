import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { PrismaService } from 'src/prisma.service';

@Module({
  exports: [],
  imports: [],
  providers: [UserService, PrismaService],
  controllers: [UserController],
})
export class UserModule {}
