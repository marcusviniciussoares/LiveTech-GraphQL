import { GraphQLFieldResolver } from 'graphql';
import { Context } from '.';

export type Resolver<TArgs, TSource = {}> = GraphQLFieldResolver<
  TSource,
  Context,
  TArgs
>;

export type Subscription<TArgs> = {
  subscribe: Resolver<TArgs>;
};
