"use client";
import { useState } from "react";

import RelatedArticleBox from "@/components/articlepage/RelatedArticleBox";
import gql from "graphql-tag";
import { useSuspenseQuery } from "@apollo/client/react";
import { RelatedArticlesDocument } from "@/_generated-graphql-types";

type RelatedArticlesSliderProps = {
  articleId: string;
};

// todo: complete query and re-run code-generator
const RELATED_ARTICLES_QUERY = gql`
  query RelatedArticles($articleId: ID!) {
    relatedArticles(articleId: $articleId) {
      title
      id
      likes
      image {
        uri
        altText
      }
    }
  }
`;

export default function RelatedArticlesSlider({
  articleId,
}: RelatedArticlesSliderProps) {
  // ACHTUNG!
  //   - Dieses ist eine Client-Komponente
  //     (wo/wann werden Client-Komponenten gerendert?)
  // TODO:
  //   - Verwende einen suspenseQuery um die "related articles" zu laden
  //     - Dazu das Query-Dokument oben vervollständigen und
  //       dann die geladenen Artikel in die Variable 'articles'
  //       unten setzen
  //       (TypeScript-Typ entfernen, der korrekte TypeScript-Typ
  //        für 'articles' soll aus useSuspenseQuery abgeleitet werden)

  const { data } = useSuspenseQuery(RelatedArticlesDocument, {
    variables: { articleId },
  });

  const articles = data.relatedArticles;

  const [currentArticle, setCurrentArticle] = useState(0);

  const handleClick = (amount: number) => {
    let newIndex = currentArticle + amount;
    if (newIndex < 0) {
      newIndex = articles.length - 1;
    } else if (newIndex >= articles.length) {
      newIndex = 0;
    }
    setCurrentArticle(newIndex);
  };

  return (
    <RelatedArticleBox
      article={articles[currentArticle]}
      onNextClick={() => handleClick(+1)}
      onPrevClick={() => handleClick(-1)}
    />
  );
}
