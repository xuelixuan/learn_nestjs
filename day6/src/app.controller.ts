import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateCatDto } from './CreateCatDto.dto';
import { Cat } from './app.interface';

@Controller('cats')
export class AppController {
  constructor(private readonly appService: AppService) {}

    @Post()
    async create(@Body() createCatDto: CreateCatDto) {
        this.appService.create(createCatDto);
    }

    @Get()
    async findAll(): Promise<Cat[]> {
        return this.appService.findAll();
    }
}
