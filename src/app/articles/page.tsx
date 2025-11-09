import ArticleCard from "@/components/ArticleCard";
import ArticleListGrid from "@/components/articlelistpage/ArticleListGrid";
import { graphlQuery } from "@/graphql-client";
import { ArticleListDocument } from "@/_generated-graphql-types";
import { Suspense } from "react";

type ArticleListPageProps = {
  searchParams: Promise<Record<string, string>>;
};

// const ARTICLE_LIST_PAGE_QUERY = gql`
//   query ArticleList {
//     articleList: articles(pageSize: 6) {
//       totalPages
//
//       articles: results {
//         id
//         title
//         excerpt(maxLength: 150)
//         date
//         category
//         likes
//         image {
//           uri
//           altText
//         }
//       }
//     }
//   }
// `;

export default async function ArticleListPage() {
  return (
    <Suspense fallback={"LISTTTTTTTTTTTTTTTTTTTTTT"}>
      <ArticleList />
    </Suspense>
  );
}

async function ArticleList() {
  const { data, error } = await graphlQuery({
    query: ArticleListDocument,
  });

  // neu: data kann undefined sein!
  // Type Defintion der query-Funktion bzw. des Ergebnisses:
  //   -> ApolloClient.QueryResult
  //   -> node_modules/.pnpm/@apollo+client@4.0.9_graphql-ws@5.16.2_graphql@16.10.0__graphql@16.10.0_react-dom@19.2.0_reac_ncakxckhrl6fdzagmiq246kjzm/node_modules/@apollo/client/__cjs/core/ApolloClient.d.cts
  if (error || !data) {
    throw new Error(error?.message || "no data");
  }

  return (
    <div className={"ArticleListPage"}>
      <ArticleListGrid>
        {data.articleList.articles.map((a) => (
          <ArticleCard key={a.id} article={a} />
        ))}
      </ArticleListGrid>
    </div>
  );
}
