import * as mongoose from 'mongoose';

export const TodoSchema = new mongoose.Schema(
  {
    todoid: { type: Number, required: true, unique: true },
    content: { type: String, required: true },
    completed: { type: String, default: false },
  },
  {
    timestamps: true,
  },
);
