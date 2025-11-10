# Übung: Fragmente und Co-Location

# Schritte

1. Erzeuge ein Fragment in `ArticleCard`
2. Das Fragment soll alle Felder enthalten, die für die `ArticleCard`-Komponente aus einem `Article` benötigt werden

- (Die Felder findest du in deinem bestehendem Query `src/app/page.tsx`)

3. Achte darauf, dass der Code Generator läuft und der Typ (`G_DeinFragmentName`) generiert wird

- Ggf. die generierte Datei `src/_generated-graphql-types.ts` erneut von der Festplatte einlesen

4. Verwende den generierten Typen als Typ für das `article`-Property in `ArticleCard`
5. Bindes das Fragment in deinen bestehenden Query in `src/app/page.tsx` ein
6. Die Anwendung sollte weiterhin funktionieren 🙏

# Material

- Fragmente (GraphQL Spec): https://graphql.org/learn/queries/#fragments
- Fragmente mit dem Apollo Client: https://www.apollographql.com/docs/react/data/fragments
