import ArticleListGrid from "@/components/articlelistpage/ArticleListGrid";
import gql from "graphql-tag";
import { graphlQuery } from "@/graphql-client";
import { ArticleListDocument } from "@/_generated-graphql-types";
import ArticleCard from "@/components/ArticleCard";

const ARTICLE_LIST_QUERY = gql`
  query ArticleList {
    articleList: articles(pageSize: 6) {
      totalPages

      articles: results {
        id
        title
        excerpt(maxLength: 150)
        date
        category
        likes
        image {
          uri
          altText
        }
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

  // ... ........ ...

  return (
    <div className={"ArticleListPage"}>
      <ArticleListGrid>
        {result.data.articleList.articles.map((a) => (
          <ArticleCard key={a.id} article={a} />
        ))}
      </ArticleListGrid>
    </div>
  );
}
