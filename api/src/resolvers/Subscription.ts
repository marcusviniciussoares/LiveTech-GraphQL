import { Subscription } from '../types';

const newMessage: Subscription<{}> = {
  subscribe: (_, args, { pubsub }) => {
    return pubsub.asyncIterator('NEW-MESSAGE');
  },
};

export default {
  newMessage,
};
