import { Schema, model } from "mongoose";

const patientSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    diagnosedWith: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    bloodGroup: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      enum: ["Male", "Female", "Other", "Prefer Not To Say"],
      required: true,
    },
    admittedIn: {
      type: Schema.Types.ObjectId,
      ref: "Hospital",
    },
  },
  { timeseries: true }
);

export const Patient = model("Patient", patientSchema);
