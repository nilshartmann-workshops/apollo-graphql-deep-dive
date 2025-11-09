"use client";
import { useState } from "react";

import RelatedArticleBox from "@/components/articlepage/RelatedArticleBox";
import gql from "graphql-tag";
import { useSuspenseQuery } from "@apollo/client/react";
import { RelatedArticlesDocument } from "@/_generated-graphql-types";

type RelatedArticlesSliderProps = {
  articleId: string;
};

const RELATED_ARTICLES_QUERY = gql`
  query RelatedArticles($articleId: ID!) {
    relatedArticles(articleId: $articleId, includeSelf: true) {
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
  const { data } = useSuspenseQuery(RelatedArticlesDocument, {
    variables: { articleId },
  });

  if (!data?.relatedArticles) {
    throw new Error("No related articles");
  }

  // await geht hier nicht, weil wir in einer client Komponenten sind
  // stattdessen "use" von React verwenden
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
