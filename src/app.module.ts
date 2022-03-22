import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      entities: [], //模块内的entity文件不但要在各自模块的module里添加，还要在这里再添加一次，才能做到其他语言框架里所谓自动迁移的功能。
      synchronize: true, // dev环境开启，prod环境关闭。开发环境下可以开启同步功能，但是生产环境在，这项配置必须不关闭，不然会有数据丢失风险。
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
