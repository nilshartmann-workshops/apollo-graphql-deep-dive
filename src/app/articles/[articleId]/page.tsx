import { graphlQuery } from "@/graphql-client";
import { ArticlePageDocument } from "@/_generated-graphql-types";
import { notFound } from "next/navigation";
import { ArticleBanner } from "@/components/articlepage/ArticleBanner";
import TwoColumnLayout from "@/components/layout/TwoColumnLayout";
import ArticleBody from "@/components/articlepage/ArticleBody";

type Props = {
  params: Promise<{ articleId: string }>;
};

export default async function ArticlePage({ params }: Props) {
  const { articleId } = await params;
  console.log("ArticlePage", articleId);
  const result = await graphlQuery({
    query: ArticlePageDocument,
    variables: {
      articleId: articleId,
    },
  });

  if (result.error || !result.data || !result.data.article) {
    throw notFound();
  }

  return (
    <main>
      <ArticleBanner article={result.data.article} />
      <TwoColumnLayout>
        <ArticleBody body={result.data.article.body} />
      </TwoColumnLayout>
    </main>
  );
}
