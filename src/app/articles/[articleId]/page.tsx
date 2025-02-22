import { notFound } from "next/navigation";
import { Suspense } from "react";

import RelatedArticlesSlider from "@/app/articles/[articleId]/RelatedArticlesSlider";
import { ArticleBanner } from "@/components/articlepage/ArticleBanner";
import ArticleBody from "@/components/articlepage/ArticleBody";
import CommentList from "@/components/articlepage/CommentList";
import TwoColumnLayout from "@/components/layout/TwoColumnLayout";
import LoadingIndicator from "@/components/LoadingIndicator";
import { Sidebar } from "@/components/Sidebar";
import { SidebarBox } from "@/components/SidebarBox";
import { fetchArticle } from "@/queries/queries";

type Props = {
  params: Promise<{ articleId: string }>;
};

export default async function ArticlePage({ params }: Props) {
  const { articleId } = await params;

  const article = await fetchArticle(articleId);

  if (!article) {
    return notFound();
  }

  return (
    <main>
      <ArticleBanner article={article} />
      <TwoColumnLayout
        sidebar={
          <Sidebar>
            <SidebarBox title={"Related Articles"}>
              <RelatedArticlesSlider />
            </SidebarBox>
            <SidebarBox title={"Comments"}>
              <Suspense
                fallback={
                  <LoadingIndicator>Loading Comments...</LoadingIndicator>
                }
              >
                <CommentList articleId={article.id} />
              </Suspense>
            </SidebarBox>
          </Sidebar>
        }
      >
        <ArticleBody body={article.body} />
      </TwoColumnLayout>
    </main>
  );
}
