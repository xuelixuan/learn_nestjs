import { Module } from '@nestjs/common';
import { UserModule } from 'src/user/user.module';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';

@Module({
  controllers: [ProductController],
  providers: [ProductService],
  imports: [UserModule], // product 用 user service 必须先导入user module，然后才能用该module下的component or service
})
export class ProductModule {}
