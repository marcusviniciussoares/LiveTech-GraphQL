import { Document, Schema } from 'mongoose';

export interface User {
  _id: Schema.Types.ObjectId;
  name: string;
  email: string;
}

export interface UserCreateInput {
  data: Omit<User, '_id'>;
}

export interface UserDocument extends User, Document {
  _id: Schema.Types.ObjectId;
}
