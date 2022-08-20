import express, { Request, Response } from "express";
import { ApolloServer } from "apollo-server-express";

import { typeDefs } from "./Schema/typeDefs";
import { resolvers } from "./Schema/resolvers";
import PeopleDataSource from "./PeopleDataSource";

export type Context = {
  req: Request;
  res: Response;
  dataSources: {
    swapi: PeopleDataSource;
  };
};

(async function startApolloServer() {
  const app = express();

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => ({
      swapi: new PeopleDataSource(),
    }),
  });

  await server.start();
  server.applyMiddleware({
    app,
    path: "/",
    cors: {
      credentials: true,
      origin: true,
    },
  });

  app.listen({ port: 2000 }, () =>
    console.log(`🚀 Server ready at http://localhost:2000${server.graphqlPath}`)
  );
})();
