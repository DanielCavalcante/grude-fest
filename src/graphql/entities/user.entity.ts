import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'
import { ObjectType, Field } from 'type-graphql'

@ObjectType()
@Entity('users')
export class User {

  @Field()
  @PrimaryGeneratedColumn()
  id: number

  @Field()
  @Column({ nullable: false })
  email: string

  @Field()
  @Column({ nullable: false })
  password: string

  @Field()
  @Column()
  active: boolean

  @Field()
  @Column({ name: 'created_at', type: "timestamp", default: () => "CURRENT_TIMESTAMP"})
  createdAt: Date

}
