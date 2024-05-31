import { Schema, Model } from "mongoose";

const todoSchema = new Schema(
  {
    content: {
      type: String,
      required: true,
    },
    complete: {
      type: Boolean,
      default: false,
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    subTodos: [
      {
        type: Schema.Types.ObjectId,
        ref: "SubTodo",
      },
    ],
  },
  { timestamps: true }
);

export const Todo = Model("Todo", todoSchema);
