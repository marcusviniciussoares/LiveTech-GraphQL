import { Schema, model } from 'mongoose';
import { ResourceDocument } from '../types';

const resourceSchema = new Schema({
  transmission: {
    isActive: {
      type: Boolean,
      required: true,
    },
    url: {
      type: String,
    },
  },
  chat: {
    isActive: {
      type: Boolean,
      required: true,
    },
  },
});

export default model<ResourceDocument>('Resource', resourceSchema);
