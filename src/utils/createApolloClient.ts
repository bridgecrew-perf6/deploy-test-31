import { ApolloClient, InMemoryCache, makeVar } from "@apollo/client";
import { withApollo } from "next-apollo";

export const nameVar = makeVar<string[]>(
  (typeof window !== "undefined" &&
    localStorage.getItem("list")! &&
    JSON.parse(localStorage.getItem("list")!).name) ||
    []
);

export const apolloClient = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_API_ENDPOINT,
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          name: {
            read() {
              return nameVar();
            },
          },
        },
      },
    },
  }),
});

export const withApolloClient = withApollo(apolloClient);
