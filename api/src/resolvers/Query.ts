import { Resolver } from '../types';

const users: Resolver<{}> = (_, args, { db }) => {
  return db.User.find().exec();
};

const messages: Resolver<{}> = (_, args, { db }) => {
  return db.Message.find()
    .sort([['updatedAt', -1]])
    .populate('user')
    .exec();
};

export default {
  users,
  messages,
};
