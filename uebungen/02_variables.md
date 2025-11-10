# Übung: Ein Query mit Variablen

# Schritte

- **Implementiere den Query zum Laden eines Artikels auf der Artikel-Detailseite**
- Datei: `src/app/articles/[articleId]/page.tsx`
- Lege dort eine neue Datei an, in die du deinen Query schreibst.
  - Den Dateinamen kannst du frei wählen, aber er muss mit `.graphql` enden
- Dein Query braucht eine Varibale für die `articleId`
- Die folgenden Felder sollen vom `article` abgefragt werden:
  - ```graphql
    {
      article {
        id
        title
        excerpt(maxLength: 120)
        date
        category
        likes
        body
        image {
          uri
          altText
        }
        writer {
          name
        }
      }
    }
    ```
- Stelle sicher, dass danach der Code-Generator ausgeführt wird
- Lade die Daten für den Artikel in der Route-Komponente für (`/articles/[articleId]`)
- Wenn es den Artikel nicht gibt, bzw. der Query keine Daten zurückliefert, löse `notFound` aus
- Zum Darstellen des Artikels kannst du folgende Komponenten nutzen:
  - ```tsx
    <main>
      <ArticleBanner article={data.article} />
      <TwoColumnLayout>
        <ArticleBody body={data.article.body} />
      </TwoColumnLayout>
    </main>
    ```

# Material

- Variables (GraphQL Spec) https://spec.graphql.org/September2025/#sec-Language.Variables
- Variables https://www.apollographql.com/docs/graphos/resources/glossary?docs%5Bquery%5D=variable
- Beispiele für Variablen in `useSuspenseQuery` (Angabe erfolgt mit `query` aus dem `ApolloClient` identisch) https://www.apollographql.com/docs/react/data/suspense#fetching-with-suspense
