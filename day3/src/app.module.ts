import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';

@Module({
  imports: [UserModule, ProductModule],
  controllers: [AppController, UserController],
  providers: [AppService, UserService],
})
export class AppModule {}
