import { Entity, Column, PrimaryGeneratedColumn,  ObjectID, ObjectIdColumn } from 'typeorm';
 
@Entity()
export class Task {
  @ObjectIdColumn()
  _id: number;
 
  @Column()
  title: string;
 
  @Column()
  text: string;
}