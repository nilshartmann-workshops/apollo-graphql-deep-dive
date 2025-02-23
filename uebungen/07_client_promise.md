# Verwende "echte" Daten in der RelatedArticlesSlider-Komponente

# Dateien

- src/app/articles/[articleId]/page.tsx
- src/app/articles/[articleId]/RelatedArticlesSlider.tsx

# Schritte

1. Lade in der Seite mit der Einzeldarstellung eines Artikels die "related articles" zu dem aktuellen Artikel

   - Du kannst dazu die fertige Query-Funktion `fetchRelatedArticles` verwenden
   - Übergib das _Promise_ mit den Daten an deine `RelatedArticlesSlider`-Komponente

2. Erweitere die `RelatedArticlesSlider`-Komponente

   - Definiere einen TypeScript-Typ für deren Properties
     - Es muss ein Property für das Promise mit den Artikeln geben
   - Warte in der Komponente, bis das Promise aufgelöst ist und die Daten zur Verfügung stehen
   - Entferne `dummyRelatedArticles` aus deiner Komponente und verwende stattdessen die geladen Daten

3. Zeige eine Lade-Information an

   - Du kannst das Laden der "related articles" in der `demo-config.ts`-Datei künstlich verlangsamen
     - Verzögerung in Millisekunden in `GetRelatedArticles` setzen
   - Verwende Suspense, um eine Lade-Information auszugeben

4. Optional: Behebe den "Request-Wasserfall"

   - Auf Seite zur Einzeldarstellung eines Artikels haben wir einen "Request Wasserfall", denn wir laden Daten in drei Requests:
     - Artikel
     - Related Articles
     - Kommentare
   - Die Kommentare werden erst geladen, wenn der Artikel geladen wurde
     - Verzögere in der `demo-config.ts`-Datei das Laden des Artikels und der Kommentare, um den Effekt zu beobachten:
       - Laden des Artikels `GetArticle`: `3000`
       - Laden der Kommentare: `GetCommentList`: `1500` (etwas kürzer als Artikel Ladezeit)
     - Öffne jetzt die Seite eines Artikels
       - Eventuell die Seite im Browser neuladen, damit sie nicht aus dem Cache kommt
     - Was passiert?
     - Kannst du das Laden optimieren, so dass es nicht zu Wasserfällen kommt?
       - Du musst die `CommentList`-Komponente anpassen
       - Welche Suspense Boundaries sind deiner Ansicht nach hier sinnvoll?

# Material

- React `use`-Funktion: https://react.dev/reference/react/use
