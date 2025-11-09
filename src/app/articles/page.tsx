import { ArticleListDocument } from "@/_generated-graphql-types";
import ArticleCard, { ARTICLE_CARD_FRAGMENT } from "@/components/ArticleCard";
import ArticleListGrid from "@/components/articlelistpage/ArticleListGrid";
import { graphlQuery } from "@/graphql-client";
import gql from "graphql-tag";
import { Suspense } from "react";
import { GlobalLoadingIndicator } from "@/components/GlobalLoadingIndicator";

const ARTICLE_LIST_QUERY = gql`
  # Nur ein Beispiel
  # -> Generierten Code zeigen
  #    den Typ könnten wir in ArticleCard und ArticleCardImage verwenden
  #    🤔 was spricht dafür, was dagegen?
  #       - wollen wir die generierten Typen im Code haben
  #       - was ist mit __typename
  ${ARTICLE_CARD_FRAGMENT}

  query ArticleList {
    articleList: articles(pageSize: 6) {
      totalPages

      articles: results {
        ...ArticleCardFragment
      }
    }
  }
`;

export default async function ArticleListPage() {
  return (
    <Suspense fallback={<GlobalLoadingIndicator />}>
      <ArticleListPageContent />
    </Suspense>
  );
}

async function ArticleListPageContent() {
  // mit Cached Components ist JEDE Seite dynamisch
  // ansonsten wäre das eine statische Route hier
  // deswegen Cache einschalten!
  "use cache";
  console.log("Rendering ArticleListPageContent");
  const { data, error } = await graphlQuery({
    query: ArticleListDocument,
  });

  // data ist IMMER auch undefined :-(
  //  (egal, was wir mit TS machen)
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
