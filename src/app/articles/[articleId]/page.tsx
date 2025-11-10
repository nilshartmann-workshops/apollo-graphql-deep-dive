import { graphlQuery } from "@/graphql-client";
import { ArticlePageDocument } from "@/_generated-graphql-types";
import { notFound } from "next/navigation";
import { ArticleBanner } from "@/components/articlepage/ArticleBanner";
import TwoColumnLayout from "@/components/layout/TwoColumnLayout";
import ArticleBody from "@/components/articlepage/ArticleBody";
import { Suspense } from "react";
import { GlobalLoadingIndicator } from "@/components/GlobalLoadingIndicator";
import { cacheTag } from "next/cache";

type Props = {
  params: Promise<{ articleId: string }>;
};

export default async function ArticlePage({ params }: Props) {
  return (
    <Suspense fallback={<GlobalLoadingIndicator />}>
      <ArticlePageContent params={params} />
    </Suspense>
  );
}

async function loadData(articleId: string) {
  "use cache";
  // leben
  cacheTag("article-" + articleId);

  console.log("loading article data ", articleId);

  const result = await graphlQuery({
    query: ArticlePageDocument,
    variables: {
      articleId: articleId,
    },
  });

  return result;
}

async function ArticlePageContent({ params }: Props) {
  const { articleId } = await params;
  console.log("ArticlePage", articleId);
  const result = await loadData(articleId);

  if (result.error || !result.data || !result.data.article) {
    throw notFound();
  }

  return (
    <main>
      <ArticleBanner article={result.data.article} />
      <TwoColumnLayout>
        <ArticleBody body={result.data.article.body} />
        {/* Kommentar */}
      </TwoColumnLayout>
    </main>
  );
}
