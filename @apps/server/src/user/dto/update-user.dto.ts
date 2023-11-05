import { IsNotEmpty, Matches } from 'class-validator';
import { CreateUserDto } from './create-user.dto';
import { OmitType } from '@nestjs/swagger';

export class UpdateUserDto extends OmitType(CreateUserDto, ['password']) {
  @IsNotEmpty()
  @Matches(/^c[0-9a-zA-Z]{8,12}$/) // Regular expression for CUID validation
  id: string;
}
