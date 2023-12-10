import { Schema } from "mongoose";

const UserSchema: Schema = new Schema({
    uid: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String },
    password: { type: String, required: true },
    updated_at: { type: Date, default: Date.now },
    created_at: { type: Date, default: Date.now },
  });

export default UserSchema;