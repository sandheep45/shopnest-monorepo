import { Module } from '@nestjs/common';
import { CustomerReviewsService } from './customer-reviews.service';
import { CustomerReviewsController } from './customer-reviews.controller';

@Module({
  controllers: [CustomerReviewsController],
  providers: [CustomerReviewsService],
})
export class CustomerReviewsModule {}
