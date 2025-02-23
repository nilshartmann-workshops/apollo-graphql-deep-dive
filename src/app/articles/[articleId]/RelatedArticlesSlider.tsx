"use client";
import { use, useState } from "react";

import RelatedArticleBox from "@/components/articlepage/RelatedArticleBox";
import { RelatedArticle } from "@/types";

type RelatedArticlesSliderProps = {
  relatedArticlesPromise: Promise<RelatedArticle[]>;
};

export default function RelatedArticlesSlider({
  relatedArticlesPromise,
}: RelatedArticlesSliderProps) {
  // await geht hier nicht, weil wir in einer client Komponenten sind
  // stattdessen "use" von React verwenden
  const articles = use(relatedArticlesPromise);

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
