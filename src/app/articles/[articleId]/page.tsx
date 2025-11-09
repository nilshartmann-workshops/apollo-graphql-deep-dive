type Props = {
  params: Promise<{ articleId: string }>;
};

export default async function ArticlePage({ params }: Props) {
  const { articleId } = await params;
  console.log("ArticlePage", articleId);

  return (
    <main>
      <p>Todo: Render Article {articleId}</p>
    </main>
  );
}
