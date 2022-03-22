## 配置数据库

执行安装命令：`yarn add @nestjs/typeorm typeorm sqlite3`

**_Typeorm 装饰器背后的运行原理_**。

> 原本数据库表结构的更改需要用到一个词叫 migration，迁移。很多语言的 orm 都需要手动编写 migration 才能做到表结构的更改。但是 typeorm 很特殊的一点就是他自动做了 migration 这件事。如果你在 entity 里修改了表结构，字段名称，那么 typeorm 就会自动更改表结构。

> 有很多后端语言需要自己手动 migration，typeorm 省略了这一步。

命令执行后，打开`app.module.ts`配置 TypeORM。

```ts
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',

      database: 'db.sqlite',

      entities: [], //模块内的entity文件不但要在各自模块的module里添加，还要在这里再添加一次，才能做到其他语言框架里所谓自动迁移的功能。

      synchronize: true, // dev环境开启，prod环境关闭。开发环境下可以开启同步功能，但是生产环境在，这项配置必须不关闭，不然会有数据丢失风险。
    }),
    CupModule,
    BupModule,
  ],

  controllers: [AppController],

  providers: [AppService],
})
export class AppModule {}
```
