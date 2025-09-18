import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    // auto increment column
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    email: string;

    @Column()
    password: string;
}
