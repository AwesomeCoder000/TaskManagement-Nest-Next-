import { Field, ID, ObjectType, registerEnumType } from "@nestjs/graphql";

import { TaskModel } from "@/models/task.model";

export enum Color {
  red = "red",
  blue = "blue",
  green = "green",
}

registerEnumType(Color, { name: "Color" });

@ObjectType()
export class CategoryModel {
  @Field((type) => ID)
  id: number;

  @Field()
  name: string;

  @Field((type) => Color)
  color: Color;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;

  @Field((type) => TaskModel, { defaultValue: [] })
  tasks: TaskModel[];
}
