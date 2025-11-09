import gql from "graphql-tag";
import { ArticleBanner } from "@/components/articlepage/ArticleBanner";
import ArticleBody from "@/components/articlepage/ArticleBody";
import TwoColumnLayout from "@/components/layout/TwoColumnLayout";
import { Suspense } from "react";
import { loadArticle } from "@/app/articles/[articleId]/load-article";
import { GlobalLoadingIndicator } from "@/components/GlobalLoadingIndicator";
import { revalidateTag } from "next/cache";
import LoadingIndicator from "@/components/LoadingIndicator";
import { SidebarBox } from "@/components/SidebarBox";
import CommentList from "@/components/articlepage/CommentList";
import RelatedArticlesSlider from "@/components/articlepage/RelatedArticlesSlider";

type Props = {
  params: Promise<{ articleId: string }>;
};

// Beispiel 2: gql als "inline query"
const ARTICLE_PAGE_QUERY = gql`
  query ArticlePage($articleId: ID!) {
    article(articleId: $articleId) {
      id
      requestedAt
      title
      excerpt(maxLength: 120)
      date
      category
      likes
      body
      image {
        uri
        altText
      }
      writer {
        name
      }
    }
  }
`;

export default async function ArticlePage({ params }: Props) {
  console.log("ArticlePage");
  return (
    <Suspense fallback={<GlobalLoadingIndicator />}>
      <AP params={params} />
    </Suspense>
  );
}

async function AP({ params }: Props) {
  const { articleId } = await params;
  console.log("ArticlePage", articleId);
  const article = await loadArticle(articleId);

  return (
    <main>
      <ArticleBanner article={article} />
      <p>{article.requestedAt}</p>
      <TwoColumnLayout
        sidebar={
          <>
            <SidebarBox title={"Read more"}>
              {/* evtl. spontanes Beispiel: dieses Ding kann man per Click ein- und ausschalten
              wir laden aber mit PReload die Daten schon vor */}
              <Suspense fallback={<LoadingIndicator />}>
                <RelatedArticlesSlider articleId={articleId} />
              </Suspense>
            </SidebarBox>
            <SidebarBox title={"Comments"}>
              <Suspense fallback={<LoadingIndicator />}>
                <CommentList articleId={articleId} />
              </Suspense>
            </SidebarBox>
          </>
        }
      >
        <ArticleBody body={article.body} />
      </TwoColumnLayout>
      <Update articleId={article.id} />
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
