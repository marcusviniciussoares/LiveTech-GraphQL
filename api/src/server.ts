import { resolve } from 'path';
import { GraphQLServer, PubSub } from 'graphql-yoga';
import { models as db } from './models';
import resolvers from './resolvers';

const typeDefs = resolve(__dirname, 'schema.graphql');
const pubsub = new PubSub();

const server = new GraphQLServer({
  typeDefs,
  resolvers,
  context: { db, pubsub },
});

export default server;
