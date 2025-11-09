"use client";

import { HttpLink } from "@apollo/client";
import {
  ApolloClient,
  ApolloNextAppProvider,
  InMemoryCache,
} from "@apollo/client-integration-nextjs";
import { graphQlFetchCache } from "@/demo-config";
import { createSlowdownLink } from "@/slowdown-link";
import { ReactNode } from "react";

const fetchOptions =
  graphQlFetchCache === "force-cache"
    ? ({ cache: "force-cache" } as const)
    : undefined;

//  https://github.com/apollographql/apollo-client-integrations/tree/main/packages/nextjs#in-client-components-and-streaming-ssr
function apolloWrapper() {
  const httpLink = new HttpLink({
    // this needs to be an absolute url, as relative urls cannot be used in SSR
    //   NOTE
    //     -> Requests are run from Server (SSR) _AND_ client
    //     -> make sure CORS settings are correct
    uri: "http://localhost:20080/graphql",
    fetchOptions,
  });

  // use the `ApolloClient` from "@apollo/client-integration-nextjs"
  // use the `InMemoryCache` from "@apollo/client-integration-nextjs"
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: createSlowdownLink("SSR").concat(httpLink),
  });
}

type ApolloWrapperProps = {
  children: ReactNode;
};

export default function ApolloWrapper({ children }: ApolloWrapperProps) {
  return (
    <ApolloNextAppProvider makeClient={apolloWrapper}>
      {children}
    </ApolloNextAppProvider>
  );
}
