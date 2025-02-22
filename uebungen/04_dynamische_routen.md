# Dynamische Routen - Einzeldarstellung eines Artikels

# Schritte

1. Lege eine neue Route für die Einzeldarstellung eines Artikels an
   - Die Route soll unterhalb von `/articles` liegen
   - Die Route soll einen Paramter (dynamisches Segment) `articleId` haben
   - Um zu testen:
     - Zeige in der Page-Komponente im ersten Schritt die `articleId` aus den `params` an
     - Achtung! Bei `params` handelt es sich um ein Promise, dass du "awaiten" musst
     - Rufe die URL direkt in deinem Browser auf, z.B. `/articles/333`
2. Setze Links auf die Einzeldarstellung

   - Füge zu jedem Artikel in der Artikel-Liste (Route `/articles`) einen Link auf dessen Einzeldarstellung hinzu
   - Falls du zur Darstellung der Artikel die `ArticleCard` verwendet hast, kannst du diese Anpassen und
     zum Beispiel einen Link um die Überschrift und/oder das Bild setzen
   - Teste, dass die Navigation funktioniert

3. Lade die Artikel-Daten und zeige sie an
   - In der Route für die Einzeldarstellung musst du mithilfe des `articleId`-Parameters den entsprechenden Artikel laden
   - Dazu kannst du die fertige Funktion `fetchArticle` verwenden
   - Die Funktion liefert einen Artikel zurück oder `null`
   - Wenn `null` zurückgeliefert wird, existiert der Artikel nicht. In diesem Fall soll eine Fehlerseite angezeigt werden
   - Wenn der Artikel erfolgreich gelesen werden konnte, zeig den Artikel an
     - Du kannst dir dazu selbst eine (oder mehrere) Komponenten bauen.
     - Der TypeScript-Typ für den gelesenen Artikel ist `Article` (`types.ts`)
     - Alternativ kannst du auch fertige Komponenten verwenden
       - Für fertige Artikel-spezifische Komponenten siehe im Story Book "Article Page Components"

# Material

- Next.js
  - Dynamic Routes: https://nextjs.org/docs/app/getting-started/project-structure#dynamic-routes
  - `params` Property: https://nextjs.org/docs/app/api-reference/file-conventions/page#params-optional
  - `notFound` function: https://nextjs.org/docs/app/api-reference/functions/not-found
  - `not-found` page: https://nextjs.org/docs/app/api-reference/file-conventions/not-found
  -
