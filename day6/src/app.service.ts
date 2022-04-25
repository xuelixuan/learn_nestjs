import { Injectable } from '@nestjs/common';
import { Cat } from './app.interface';

@Injectable()
export class AppService {
    constructor() {}
    private  readonly cats: Cat[] = []

    create(cat: Cat) {
        this.cats.push(cat);
    }

    findAll(): Cat[] {
        return this.cats
    }
}
