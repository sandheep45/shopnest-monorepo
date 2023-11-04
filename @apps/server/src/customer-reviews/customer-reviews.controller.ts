import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CustomerReviewsService } from './customer-reviews.service';
import { CreateCustomerReviewDto } from './dto/create-customer-review.dto';
import { UpdateCustomerReviewDto } from './dto/update-customer-review.dto';

@Controller('customer-reviews')
export class CustomerReviewsController {
  constructor(private readonly customerReviewsService: CustomerReviewsService) {}

  @Post()
  create(@Body() createCustomerReviewDto: CreateCustomerReviewDto) {
    return this.customerReviewsService.create(createCustomerReviewDto);
  }

  @Get()
  findAll() {
    return this.customerReviewsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.customerReviewsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCustomerReviewDto: UpdateCustomerReviewDto) {
    return this.customerReviewsService.update(+id, updateCustomerReviewDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.customerReviewsService.remove(+id);
  }
}
