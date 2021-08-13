import { Schema, model } from 'mongoose';
import { UserDocument } from '../types';

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
});

export default model<UserDocument>('User', userSchema);
