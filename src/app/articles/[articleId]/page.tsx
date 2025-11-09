import { graphlQuery } from "@/graphql-client";
import { ArticlePageDocument } from "@/_generated-graphql-types";
import { notFound } from "next/navigation";
import TwoColumnLayout from "@/components/layout/TwoColumnLayout";
import { ArticleBanner } from "@/components/articlepage/ArticleBanner";
import ArticleBody from "@/components/articlepage/ArticleBody";
import { SidebarBox } from "@/components/SidebarBox";
import CommentList from "@/components/articlepage/CommentList";

type Props = {
  params: Promise<{ articleId: string }>;
};

export default async function ArticlePage({ params }: Props) {
  const { articleId } = await params;

  console.log("ArticlePage", articleId);

  const { data } = await graphlQuery({
    query: ArticlePageDocument,
    variables: {
      articleId,
    },
  });

  if (!data?.article) {
    throw notFound();
  }

  return (
    <main>
      <ArticleBanner article={data.article} />
      <TwoColumnLayout
        sidebar={
          <>
            <SidebarBox title={"Comments"}>
              <CommentList articleId={articleId} />
            </SidebarBox>
          </>
        }
      >
        <ArticleBody body={data.article.body} />
      </TwoColumnLayout>
    </main>
  );
}
