import { HttpLink } from "@apollo/client";
import {
  registerApolloClient,
  ApolloClient,
  InMemoryCache,
} from "@apollo/client-integration-nextjs";

import { delayConfig, graphQlFetchCache } from "@/demo-config";
import { SetContextLink } from "@apollo/client/link/context";

const fetchOptions =
  graphQlFetchCache === "force-cache"
    ? ({ cache: "force-cache" } as const)
    : undefined;

const httpLink = new HttpLink({
  // this needs to be an absolute url, as relative urls cannot be used in SSR
  uri: "http://localhost:20080/graphql",
  fetchOptions,
});

// https://www.apollographql.com/docs/react/api/link/apollo-link-context
const slowdownLink = new SetContextLink((currentContext, { operationName }) => {
  console.log("GraphQL Operation", operationName);

  if (!operationName) {
    return currentContext;
  }

  const slowdown = delayConfig[operationName];
  if (!slowdown) {
    return currentContext;
  }

  console.info("Slowdown GraphQL operation", operationName, slowdown + "ms");

  return {
    ...currentContext,
    headers: {
      ...currentContext.headers,
      slowdown,
    },
  };
});

// https://github.com/apollographql/apollo-client-integrations/tree/main/packages/nextjs#in-rsc
export const { getClient, query, PreloadQuery } = registerApolloClient(() => {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: slowdownLink.concat(httpLink),
  });
});
