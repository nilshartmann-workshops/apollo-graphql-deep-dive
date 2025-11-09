/**
 * Can be used to artifically delay single GraphQL requests
 * to simulate slow response times from the backend
 *
 */
export const delayConfig: Record<string, number> = {
  // Article-List on `/articles`
  ArticleList: 0,

  // Single Article on `/articles/[articleId]`
  ArticlePage: 0,

  // Submitting the Newsletter form
  SubscribeNewsletter: 150,

  // Reading comments on `/articles/[articleId]`
  CommentList: 0,

  // Reading related articles on `/articles/[articleId]`,
  RelatedArticles: 10,

  // Delay the response in LikesWidget
  AddLike: 500,
};

// Setting this to 'force-cache' will enable Next.js
// DATA cache, so graphql requests are not run twice
export const graphQlFetchCache: "force-cache" | null = null;
