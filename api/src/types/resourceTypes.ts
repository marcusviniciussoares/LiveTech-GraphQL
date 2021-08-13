import { Document, Schema } from 'mongoose';

export interface Resource {
  _id: Schema.Types.ObjectId;
  transmission: {
    isActive: boolean;
    url: string;
  };
  chat: {
    isActive: boolean;
  };
}

export interface ResourceDocument extends Resource, Document {
  _id: Schema.Types.ObjectId;
}
