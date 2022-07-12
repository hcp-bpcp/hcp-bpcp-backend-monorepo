import { Document } from 'mongoose';

export interface Todo extends Document {
  readonly todoid: number;
  readonly content: string;
  readonly completed: string;
}
