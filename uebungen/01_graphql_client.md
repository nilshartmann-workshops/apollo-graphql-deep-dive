# Übung: Ein GraphQL Query in einer RSC ausführen

# GraphiQL

- Du kannst die Queries testen, in dem du GraphiQL öffnest
- Lokales Backend: http://localhost:20080/
- Cloud Backend: https://ecolify-backend.fly.dev/

# Schritte

1. Beschreibe in `src/app/articles/page.tsx` mit `gql` einen GraphQL Query, der die Artikel für die Artikelübersicht lädt
2. Der Query muss die folgenden Felder abfragen:

- ```graphql
  {
    articleList: articles(pageSize: 6) {
      totalPages

      articles: results {
        id
        title
        excerpt(maxLength: 150)
        date
        category
        likes
        image {
          uri
          altText
        }
      }
    }
  }
  ```

3. Wenn du den Query beschrieben hast, sollte der Code Generator automatisch laufen

- Prüfe, ob die Datei `_generated-graphql-types.ts` aktualisiert wurde
- Eventuell die Datei manuell im Editor aktualisieren
  - In IntelliJ: Rechtsklick -> Reload from Disk
- Wenn die Datei nicht aktualisiert wird, prüfe, ob der Code Generator läuft
  - (Script `graphql:codegen:watch` in der `package.json`-Datei)

4. Für mit `graphqlQuery` (aus `src/graphql-client.ts`) den Query aus
5. Wenn der Query einen `error` hat, kannst du einfach einen error werfen oder eine Fehlermeldung anzeigen
6. Wenn der Query erfolgreich war, render mit jedem Eintrag in `articles` eine `ArticleCard`-Komponente (als Children von `ArticleListGrid`)

# Material

- `gql`-Funktion zum Parsen von GraphQL Requests: https://github.com/apollographql/graphql-tag
- Apollo Client Next.js Intergration: https://github.com/apollographql/apollo-client-integrations/tree/main/packages/nextjs
- `query`-Methode vom ApolloClient: https://www.apollographql.com/docs/react/api/core/ApolloClient#query

- GraphQL Code-Generator (unabhängiges Projekt, kann Code für diverse Frameworks generieren): https://the-guild.dev/graphql/codegen/docs/getting-started
- Konfiguration GraphQL Code-Generator für Apollo Client: https://www.apollographql.com/docs/react/development-testing/graphql-codegen

- **Plug-ins** für IntelliJ und VS Code:
  - IntelliJ: https://plugins.jetbrains.com/plugin/8097-graphql
  - VS Code: https://marketplace.visualstudio.com/items?itemName=GraphQL.vscode-graphql
    - Eventuell zusätzlich:
      - https://marketplace.visualstudio.com/items?itemName=GraphQL.vscode-graphql-execution
      - https://marketplace.visualstudio.com/items?itemName=GraphQL.vscode-graphql-syntax
  - Plug-ins für IntelliJ und VS Code verwenden "GraphQL Config" zur Konfiguration, so dass die Konfigurationsdatei zwischen IntelliJ und VS Code geteilt werden kann (https://the-guild.dev/graphql/config)
