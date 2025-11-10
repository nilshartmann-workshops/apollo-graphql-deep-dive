# Übung: Mutations mit Server Actions

# Schritte:

## Teil 1: Anlegen der Server-Function für die Mutation

- Lege die Datei `src/components/likes-action.ts` an
- Diese Datei soll eine _Server Function_ enthalten, in der du die Mutation zum Speichern des Likes implementieren musst

  - Zum Speichern bzw. Hochzählen eines Likes kannst du die folgende Mutation verwenden:

    - ```graphql
      mutation AddLike($articleId: ID!) {
        addLike(input: { articleId: $articleId }) {
          ... on AddLikeSuccess {
            article {
              likes
            }
          }
          ... on AddLikeError {
            msg
          }
        }
      }
      ```

    ```

    ```

- An die serverseitige Instanz des Apollo-Clients kommst du mit der Funktion `getApolloRscClient` (s. `apollo-client.ts`)
- Führe die Mutation aus
- Verwende `revalidatePath` um die Routen in Next.js zu aktualisieren, so dass das die neue Like-Anzahl angezeigt wird.
- **Optional**: prüfe, ob die Mutation erfolgreich ist. Fall nicht, gib einen Fehlermeldung auf der Console aus

## Teil 2: Ausführen der Mutation

- In `src/components/LikesWidget.tsx` musst du die Server Function ausführen
- Lege dazu eine Transition an, damit ein Warte-Hinweis ausgegeben wird ("blinkendes Herz") während die Server Function läuft
- Rufe in der Transition deine Server Function aus
- mehr Infos direkt in `LikesWidget.tsx`

# Material

- Server Functions in React: https://react.dev/reference/rsc/server-functions
- `useTransition`: https://react.dev/reference/react/useTransition
- Mutations in Apollo GraphQL Client: https://www.apollographql.com/docs/react/data/mutations
  - Achtung: wir verwenden in der Server Funktion nicht den Hook `useMutation`, sondern die `mutate`-Methode vom `Apollo Client`. Signatur ist aber nahezu identisch
- `mutate`-Methode: https://www.apollographql.com/docs/react/api/core/ApolloClient#mutate
- `revalidatePath`-Funktion von Next.js, um Routen zu aktualisieren: https://nextjs.org/docs/app/api-reference/functions/revalidatePath
