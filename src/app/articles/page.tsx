import ArticleListGrid from "@/components/articlelistpage/ArticleListGrid";
import gql from "graphql-tag";
import { graphlQuery } from "@/graphql-client";
import { ArticleListDocument } from "@/_generated-graphql-types";
import ArticleCard from "@/components/ArticleCard";
import { Suspense } from "react";
import { GlobalLoadingIndicator } from "@/components/GlobalLoadingIndicator";

const ARTICLE_LIST_QUERY = gql`
  query ArticleList {
    articleList: articles(pageSize: 6) {
      totalPages

      articles: results {
        ...ArticleCardFragment
      }
    }
  }
`;

// React Server Components
export default async function ArticleListPage() {
  return (
    <Suspense fallback={<GlobalLoadingIndicator />}>
      <ArticleListPageContent />
    </Suspense>
  );
}

async function ArticleListPageContent() {
  "use cache";
  console.log("Rendering ArticleListPageContent");
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
