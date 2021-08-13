import { Document, Schema } from 'mongoose';
import { User } from '.';

export interface Message {
  _id: Schema.Types.ObjectId;
  user: User;
  message: string;
  createdAt: string;
  updatedAt: string;
}

export interface MessageCreateInput {
  data: Omit<Message, '_id'>;
}

export interface MessageDocument extends Message, Document {
  _id: Schema.Types.ObjectId;
}
