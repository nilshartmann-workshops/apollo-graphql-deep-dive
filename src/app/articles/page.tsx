import ArticleCard from "@/components/ArticleCard";
import ArticleListGrid from "@/components/articlelistpage/ArticleListGrid";
import ArticleListNavBar from "@/components/articlelistpage/ArticleListNavBar";
import { fetchArticleList } from "@/queries/queries";

type ArticleListPageProps = {
  searchParams: Promise<Record<string, string>>;
};

export default async function ArticleListPage({
  searchParams,
}: ArticleListPageProps) {
  const { orderBy } = await searchParams;
  const articleList = await fetchArticleList({ orderBy });

  return (
    <div className={"container mx-auto"}>
      <ArticleListNavBar />
      <ArticleListGrid>
        {articleList.articles.map((a) => (
          <ArticleCard key={a.id} article={a} />
        ))}
      </ArticleListGrid>
    </div>
  );
}
