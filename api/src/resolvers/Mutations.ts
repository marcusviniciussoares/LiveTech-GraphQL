import { MessageCreateInput, Resolver, UserCreateInput } from '../types';

const createUser: Resolver<UserCreateInput> = (_, args, { db }) => {
  const { User } = db;
  const { data } = args;

  const user = new User(data);
  return user.save();
};

const createMessage: Resolver<MessageCreateInput> = async (
  _,
  args,
  { db, pubsub },
) => {
  const { Message, User } = db;
  const { data } = args;

  const message = new Message(data);
  await message.save();
  const user = await User.findById(data.user);
  const { _id: id, ...rest } = message.toJSON();
  const newMessage = { ...rest, id, user };

  pubsub.publish('NEW-MESSAGE', { newMessage });

  return newMessage;
};

export default {
  createUser,
  createMessage,
};
