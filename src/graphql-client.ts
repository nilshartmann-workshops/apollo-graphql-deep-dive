import { HttpLink } from "@apollo/client";
import {
  ApolloClient,
  InMemoryCache,
  registerApolloClient,
} from "@apollo/client-integration-nextjs";
import { createSlowdownLink } from "@/slowdown-link";

const httpLink = new HttpLink({
  // this needs to be an absolute url, as relative urls cannot be used in SSR
  uri: "http://localhost:20080/graphql",
});

// Schritt 1:
//  - Workspace zeigen:
//    - Diese Datei
//    - Code-Generator
//  - IntelliJ Tooling
//  - erklären, was "query" und "getClient" ist
//  - Ausblick: diese Konfiguration ist nur für RSC (SSR+Client-Komponenten später)

// https://github.com/apollographql/apollo-client-integrations/tree/main/packages/nextjs#in-rsc
export const { query: graphlQuery, getClient: getApolloRscClient } =
  registerApolloClient(() => {
    return new ApolloClient({
      cache: new InMemoryCache(),
      link: createSlowdownLink("RSC").concat(httpLink),
    });
  });
