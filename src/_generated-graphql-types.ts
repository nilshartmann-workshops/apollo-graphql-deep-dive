import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
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

export type G_ArticlePageVariables = Exact<{
  articleId: Scalars['ID']['input'];
}>;


export type G_ArticlePage = {
  article?: {
    __typename: 'Article',
    id: string,
    requestedAt: string,
    title: string,
    excerpt: string,
    date: string,
    category: G_Category,
    likes: number,
    body: string,
    image?: {
      __typename: 'Image',
      uri: string,
      altText: string
    },
    writer: {
      __typename: 'Writer',
      name: string
    }
  }
};

export type G_ArticleListVariables = Exact<{ [key: string]: never; }>;


export type G_ArticleList = {
  articleList: {
    __typename: 'ArticlesResult',
    totalPages: number,
    articles: Array<(
      {
      __typename: 'Article'
    }
      & G_ArticleCardFragment
    )>
  }
};

export type G_ArticleImageFragment = {
  __typename: 'Image',
  uri: string,
  altText: string
};

export type G_ArticleCardFragment = {
  __typename: 'Article',
  id: string,
  title: string,
  excerpt: string,
  date: string,
  category: G_Category,
  likes: number,
  image?: (
    {
    __typename: 'Image'
  }
    & G_ArticleImageFragment
  )
};

export type G_CommentListVariables = Exact<{
  articleId: Scalars['ID']['input'];
}>;


export type G_CommentList = {
  comments: Array<{
    __typename: 'Comment',
    requestedAt: string,
    id: string,
    text: string,
    writer: string
  }>
};

export type G_RelatedArticlesVariables = Exact<{
  articleId: Scalars['ID']['input'];
}>;


export type G_RelatedArticles = {
  relatedArticles: Array<{
    __typename: 'Article',
    title: string,
    id: string,
    likes: number,
    image?: {
      __typename: 'Image',
      uri: string,
      altText: string
    }
  }>
};

export type G_AddLikeVariables = Exact<{
  articleId: Scalars['ID']['input'];
}>;


export type G_AddLike = {
  addLike: {
    __typename: 'AddLikeError',
    msg: string
  } | {
    __typename: 'AddLikeSuccess',
    article: {
      __typename: 'Article',
      id: string,
      likes: number
    }
  }
};

export const ArticleImageFragment = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ArticleImageFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Image"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uri"}},{"kind":"Field","name":{"kind":"Name","value":"altText"}}]}}]} as unknown as DocumentNode<G_ArticleImageFragment, unknown>;
export const ArticleCardFragment = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ArticleCardFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Article"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"excerpt"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"maxLength"},"value":{"kind":"IntValue","value":"150"}}]},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"likes"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ArticleImageFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ArticleImageFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Image"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uri"}},{"kind":"Field","name":{"kind":"Name","value":"altText"}}]}}]} as unknown as DocumentNode<G_ArticleCardFragment, unknown>;
export const ArticlePageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ArticlePage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"articleId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"article"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"articleId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"articleId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"requestedAt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"excerpt"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"maxLength"},"value":{"kind":"IntValue","value":"120"}}]},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"likes"}},{"kind":"Field","name":{"kind":"Name","value":"body"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uri"}},{"kind":"Field","name":{"kind":"Name","value":"altText"}}]}},{"kind":"Field","name":{"kind":"Name","value":"writer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<G_ArticlePage, G_ArticlePageVariables>;
export const ArticleListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ArticleList"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"articleList"},"name":{"kind":"Name","value":"articles"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pageSize"},"value":{"kind":"IntValue","value":"6"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalPages"}},{"kind":"Field","alias":{"kind":"Name","value":"articles"},"name":{"kind":"Name","value":"results"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ArticleCardFragment"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ArticleImageFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Image"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uri"}},{"kind":"Field","name":{"kind":"Name","value":"altText"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ArticleCardFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Article"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"excerpt"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"maxLength"},"value":{"kind":"IntValue","value":"150"}}]},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"likes"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ArticleImageFragment"}}]}}]}}]} as unknown as DocumentNode<G_ArticleList, G_ArticleListVariables>;
export const CommentListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"CommentList"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"articleId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"comments"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"articleId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"articleId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"requestedAt"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"writer"}}]}}]}}]} as unknown as DocumentNode<G_CommentList, G_CommentListVariables>;
export const RelatedArticlesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"RelatedArticles"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"articleId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"relatedArticles"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"articleId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"articleId"}}},{"kind":"Argument","name":{"kind":"Name","value":"includeSelf"},"value":{"kind":"BooleanValue","value":true}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"likes"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uri"}},{"kind":"Field","name":{"kind":"Name","value":"altText"}}]}}]}}]}}]} as unknown as DocumentNode<G_RelatedArticles, G_RelatedArticlesVariables>;
export const AddLikeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddLike"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"articleId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addLike"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"articleId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"articleId"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AddLikeSuccess"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"article"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"likes"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AddLikeError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"msg"}}]}}]}}]}}]} as unknown as DocumentNode<G_AddLike, G_AddLikeVariables>;