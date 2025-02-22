# Feedback für lange Wartezeiten

# Dateien

- src/app/articles/[articleId]/page.tsx
- src/app/articles/[articleId]/loading.tsx
- src/demo-config.ts

# Schritte

1. Verzögere das Laden eines Artikels

   - Die Datei `src/demo-config.ts` enthält einige Einstellungen, um das Laufzeitverhalten der Anwendung zu Demo-Zwecken zu verändern
   - Du kannst hier eine künstliche Verlangsamung der Queries eintragen
   - Für unseren Fall musst du `GetArticle` setzen (Zeit in ms, die das Laden verzögert wird)
   - Wenn du jetzt die Einzeldarstellung eines Artikels aufrufst, passiert lange... nichts...

2. Füge einen Lade-Hinweis hinzu

   - Verwende `loading.tsx` um eine Meldung o.ä. auszugeben, während der Artikel geladen wird

3. Zeige die Kommentare an
   - Baue in der Einzeldarstellung die `CommentList`-Komponente ein
   - Diese lädt eine Liste von Kommentaren zu einem Artikel und zeigt sie an
   - Verlangsame auch diesen Query (`GetCommentList` in `demo-config.ts`).
   - Füge ein `Supsense`-Boundary ein und zeige auch für die Kommentare eine Wartemeldung an

# Material

- Loading and streaming: https://nextjs.org/docs/app/building-your-application/routing/loading-ui-and-streaming
- loading.js/.tsx: https://nextjs.org/docs/app/api-reference/file-conventions/loading
- React Suspense Komponente: https://react.dev/reference/react/Suspense
