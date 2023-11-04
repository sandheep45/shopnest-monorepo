import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma.service';
import { UserModule } from './user/user.module';
import { ProductsModule } from './products/products.module';
import { OptionsModule } from './options/options.module';
import { MediasModule } from './medias/medias.module';
import { VariantsModule } from './variants/variants.module';
import { VariantOptionsModule } from './variant-options/variant-options.module';
import { MetadatasModule } from './metadatas/metadatas.module';
import { CustomerReviewsModule } from './customer-reviews/customer-reviews.module';
import { CategoriesModule } from './categories/categories.module';
import { TagsModule } from './tags/tags.module';
import { AccountsModule } from './accounts/accounts.module';
import { SessionsModule } from './sessions/sessions.module';
import { VerificationTokensModule } from './verification-tokens/verification-tokens.module';

@Module({
  imports: [
    UserModule,
    ProductsModule,
    OptionsModule,
    MediasModule,
    VariantsModule,
    VariantOptionsModule,
    MetadatasModule,
    CustomerReviewsModule,
    CategoriesModule,
    TagsModule,
    AccountsModule,
    SessionsModule,
    VerificationTokensModule,
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
