import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { VerificationTokensService } from './verification-tokens.service';
import { CreateVerificationTokenDto } from './dto/create-verification-token.dto';
import { UpdateVerificationTokenDto } from './dto/update-verification-token.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('verification-tokens')
@ApiTags('Verification Tokens')
export class VerificationTokensController {
  constructor(
    private readonly verificationTokensService: VerificationTokensService,
  ) {}

  @Post()
  create(@Body() createVerificationTokenDto: CreateVerificationTokenDto) {
    return this.verificationTokensService.create(createVerificationTokenDto);
  }

  @Get()
  findAll() {
    return this.verificationTokensService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.verificationTokensService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateVerificationTokenDto: UpdateVerificationTokenDto,
  ) {
    return this.verificationTokensService.update(
      +id,
      updateVerificationTokenDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.verificationTokensService.remove(+id);
  }
}
