// https://www.apollographql.com/docs/react/api/link/apollo-link-context
import { SetContextLink } from "@apollo/client/link/context";
import { delayConfig } from "@/demo-config";

export function createSlowdownLink(label: string) {
  return new SetContextLink((currentContext, { operationName, variables }) => {
    console.log(
      `[${label}] Executing GraphQL operation`,
      operationName,
      variables,
    );
    if (!operationName) {
      return currentContext;
    }

    const slowdown = delayConfig[operationName];
    if (!slowdown) {
      return currentContext;
    }

    console.info(
      `[${label}] Slowdown GraphQL operation`,
      operationName,
      slowdown + "ms",
    );

    return {
      ...currentContext,
      headers: {
        ...currentContext.headers,
        slowdown,
      },
    };
  });
}
