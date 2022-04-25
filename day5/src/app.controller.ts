import { Body, Controller, Get, HttpCode, Param, Post, Put, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateCatDto } from './CreateCatDto.dto';

@Controller('cats')
export class AppController {
  constructor(private readonly appService: AppService) {}


  @Post()
  create(@Body() createCatDto: CreateCatDto):string { 
    return 'this. aciton weill add new cat' + createCatDto.name
  }

  @Get()
  findAll(): string {
    return 'this action weill return all cats'
  }


  @Get(':id')
  findOne(@Param('id') id: string): string {
    return `this action weill return a #${id} cat`
  }


  @Put(':id')
  update(@Param('id') id: string, @Body() createCatDto: CreateCatDto): string {
    return `this action weill update a #${id} cat`
  }
}
