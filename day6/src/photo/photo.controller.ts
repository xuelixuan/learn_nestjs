import { Body, Controller, Post } from '@nestjs/common';
import { CreatePhotoDto } from './CreatePhotoDto.dto';
import { Photo } from './photo.entity';
import { PhotoService } from './photo.service';

@Controller('photo')
export class PhotoController {

    constructor(private readonly photoService: PhotoService) {}

    @Post()
    async create(@Body () createPhotoDto: CreatePhotoDto) {
        return await this.photoService.create(createPhotoDto);
    }

}
