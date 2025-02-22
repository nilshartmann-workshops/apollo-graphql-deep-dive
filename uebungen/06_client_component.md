# Interaktivität mit Client Komponenten: ein Slider für "related articles"

# Dateien

- src/app/articles/[articleId]/page.tsx
- src/app/articles/[articleId]/RelatedArticlesSlider.tsx (anlegen)

# Schritte

1. Lege eine neue Komponente `RelatedArticlesSlider` an

   - Lege dafür auch eine neue Datei an
   - Diese Komponente muss eine React Client Component sein!
   - Es gibt bereits eine _Liste_ von Dummy-Artikeln in der `demo-config.ts`-Datei (`dummyRelatedArticles`)
     - Diese Liste kannst du als Quelle für die "related" Artikel verwenden
     - In der nächsten Übung werden wir die Artikel vom Backend lesen
     - Du kannst die Liste in deiner Komponente als Variable `articles` ablegen:
       - const articles = dummyRelatedArticles;
       - Wenn du dann in deiner Komponenten mit `articles` arbeitest, ist das Refaktoring in der nächsten Übung einfacher.
   - Verwende in der Komponente `RelatedArticleBox`, um zunächst einen beliebigen "related" Artikel aus `dummyRelatedArticles` anzuzeigen

2. Binde den `RelatedArticlesSlider` in der Artikel-Einzeldarstellung ein (`/articles/[articleId]`)

3. Implementiere den `RelatedArticlesSlider`, so dass man durch die Artikel klicken kann
   - Du brauchst einen React State mit der dem aktuell ausgewählten Artikel
   - Wenn man am Ende der Liste ist und auf "Next" klickt, soll der erste Artikel angezeigt werden
   - Wenn man am 1. Artikel ist und auf "Prev" klickt, soll der letzte Artikel aus der Liste angezeigt werden

# Material

- "use client": https://react.dev/reference/rsc/use-client
