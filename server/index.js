import { GraphQLServer } from "graphql-yoga";
import resolvers from "./resolvers";

const server = new GraphQLServer({
  typeDefs: "schema.graphql",
  resolvers: resolvers
});
const opt = {
  port: 4000,
  playground: "/playground"
};

server.start(opt, ({ port }) =>
  console.log(`Graphql Server Running on ${port}`)
);
