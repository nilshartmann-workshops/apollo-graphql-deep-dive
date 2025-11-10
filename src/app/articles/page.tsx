import ArticleListGrid from "@/components/articlelistpage/ArticleListGrid";
import gql from "graphql-tag";
import { graphlQuery } from "@/graphql-client";
import { ArticleListDocument } from "@/_generated-graphql-types";
import ArticleCard, { ARTICLE_CARD_FRAGMENT } from "@/components/ArticleCard";

const ARTICLE_LIST_QUERY = gql`
  ${ARTICLE_CARD_FRAGMENT}
  query ArticleList {
    articleList: articles(pageSize: 6) {
      totalPages

      articles: results {
        id
        body
        ...ArticleCardFragment
      }
    }
  }
`;

// React Server Components
export default async function ArticleListPage() {
  const result = await graphlQuery({
    query: ArticleListDocument,
  });

  if (result.error || !result.data) {
    throw new Error("Konnte Daten nicht laden.");
  }

  // result.data.articleList.articles[0].

  // ... ........ ...

  return (
    <div className={"ArticleListPage"}>
      <ArticleListGrid>
        {result.data.articleList.articles.map((a) => (
          <ArticleCard key={a.id} articleId={a.id} />
        ))}
      </ArticleListGrid>
    </div>
  );
}
