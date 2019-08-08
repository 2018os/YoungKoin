import { ApolloClient, HttpLink, InMemoryCache } from "apollo-boost";
import "cross-fetch/polyfill";

const endPointUrl = "http://localhost:4000";
const client = new ApolloClient({
  link: new HttpLink({ uri: endPointUrl }),
  cache: new InMemoryCache()
});

export default client;
