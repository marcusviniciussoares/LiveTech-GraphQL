import { Model } from 'mongoose';
import * as AllModels from '.';

export interface Models {
  Message: Model<AllModels.MessageDocument>;
  Resource: Model<AllModels.ResourceDocument>;
  User: Model<AllModels.UserDocument>;
}
