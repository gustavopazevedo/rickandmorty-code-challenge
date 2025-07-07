import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const apolloClient = new ApolloClient({
  link: new HttpLink({
    uri: process.env.NEXT_PUBLIC_GRAPHQL_API_URL,
  }),
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          characters: {
            keyArgs: ['filter'],
            merge(existing = { results: [] }, incoming) {
              return {
                ...incoming,
                results: [
                  ...(existing.results ?? []),
                  ...(incoming.results ?? []),
                ],
              };
            },
          },
          locations: {
            keyArgs: ['filter'],
            merge(existing = { results: [] }, incoming) {
              return {
                ...incoming,
                results: [
                  ...(existing.results ?? []),
                  ...(incoming.results ?? []),
                ],
              };
            },
          },
        },
      },
    },
  }),
});

export default apolloClient;
