import ArticleCard from "@/components/ArticleCard";
import ArticleListGrid from "@/components/articlelistpage/ArticleListGrid";
import { fetchArticleList } from "@/queries/queries";

export default async function ArticleListPage() {
  const articleList = await fetchArticleList();

  return (
    <div className={"container mx-auto"}>
      <ArticleListGrid>
        {articleList.articles.map((a) => (
          <ArticleCard key={a.id} article={a} />
        ))}
      </ArticleListGrid>
    </div>
  );
}
