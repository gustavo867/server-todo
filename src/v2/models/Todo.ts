import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  JoinColumn,
} from "typeorm";
import Image from "./Image";

@Entity("todos")
export default class Todo {
  @PrimaryGeneratedColumn("increment")
  id!: number;

  @Column()
  message!: string;

  @OneToMany(() => Image, (image) => image.todo, {
    cascade: ["insert", "update"],
  })
  @JoinColumn({ name: "todo_id" })
  images!: Image[];
}
