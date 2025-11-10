"use server";

import gql from "graphql-tag";
import { AddLikeDocument } from "@/_generated-graphql-types";
import { getApolloRscClient } from "@/graphql-client";
import { revalidatePath } from "next/cache";

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

//               v--- Achtung! Muss async sein!
export default async function saveLikeServerAction(articleId: string) {
  console.log("saveLike mit articleId aufgerufen", articleId);
  const result = await getApolloRscClient().mutate({
    mutation: AddLikeDocument,
    variables: { articleId },
  });

  // Union Type: Ergebnis prüfen
  if (result.data?.addLike?.__typename !== "AddLikeSuccess") {
    return;
  }

  const newLikes = result.data.addLike.article.likes;
  console.log("newLikes for article " + articleId, newLikes);

  revalidatePath("/articles");
  revalidatePath(`/articles/${articleId}`);

  // ...leider wird der Client-Cache hier nicht aktualisiert
  return result.data.addLike.article;
}
