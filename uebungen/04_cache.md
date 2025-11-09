# Verwende "Cache Components", um die Artikel-Liste und die Einzelartikel zu cachen

# Schritte

- Aktiviere `cacheComponents` in `next.config.ts`
- Baue eine Suspense-Komponente jeweils um die Routen-Komponenten von `articles` und `articles/[articleId]`
  - Verschiebe dazu den bestehenden Code der beiden Komponenten in neue Komponenten
  - Die Routen-Komponenten sollen dann nur Suspense + jeweils die neue Komponente rendern
    - (einfache Wrapper-Komponente)
- Die Artikel-Liste soll gecached werden
- Auf `[articleId]` sollen nur die Daten geladen werden
- **Optional**: füge die `CommentList`-Komponente hinzu
  - TODOs siehe dort
  - stelle sicher, dass die Kommantare bei _jedem_ Request geladen werden

# Material

- Next.js Cache Components: https://nextjs.org/docs/app/getting-started/cache-components
  - `use cache`: https://nextjs.org/docs/app/api-reference/directives/use-cache
  - `revalidateTag`: https://nextjs.org/docs/app/api-reference/functions/revalidateTag
- `Suspense`-Komponente von React: https://react.dev/reference/react/Suspense
