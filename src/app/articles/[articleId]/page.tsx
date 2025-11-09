import { graphlQuery } from "@/graphql-client";
import { ArticlePageDocument } from "@/_generated-graphql-types";
import { notFound } from "next/navigation";
import TwoColumnLayout from "@/components/layout/TwoColumnLayout";
import { ArticleBanner } from "@/components/articlepage/ArticleBanner";
import ArticleBody from "@/components/articlepage/ArticleBody";
import { Suspense } from "react";
import { GlobalLoadingIndicator } from "@/components/GlobalLoadingIndicator";
import { SidebarBox } from "@/components/SidebarBox";
import CommentList from "@/components/articlepage/CommentList";

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

async function loadArticle(articleId: string) {
  "use cache";
  const { data } = await graphlQuery({
    query: ArticlePageDocument,
    variables: {
      articleId,
    },
  });

  if (!data?.article) {
    throw notFound();
  }

  return data.article;
}

async function ArticlePageContent({ params }: Props) {
  // jetzt sind auch die Kommentare gecached:
  // "use cache";
  const { articleId } = await params;

  console.log("Rendering ArticlePage", articleId);

  const article = await loadArticle(articleId);
  return (
    <main>
      <ArticleBanner article={article} />
      <TwoColumnLayout
        sidebar={
          <>
            <SidebarBox title={"Comments"}>
              <CommentList articleId={articleId} />
            </SidebarBox>
          </>
        }
      >
        <p>Requested: {article.requestedAt}</p>
        <ArticleBody body={article.body} />
      </TwoColumnLayout>
    </main>
  );
}
