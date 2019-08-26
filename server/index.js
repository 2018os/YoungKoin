import { GraphQLServer } from "graphql-yoga";
import resolvers from "./resolvers";
import User from "./mongoose/model";
import connect from "./mongoose";

connect();
const server = new GraphQLServer({
  typeDefs: "schema.graphql",
  resolvers: resolvers,
  context: { User }
});
const opt = {
  port: 4000,
  playground: "/playground"
};

server.start(opt, ({ port }) =>
  console.log(`Graphql Server Running on ${port}`)
);
