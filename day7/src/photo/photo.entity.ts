import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { PhotoMetadata } from "./photoMeta.entity";

@Entity()
export class Photo{
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    filename: string;

    @OneToOne((type)=>PhotoMetadata, (photoMetadata) => photoMetadata.photo)
    metadata: PhotoMetadata
}