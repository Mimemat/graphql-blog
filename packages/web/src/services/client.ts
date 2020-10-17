import { DocumentNode } from 'graphql';
import { GraphQLClient } from 'graphql-request';

export type IVariables = { [key: string]: any };

export type IRequest = string | DocumentNode;

export const client = new GraphQLClient('http://localhost:4000/graphql');
