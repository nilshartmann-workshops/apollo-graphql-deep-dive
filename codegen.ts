import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:20080/graphql",
  documents: "src/**/*.{ts,tsx,graphql}",
  generates: {
    "./src/_generated-graphql-types.ts": {
      config: {
        // https://the-guild.dev/graphql/codegen/plugins/typescript/typescript-operations

        //https://www.apollographql.com/docs/react/development-testing/graphql-codegen#recommended-starter-configuration
        // Apollo Client always includes `__typename` fields
        nonOptionalTypename: true,
        // Apollo Client doesn't add the `__typename` field to root types so
        // don't generate a type for the `__typename` for root operation types.
        skipTypeNameForRoot: true,
        typesPrefix: "G_",
        printFieldsOnNewLines: true,
        scalars: {
          DateTime: "string",
        },
        enumsAsTypes: true,
        inlineFragmentTypes: "combine",
        // extractAllFieldsToTypes: true,
        omitOperationSuffix: true,
        maybeValue: "T",
      },
      plugins: ["typescript", "typescript-operations", "typed-document-node"],
    },
  },
};

export default config;
