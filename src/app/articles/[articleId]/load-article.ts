import { graphlQuery } from "@/graphql-client";
import { ArticlePageDocument } from "@/_generated-graphql-types";
import { notFound } from "next/navigation";
import { cacheTag } from "next/cache";

export async function loadArticle(articleId: string) {
  "use cache";
  cacheTag("article", articleId);

  console.log("loadArticle", articleId);

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
