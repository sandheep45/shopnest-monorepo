import { ApiProperty } from '@nestjs/swagger';
import { Role, User, UserStatus } from '@shopnest/prisma-dev';
import {
  IsEmail,
  IsEnum,
  IsString,
  IsStrongPassword,
  IsUrl,
} from 'class-validator';

export class CreateUserDto
  implements
    Omit<
      User,
      | 'id'
      | 'createdAt'
      | 'updatedAt'
      | 'emailVerified'
      | 'emailVerified'
      | 'hashedPassword'
    >
{
  @IsString()
  username: string;

  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsEnum(Role)
  @ApiProperty({
    enum: Role,
  })
  role: Role;

  @IsUrl()
  image: string;

  @IsEnum(UserStatus)
  @ApiProperty({
    enum: UserStatus,
  })
  status: UserStatus;

  @IsString()
  mediaId: string;

  @IsStrongPassword()
  password?: string;
}
