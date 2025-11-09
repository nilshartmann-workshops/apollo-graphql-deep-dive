export type Maybe<T> = T;
export type InputMaybe<T> = T;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: string; output: string; }
};

export type G_AddCommentError = {
  __typename: 'AddCommentError';
  msg: Scalars['String']['output'];
};

export type G_AddCommentInput = {
  articleId: Scalars['ID']['input'];
  text: Scalars['String']['input'];
};

export type G_AddCommentPayload = G_AddCommentError | G_AddCommentSuccess;

export type G_AddCommentSuccess = {
  __typename: 'AddCommentSuccess';
  newComment: G_Comment;
};

export type G_AddLikeError = {
  __typename: 'AddLikeError';
  msg: Scalars['String']['output'];
};

export type G_AddLikeInput = {
  articleId: Scalars['ID']['input'];
};

export type G_AddLikePayload = G_AddLikeError | G_AddLikeSuccess;

export type G_AddLikeSuccess = {
  __typename: 'AddLikeSuccess';
  article: G_Article;
};

export type G_Article = G_Node & {
  __typename: 'Article';
  body: Scalars['String']['output'];
  category: G_Category;
  /**  Note: in a real GraphQL API comments would be pageable */
  comments: Array<G_Comment>;
  date: Scalars['DateTime']['output'];
  /** Returns an excerpt of this article, with a maximum length of `maxLength` characters. */
  excerpt: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  image?: Maybe<G_Image>;
  likes: Scalars['Int']['output'];
  /** Returns the next article (ordered by date) or null */
  nextArticle?: Maybe<G_Article>;
  /** Returns the previous article (ordered by date) or null */
  prevArticle?: Maybe<G_Article>;
  /**
   * Returns a list of related articles
   *
   * * Note: the backend just picks three (random) articles, that might not be
   *   related at all. In real life there would be a better algorithm or even
   *   a human selection of related articles.
   */
  relatedArticles: Array<G_Article>;
  requestedAt: Scalars['String']['output'];
  title: Scalars['String']['output'];
  /**
   * Returns the number of words of this article.
   *
   * Note: **for demo purposes to make values more realistic, the values returned do  _not match_ the real number of words!**
   */
  wordCount: Scalars['Int']['output'];
  writer: G_Writer;
};


export type G_ArticleExcerptArgs = {
  maxLength?: Scalars['Int']['input'];
};

/** Defines all fields that can be used to sort the list of articles */
export type G_ArticleOrderBy =
  | 'CATEGORY'
  | 'DATE'
  | 'LIKES';

export type G_ArticlesResult = {
  __typename: 'ArticlesResult';
  /** Number of the next page or empty if there is no next page */
  nextPage?: Maybe<Scalars['Int']['output']>;
  /**
   * The field that is used to sort the resulting articles from the request
   *
   * If the request doesn't specified an `orderBy`, it's set to the applied default value by the server.
   */
  orderBy: G_ArticleOrderBy;
  /**
   * Number of the requested page.
   *
   * If the request doesn't specified a page, it's set to the applied default value by the server.
   */
  page: Scalars['Int']['output'];
  /**
   * Size of the requested page (i.e. maximum number of `Article` objects returned)
   *
   * If the request doesn't specified a page, it's set to the applied default value by the server.
   */
  pageSize: Scalars['Int']['output'];
  /**
   * Number of the previous page or empty when the returned page is the first page, so that there
   * is no previous page
   */
  prevPage?: Maybe<Scalars['Int']['output']>;
  /** List of articles matching the query */
  results: Array<G_Article>;
  /** Number of pages with the given page size */
  totalPages: Scalars['Int']['output'];
};

/**
 * Provides informations about the backend process.
 *
 * - Note: this information would not be available in a real API. Here for testing only
 */
export type G_BackendInfo = {
  __typename: 'BackendInfo';
  commitDate: Scalars['String']['output'];
  commitId: Scalars['String']['output'];
  commitMsg?: Maybe<Scalars['String']['output']>;
};

export type G_Category =
  | 'ENVIRONMENT'
  | 'SCIENCE'
  | 'TECHNOLOGY';

export type G_Comment = G_Node & {
  __typename: 'Comment';
  article: G_Article;
  id: Scalars['ID']['output'];
  requestedAt: Scalars['String']['output'];
  text: Scalars['String']['output'];
  writer: Scalars['String']['output'];
};

export type G_Contact = G_EMailContact | G_PhoneContact;

export type G_EMailContact = {
  __typename: 'EMailContact';
  email: Scalars['String']['output'];
};

export type G_Image = {
  __typename: 'Image';
  altText: Scalars['String']['output'];
  uri: Scalars['String']['output'];
};

export type G_Mutation = {
  __typename: 'Mutation';
  addComment: G_AddCommentPayload;
  addLike: G_AddLikePayload;
};


export type G_MutationAddCommentArgs = {
  input: G_AddCommentInput;
};


export type G_MutationAddLikeArgs = {
  input: G_AddLikeInput;
};

export type G_Node = {
  id: Scalars['ID']['output'];
};

export type G_PhoneContact = {
  __typename: 'PhoneContact';
  phone: Scalars['String']['output'];
};

export type G_Query = {
  __typename: 'Query';
  /**
   * Returns the `Article` with the given `articleId`.
   *
   * - If no `articleId` is provided, the _latest_ article will be returned
   * - If a `articleId` is provided, but there is no article with that id, `null` is returned
   */
  article?: Maybe<G_Article>;
  /** Returns a list of articles */
  articles: G_ArticlesResult;
  /**
   * Returns the version (git commit) of the backend process
   *
   * - for testing, would not be part of a real application
   */
  backendInfo: G_BackendInfo;
  /**
   * Returns the comments for the specified `Article` or an empty list.
   *
   * - An empty list is also returned if there is no
   */
  comments: Array<G_Comment>;
  /** For testing the API, returns a simple string */
  hello: Scalars['String']['output'];
  node?: Maybe<G_Node>;
  /** Returns the _related articles_ for the specified article or an empty list */
  relatedArticles: Array<G_Article>;
  /** Returns a unique string for each request (for testing) */
  uuid: Scalars['String']['output'];
  /** Return all registered `Writers` */
  writers: Array<G_Writer>;
};


export type G_QueryArticleArgs = {
  articleId?: InputMaybe<Scalars['ID']['input']>;
};


export type G_QueryArticlesArgs = {
  orderBy?: InputMaybe<G_ArticleOrderBy>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
};


export type G_QueryCommentsArgs = {
  articleId: Scalars['ID']['input'];
};


export type G_QueryNodeArgs = {
  id: Scalars['ID']['input'];
};


export type G_QueryRelatedArticlesArgs = {
  articleId: Scalars['ID']['input'];
  includeSelf?: InputMaybe<Scalars['Boolean']['input']>;
};

export type G_Writer = G_Node & {
  __typename: 'Writer';
  contact?: Maybe<G_Contact>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};
