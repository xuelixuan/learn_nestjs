import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Photo } from './photo.entity';

@Injectable()
export class PhotoService {
    constructor(@InjectRepository(Photo) private photoRepository: Repository<Photo>) {}


    async findAll(): Promise<Photo[]> {
        return await this.photoRepository.find();
    }

    async findOne(id: number): Promise<Photo> {
        return await this.photoRepository.findOne(id);
    }

    async create(photo): Promise<Photo> {
        return await this.photoRepository.save(photo);
    }

    async update(id: number, photo: Photo): Promise<Photo> {
        photo.id = id;
        return await this.photoRepository.save(photo);
    }

    async delete(id: number): Promise<void> {
        await this.photoRepository.delete(id);
    }
}
