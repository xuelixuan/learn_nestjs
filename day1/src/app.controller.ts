import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/users')
  getUsers(): any {
    return this.appService.getUsers();
  }

  @Get('/user/:id')
  getUser(@Param('id') id: string): any {
    return this.appService.getUser(id);
  }

  @Post('/user')
  postUser(@Body() user): any {
    user.id = this.appService.getUsers().length + 1;
    return this.appService.postUser(user);
  }

  @Post('/user/:id')
  putUser(@Body() user): any {
    return this.appService.putUser(user);
  }

  @Delete('/user/:id')
  deleteUser(@Param('id') id: string): any {
    return this.appService.deleteUser(id);
  }
}
