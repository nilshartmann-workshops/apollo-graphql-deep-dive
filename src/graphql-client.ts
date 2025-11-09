import { HttpLink } from "@apollo/client";
import {
  ApolloClient,
  InMemoryCache,
  registerApolloClient,
} from "@apollo/client-integration-nextjs";

import { graphQlFetchCache } from "@/demo-config";
import { createSlowdownLink } from "@/slowdown-link";

const fetchOptions =
  graphQlFetchCache === "force-cache"
    ? ({ cache: "force-cache" } as const)
    : undefined;

const httpLink = new HttpLink({
  // this needs to be an absolute url, as relative urls cannot be used in SSR
  uri: "http://localhost:20080/graphql",
  fetchOptions,
});

// https://github.com/apollographql/apollo-client-integrations/tree/main/packages/nextjs#in-rsc
export const { query: graphlQuery, getClient: getApolloRscClient } =
  registerApolloClient(() => {
    // console.log("Registering Apollo Client for RSC execution");
    return new ApolloClient({
      // connectToDevTools: true, // <-- does not work on SERVER (ofc)
      cache: new InMemoryCache(),
      link: createSlowdownLink("RSC").concat(httpLink),
    });
  });
