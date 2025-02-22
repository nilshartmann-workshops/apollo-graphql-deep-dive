# Lade die Artikel-Liste und zeige die Artikel an

# Vorbereitung

- Achtung! Spätestens hier muss das Backend mit der GraphQL API laufen!
- Bitte stelle sicher, dass das Backend bei dir gestartet ist.

# Dateien

- src/app/articles/page.tsx

# Schritte

1. Lade die Artikel-Liste für die `/articles`-Route

   - Du kannst die fertige Funktion `fetchArticleList` verwenden
     - Den GraphQL Query, den die Funktion ausführt, kannst du in der Datei `get-article-list.graphql` sehen
     - Wenn du den Query ausprobieren willst, kannst du GraphiQL im Backend öffnen (http://localhost:20080) und den Query darin ausführen
       - Du musst dann auch das `BaseArticle`-Fragment aus der Datei `basearticle.graphql` in GraphiQL kopieren
   - Die Funktion liefert ein Promise mit dem Ergebnis zurück, auf das du warten musst
     - Deine Komponenten-Funktion muss folglich eine `async`-Funktion sein

2. Zeige die geladenen Artikel an

   - Die geladenen Artikel sollen in einer Liste angezeigt werden
   - Zur Darstellung eines einzelnen Artikels kannst du die (fast) fertige Komponente `ArticleCard` verwenden
     - Du kannst dir aber auch eine eigene Komponente bauen
     - Es gibt einen TypeScript-Typen (`BaseArticle`), der die Daten eines einzlenen Artikels beschreibt, so wie sie von dem GraphQL Query gelesen werden

# Material

- **JavaScript**
  - async-Function: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
  - await-Schlüsselwort: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await
- **React**
  - Listen mit React: https://react.dev/learn/rendering-lists
