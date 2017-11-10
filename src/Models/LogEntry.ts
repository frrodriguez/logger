import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class LogEntry {

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