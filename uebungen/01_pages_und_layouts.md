# Mache dich mit den Grundlagen des Next.js App Routers vertraut

> **Hintergrund: Router in Next.js**
>
> Es gibt zwei Router in Next.js: den **Pages** und den **App** Router.
> Der Pages Router ist schon älter und der aktuelle Router ist der **App** Router, den wir auch benutzen
> Du musst in der Next.js-Doku aufpassen, dass du immer den richtigen Router auswählst
> Du kannst zwischen den beiden Routern links oben auf der Seite wechseln. Insbesondere wenn du über
> eine Suchmaschine o.ä. auf die Next.js-Dokumentation kommst, kann es sein, dass der Page Router ausgewählt
> ist.
>
> Man kann die beiden Router auch - im Source-Code einer Anwendung - daran unterscheiden, dass die
> Routen beim Pages Router unterhalb des `pages`-Verzeichnisses liegeb und beim App Router unterhalb
> von `app`

# Vorbereitung

- Bitte stelle sicher, dass das Backend bei dir läuft, auch wenn wir das erst später brauchen.
  - Du kannst das Backend mit Docker starten
- Starte außerdem den Next.js Development Server. Dazu im Root-Verzeichnis ausführen:
  - ```bash
    pnpm dev
    ```
- Der Next.js-Server läuft auf Port `20000`. Wenn du http://localhost:20000 im Browser öffnest,
  sollte eine fast leere Seite erscheinen ("Hello Next.js Workshop")

# Dateien

**Informationen zum Workspace**: Zur Struktur des Workspaces kannst du in die Datei `WORKSPACE.md` im Root-Verzeichnis schauen.

- `src/app/page.tsx` (anlegen)
- `src/app/articles/page.tsx` (anlegen)
- `src/app/layout.tsx`

# Schritte

1. Lege die Seite für die Landing-Page (Root-Pfad `/`) an

   - Die Seite muss keinen tollen Inhalt haben, Hello-World-Content reicht

2. Vervollständige das Root-Layout, so dass deine Landing-Page auch angezeigt wird

   - Das bestehende `div`-Element von unterhalb von `body` kannst du löschen. Es dient nur als Platzhalter.
   - Stattdessen musst du die `children` rendern (`{children}`)
   - "Echte" Layout-Funktionalität (Ausrichtung, Spalten, Header etc.) brauchen wir hier noch nicht
     - Mehr zu Layout sehen wir uns im nächsten Schritt an

3. Erzeuge eine Seite für die Route `/articles`

   - Auch hier reicht es, wenn du erstmal nur Hello-World-Content ausgibst. Wir werden die Seite später mit Leben füllen.

4. Erstelle einen Link von der Landing Page
   - Auf der Landing Page soll ein Link gerendert werden, mit dem man zur `/articles`-Seite gelangt

# Material

- **Pages und Layouts**
  - Creating a Page: https://nextjs.org/docs/app/getting-started/layouts-and-pages#creating-a-page
  - Creating a Layout: https://nextjs.org/docs/app/getting-started/layouts-and-pages#creating-a-layout
  - File conventions:
    - page.js/.tsx: https://nextjs.org/docs/app/api-reference/file-conventions/page
    - layout.js/.tsx: https://nextjs.org/docs/app/api-reference/file-conventions/layout
- Link Komponente: https://nextjs.org/docs/app/api-reference/components/link
