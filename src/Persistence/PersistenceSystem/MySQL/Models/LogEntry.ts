import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
import {Entity as EntityModel} from '../../../Interfaces/Entity'

@Entity()
export class LogEntry implements EntityModel {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    typeLog: string;

    @Column()
    message: string;

    @Column("text")
    value: string;

    @Column("datetime")
    createDate: Date;
}