import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import Todo from "./Todo";

@Entity("images")
export default class Image {
  @PrimaryGeneratedColumn("increment")
  id!: number;

  @Column()
  path!: string;

  @ManyToOne(() => Todo, (todo) => todo.images)
  @JoinColumn({ name: "todo_id" })
  todo!: Todo;
}
