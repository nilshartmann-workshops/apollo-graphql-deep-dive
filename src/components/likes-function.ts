"use server";

import gql from "graphql-tag";
import { getApolloRscClient, graphlQuery } from "@/graphql-client";
import { AddLikeDocument } from "@/_generated-graphql-types";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

const ADD_LIKE_MUTATION = gql`
  mutation AddLike($articleId: ID!) {
    addLike(input: { articleId: $articleId }) {
      ... on AddLikeSuccess {
        article {
          id
          likes
        }
      }

      ... on AddLikeError {
        msg
      }
    }
  }
`;

export async function saveLikeAction(articleId: string) {
  console.log("Save Like", articleId);
  const result = await getApolloRscClient().mutate({
    mutation: AddLikeDocument,
    variables: { articleId },
  });

  if (result.data?.addLike?.__typename !== "AddLikeSuccess") {
    return;
  }

  revalidatePath(`/articles`);
  revalidatePath(`/articles/${articleId}`);

  return result.data.addLike.article.likes;
}
