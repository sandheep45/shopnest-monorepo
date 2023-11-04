import { Module } from '@nestjs/common';
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
import { ConfigModule, ConfigService } from '@nestjs/config';
import { RedisModule } from './redis.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    RedisModule.registerAsync({
      useFactory: async (configSvc: ConfigService) => {
        return {
          connectionOptions: {
            host: configSvc.get('REDIS_HOST'),
            port: configSvc.get('REDIS_PORT'),
            username: configSvc.get('REDIS_USERNAME'),
            password: configSvc.get('REDIS_PASSWORD'),
          },
        };
      },
      inject: [ConfigService],
    }),
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
    AuthModule,
  ],
  providers: [PrismaService],
})
export class AppModule {}
