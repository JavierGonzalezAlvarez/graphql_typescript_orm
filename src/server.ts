import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';

import { RecipeResolver } from "./resolvers/recipe";
import { TestResolver } from "./resolvers/test";

export async function startServer() {

    const app = express();

    const apolloServer = new ApolloServer({
        //create schema
        schema: await buildSchema({
            resolvers: [RecipeResolver, TestResolver],
            validate: false
        }),
        context: ({ req, res }) => ({ req, res })
    });

    await apolloServer.start();

    apolloServer.applyMiddleware({ app, path: "/graphql" })

    return app;
}