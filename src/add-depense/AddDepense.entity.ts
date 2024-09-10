import { Entity, Column, PrimaryGeneratedColumn, IntegerType } from 'typeorm'

@Entity()
export class AddDepense {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string

    @Column()
    montant: Number
}