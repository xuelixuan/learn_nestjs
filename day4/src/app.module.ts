import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerMiddleware } from './logger.middleware';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // 多个中间件
    //consumer.apply(cors(), helmet(), LoggerMiddleware).forRoutes('cat');
    consumer.apply(LoggerMiddleware).forRoutes('cat');
  }
}
