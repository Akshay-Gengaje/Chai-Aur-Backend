import { Schema, Model } from "mongoose";

const medicalRecordSchema = new Schema({}, { timestamps: true });

export const MedicalRecord = Model("MedicalRecord", medicalRecordSchema);
