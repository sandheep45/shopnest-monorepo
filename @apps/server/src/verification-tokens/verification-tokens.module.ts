import { Module } from '@nestjs/common';
import { VerificationTokensService } from './verification-tokens.service';
import { VerificationTokensController } from './verification-tokens.controller';

@Module({
  controllers: [VerificationTokensController],
  providers: [VerificationTokensService],
})
export class VerificationTokensModule {}
