# Vorbereitung

# Voraussetzungen

- Node.js (mindestens Version 22)
- IDE/Editor
  - Wenn du **IntelliJ/Webstorm** verwendest, bitte beachten, dass du mindestens eine 2025.x-Version verwendest
  - Ich weiß nicht genau, was die älteste Version ist, die funktioniert, möglicherweise gehen 2024.x-Versionen auch
  - Wenn du ein "komisches" Verhalten mit TypeScript feststellst, ist die Version vermutlich zu alt...

# Klonen des Repositories

- Bitte dieses Repository klonen (Link gebe ich euch)
- Ihr könnt das Repository dann in Webstorm, IntelliJ oder VS Code öffnen

# Starten des GraphQL Backends

### Einfachste Variante:

- Das GraphQL Backend könnt ihr **per Docker** starten
- Das Backend läuft dann auf Port `20080` bei euch
- ```
  docker run --pull always --rm -p 20080:20080 -e SPRING_GRAPHQL_CORS_ALLOWED_ORIGIN_PATTERNS="*" ghcr.io/nilshartmann/ecolify-backend:latest
  ```
- Wenn das Backend läuft, zum testen aufrufen: http://localhost:20080
  - Dort sollte GraphiQL aufgehen
    - Zum testen könnt ihr in GraphiQL ausführen:
      - ```graphql
        query {
          relatedArticles(articleId: "A_16") {
            id
            title
            requestedAt
          }
        }
        ```

### 2. einfachste Variante:

- Falls Docker bei euch lokal nicht funktioniert, könnt ihr das Backend aus der Cloud verwenden
- GraphiQL dafür ist über https://ecolify-backend.fly.dev erreichbar
- Dann müsst ihr lokal nichts starten, aber bitte in den folgenden Dateien:
  1. `codegen.ts`
  2. `graphql.config.yml`
  3. `src/graphql-client.ts`
  4. `ApolloWrapper.tsx`
  - jeweils die URL `http://localhost:20080/graphql` durch `https://ecolify-backend.fly.dev/graphql` ersetzen

# Starten der Next.js-Anwendung

- Die Next.js-Anwendung läuft auf Port `20000` bei euch
- Bitte im Root-Verzeichnis des Verzeichnis einmal die Packages installieren
  - Ich habe das mit `pnpm` gemacht, aber npm funktioniert hoffentlich auch!
  - `pnpm install` bzw. `npm install`
- Zum Starten der Anwendung bitte `pnpm dev` bzw `npm run dev` ausführen
  - oder entsprechend aus der IDE/Editor
- Zum testen einmal http://localhost:20000 öffnen und auf "Let me in..." klicken
  - Nach dem Klicken auf den Link sollte eine Seite mit einem "todo" erscheinen
  - dann ist alles gut und wir können anfangen!

# Starten des GraphQL Code Generators

- Zum Starten des Code Generators (im "watch"-Modus) bitte ausführen:
  - `pnpm graphql:codegen:watch` (bzw. `npm run graphql:codegen:watch`)

# Wenn alles bei dir läuft...

- ...bitte Hand in Teams heben, damit ich weiß, dass du fertig bist
