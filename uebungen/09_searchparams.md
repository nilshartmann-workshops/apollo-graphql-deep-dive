# Implementiere die Sortierung für die Artikel-Liste

# Dateien

- src/components/OrderButton.tsx
- src/app/articles/page.tsx

# Schritte

1. Ergänze auf der Seite für die Artikel-Liste die `ArticleListNavBar`-Komponente

   - Diese Komponente rendert drei Button zum Sortieren nach Datum (default), Likes und Category
   - Dazu verwendet sie die `OrderButton`-Komponente
   - ...und die ist leider nicht fertig implementiert

2. Implementiere die `OrderButton`-Komponente

   - diese soll den `orderBy`-Suchparameter in der URL aktualisieren
   - weitere Hinweise dazu findest du in der Komponente selbst

3. Lade die Artikelliste mit der eingestellten Sortierreihenfolge

   - Definiere den TypeScript-Typ für die Properties der Artikel-Listenseite (`app/articles/page.tsx`)
     - Das Property muss `searchParams` heissen und ist ein `Promise`
   - Ergänze die Funktionssignatur der Komponente um das Properties-Objekt
   - In der Artikel-Liste wird die Funktion `fetchArticleList` verwendet
     - Dieser Funktion kannst du (als Objekt) die Sortierreihenfolge (`orderBy`) aus den Search Params übergeben

4. Optional, wenn noch Zeit ist: Implementiere Pagination für die Artikelliste

   - Die `fetchArticleList`-Funktion kann eine `page` mit einer Seitennummer entgegennehmen
   - Kannst du Links oder Button für die Artikel-Liste bauen, die in der URL eine Seitenzahl als Search Paramter setzt (zusätzlich zu `orderBy`)? Die Daten dieser Seite sollen dann natürlich mit gelesen und angezeigt werden, so dass man durch alle Artikel seitenweise blättern kann.

# Material

- Next.js Search Params:
  - Search Params in den Komponenten Properties einer Seite: https://nextjs.org/docs/app/api-reference/file-conventions/page#searchparams-optional
  - useSearchParams zum Zugriff auf die aktuellen Search-Parameter in einer **Client** Komponente: https://nextjs.org/docs/app/api-reference/functions/use-search-params
- Web API:
  - URLSearchParams zum Parsen und Erzeugen von Suchparametern aus der URL: https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams
  -
