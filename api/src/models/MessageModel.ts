import { Schema, model } from 'mongoose';
import { MessageDocument } from '../types';

const messageSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export default model<MessageDocument>('Message', messageSchema);
