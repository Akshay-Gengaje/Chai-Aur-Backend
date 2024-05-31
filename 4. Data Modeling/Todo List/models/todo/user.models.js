import { Model, Schema } from "mongoose";

const userSchema = new Schema(
  {
    userName: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
      min: [6, "Password must be at least 6 characters"],
    },
  },
  {
    timestamps: true,
  }
);

export const User = Model("User", userSchema);
