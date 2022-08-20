import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const cache = new InMemoryCache({
    typePolicies: {
        Person: {
          // The name uniquely identifies earch person in the cache
          keyFields: ["name"],
        },
      },
});

const uri = `http://${window.location.hostname}:2000/graphql`;

const client = new ApolloClient({
  cache,
  link: new HttpLink({
    credentials: "include",
    uri,
  }),
});

export default client;
