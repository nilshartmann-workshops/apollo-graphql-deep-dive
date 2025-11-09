// https://www.apollographql.com/docs/react/api/link/apollo-link-context
import { SetContextLink } from "@apollo/client/link/context";
import { delayConfig } from "@/demo-config";

export const slowdownLink = new SetContextLink(
  (currentContext, { operationName }) => {
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
  },
);
