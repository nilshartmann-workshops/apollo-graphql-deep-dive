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
import { cacheTag, revalidateTag } from "next/cache";
import RelatedArticlesSlider from "@/components/articlepage/RelatedArticlesSlider";

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
  cacheTag("article", articleId);

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
            <SidebarBox title={"Read more"}>
              <RelatedArticlesSlider articleId={articleId} />
            </SidebarBox>
            <SidebarBox title={"Comments"}>
              <CommentList articleId={articleId} />
            </SidebarBox>
          </>
        }
      >
        <p>Requested: {article.requestedAt}</p>
        <Update articleId={article.id} />
        <ArticleBody body={article.body} />
      </TwoColumnLayout>
    </main>
  );
}

function Update({ articleId }: { articleId: string }) {
  async function doUpdate() {
    "use server";
    console.log("update", articleId);
    revalidateTag(articleId, "max");
  }

  return (
    <form action={doUpdate}>
      <button>Update {articleId}</button>
    </form>
  );
}
