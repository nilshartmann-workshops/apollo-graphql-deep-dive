# Implementiere das LikesWidget zum "Liken" eins Artikels

# Dateien

- src/components/LikesWidget.tsx
- src/components/likes-actions.ts (anlegen)

# Schritte

1. Lege das Modul für die "likeAction" an: (`src/components/likes-actions.ts`)

   - Das Modul ist ein Server-Modul, muss also mit der entsprechenden Direktive gekennzeichnet werden!

2. Implementiere die `saveLikeAction`-Funktion:

   - Definiere dazu zunächst den TypeScript-Typen für deinen "Action State"
     - `likes`: `number`
   - Die `saveLikeAction`-Funktion erwartet zwei Parameter:
     1. deinen state
     2. das `FormData`-Objekt
   - Lies `articleId` aus dem `FormData`-Objekt aus
   - Zum Aktualisieren des Likes kannst du die fertige Funktion `mutateArticleLikes` verwenden
     - Diese führt eine GraphQL Mutation aus
     - Wenn die Mutation erfolgreich ist, liefert sie die neue Anzahl Likes zurück
     - Wenn die Mutation nicht erfolgreich ist, liefert sie `null` zurück
   - Die `saveLikeAction`-Funktion muss ein State Objekt zurückliefern:
     - ...mit den neuen Likes, wenn das Speichern erfolgreich war
     - ...mit den bisherigen Likes, wenn es einen Fehler gab

3. Ergänze das `LikesWidget`

   - Verwende `useActionState` um eine `action` für das Formular zu bekommen
     - Als initialen Action State musst du die Likes aus den Properties verwenden (`currentLikes`)
   - Ersetze das Top-Level `div`-Element durch ein `form`-Element und setzte das `action`-Property
   - Ergänze ein `hidden` input-Feld, mit der `articleId`, so dass die `articleId` aus den Properties von `LikesWidget` als `value` am input-Feld gesetzt wird
   - Unterhalb des `button`-Elements wird `currentLikes` angezeigt. Diese Information muss jetzt aus deinem Action State kommen.
   - Das Liken sollte jetzt funktionieren

4. Optimiere das Verhalten

   - Während der Like-Request läuft, soll ein Loading Indicator o.ä. angezeigt werden, damit man nicht mehrfach hintereinander auf Like drücken kann
     - zum künstlichen Verlangsamen des Like Requests kannst du in `demo-config.ts` die Zeit bei `AddLike` erhöhen
   - Stelle sicher, dass die aktualisierten Likes in der Artikel-Liste auch dann angezeigt werden, wenn die Seite neu geladen wird
     - Das funktioniert nur, wenn du die Anwendung baust und den Produktionsbuild dann startest:
       - Laufendes Next.js beenden
       - Mit `pnpm build` einen Build erzeugen und Prod-Build mit `pnpm start` starten (selber Port 20000 wie der Development-Server)
     - Denk drank: wenn du dann Änderungen im Code machst, musst du den Server neu bauen und starten
     - Nach der Übung kannst du dann den Dev Server wieder starten

# Material

- React:
  - `"use server"`: https://react.dev/reference/rsc/use-server
  - useActionState: https://react.dev/reference/react/useActionState
- Next.js
  - Revalidate Path: https://nextjs.org/docs/app/api-reference/functions/revalidatePath
