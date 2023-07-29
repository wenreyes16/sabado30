import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn({type: 'int4'})
    id: number;

    @Column({type:'varchar', length:100, nullable:false})
    name: string;

    @Column({type:"varchar", length:20, nullable:false})
    password: string;

    @Column({type:'varchar', nullable:false})
    email: string;

    @Column({type:'varchar', nullable:false})
    sexo: string;

    @Column({type:'boolean', nullable:true})
    active: boolean;


}