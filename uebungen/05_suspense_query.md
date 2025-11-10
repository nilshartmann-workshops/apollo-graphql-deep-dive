# Übung: Client-seitiger Query mit Suspense

# Schritte

1. Vervollständige den Query in `src/components/articlepage/RelatedArticlesSlider.tsx`
2. Lasse den Code-Generator laufen
3. Führe den Query in der Komponente mit `useSuspenseQuery` aus
4. Ergänze die `RelatedArticlesSlider`-Komponente in `articles/[articleId]/page.tsx`

- Du kannst sie als Children von `sidebar` in einer `SidebarBox` rendern:
  - ```tsx
    <SidebarBox title={"Read more"}>
      <RelatedArticlesSlider articleId={articleId} />
    </SidebarBox>
    ```

4. Binde den `ApolloWrapper` in die Anwendung ein (`src/app/layout.tsx`), der den Apollo Client für Client-Komponenten zur Verfügung stellt
5. Wenn die "related articles" korrekt angezeigt werden, simuliere einen langsamen Request, in dem du in `demo-config.ts` die Konstante `RelatedArticles` auf einen hohen Wert in Millisekunden setztn (z. B. 2000).

- Achtung! Dein Query muss genauso wie die Konstante heißen
- Wenn du deinen Query anders genannt hast, füge einfach eine neue Konstante mit dem Namen deines Queries in `demo-config.ts` hinzu
- Hintergrund: Der "slowdown-link", der bereits konfiguriert und hinzugefügt ist, verzögert automatisch alle "Operations", die in der `demo-config.ts` enthalten sind

6. Überlege, ob bzw. wo du ein Suspense-Boundary einziehst, um mit langsamen Requests umzugehen

# Material

- `useSuspenseQuery`: https://www.apollographql.com/docs/react/api/react/useSuspenseQuery
- Apollo Client Next.js-Integration für Client-Komponenten: https://github.com/apollographql/apollo-client-integrations/tree/main/packages/nextjs#in-client-components-and-streaming-ssr
- React `Suspense`-Komponente: https://react.dev/reference/react/Suspense
- `ApolloProvider`: https://www.apollographql.com/docs/react/api/react/ApolloProvider
- Apollo Client **Dev Tools** für Chrome und Firefox: https://www.apollographql.com/docs/react/development-testing/developer-tooling#apollo-client-devtools
