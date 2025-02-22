# Entwerfe Layouts für unsere Anwendung

# Dateien

- src/layout.tsx
- src/articles/layout.tsx

# Schritte

1. "Verschönere" das Root-Layout

   - Füge grafische Elemente ein, die für alle Routen sichtbar sind
     - zum Beispiel einen globalen Header und/oder Footer
     - das Layout soll einen Link auf die Root-Route (`/`) enthalten, so dass man von allen
       Seiten der Anwendung aus wieder auf die Root-Route kommt

2. Baue ein Layout für die `articles`-Route

   - Alle Seiten unterhalb von `articles` sollen ein gemeinsames Layout haben
   - Füge auch hier zum Beispiel einen Header oder einen Rahmen ein

3. "NewsletterRegistration" im Root-Layout

   - Füge im Root-Layout die fertige Komponente `NewsletterRegistration` ein
   - Diese stellt u.a. ein Eingabefeld dar
   - Gib ein paar Zeichen in das Eingabefeld ein und navigiere zwischen `/` und `/articles` hin- und her, in dem du auf die jeweiligen Links klickst (_nicht_ Back-Button verwenden)
   - Was passiert mit deiner Eingabe in das Textfeld?
