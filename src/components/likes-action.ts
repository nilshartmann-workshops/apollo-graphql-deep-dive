"use server";

import { revalidatePath } from "next/cache";

import { mutateArticleLikes } from "@/queries/queries";

type LikesActionState = {
  likes: number;
};

export default async function saveLikeAction(
  state: LikesActionState,
  formData: FormData,
): Promise<LikesActionState> {
  console.log("saveLike mit state aufgerufen", state);

  // im "echten" Leben sollten die Form-Parameter natürlich validiert
  // werden, da sie vom Client und damit aus nicht vertrauenswürdiger Quelle
  // stammen
  const articleId = formData.get("articleId");
  if (!(typeof articleId === "string")) {
    console.error("Invalid article id", articleId);
    return state;
  }

  const newLikes = await mutateArticleLikes(articleId);

  if (newLikes === null) {
    // Fehler, Like konnte nicht gespeichert werden
    //  Original-Zustand zurückliefern
    //
    // Im echten Leben könnte man hier auch eine Fehlermeldung zurückliefern
    return state;
  }

  // Effekt sieht man nur in der gebauten Anwendung!
  //  (pnpm build && pnpm start)
  revalidatePath("/articles");
  // eigentlich nicht notwendig, da Einzeldarstellung dynamische Route ist
  revalidatePath(`/articles/${articleId}`);

  return { likes: newLikes };
}
