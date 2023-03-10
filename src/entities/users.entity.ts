import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from "typeorm"

@Entity("users")
export class Users {

    @PrimaryGeneratedColumn("increment")
    id: number

    @Column({ length: 45, unique: true  })
    email: string

    @Column({ length: 45}) 
    name: string

    @Column()
    admin: boolean

    @Column({ length: 120 })
    password: string

    @CreateDateColumn()  
    createdAt: Date

    @UpdateDateColumn() 
    updatedAt: Date

    @DeleteDateColumn() 
    deletedAt: Date
}