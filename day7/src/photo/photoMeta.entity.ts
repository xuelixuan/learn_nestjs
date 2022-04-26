import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Photo } from "./photo.entity";

@Entity()
export class PhotoMetadata  {
    @PrimaryGeneratedColumn()
    id: number;

    @Column("int")
    height: number;

    @Column("int")
    width: number;

    @Column()
    orientation: string;

    @Column()
    compressed: boolean;

    @Column()
    comment: string;

    @OneToOne((type)=> Photo, (photo) => photo.metadata)
    @JoinColumn()
    photo: Photo;

    // 在photo 与photoMedata 之间建立一对一关系,并且是双向关系,作为关系的拥有方,photomedata使用@JoinColumn()来保存photo的id,也就是外键
    // JoinColumn放到哪个实体下,哪个实体就是关系的拥有者,都要保存外键
    // (photo) => photo.metadata 指定的是反向关系的名称,也就是说,photo的metadata属性是一个PhotoMetadata实体,
}