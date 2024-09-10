import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class AddRevenu {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string

    @Column()
    montant: number
}