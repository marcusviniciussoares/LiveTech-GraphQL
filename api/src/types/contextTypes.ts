import { Models } from '.';
import { PubSub } from 'graphql-yoga';

export interface Context {
  db: Models;
  pubsub: PubSub;
}
