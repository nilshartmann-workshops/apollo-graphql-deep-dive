"use client";

import LikeIcon from "@/components/LikeIcon";
import { LikeIndicator } from "@/components/LoadingIndicator";
import { useTransition } from "react";
import saveLikeServerAction from "@/components/likes-action";

type LikesWidgetProps = {
  articleId: string;
  currentLikes: number;
};

export function LikesWidget({ articleId, currentLikes }: LikesWidgetProps) {
  // const isPending = false; // <-- replace with pending status from transition
  const [isPending, startTransition] = useTransition();

  const handleSubmit = () => {
    startTransition(async () => {
      await saveLikeServerAction(articleId);

      // 🕵️‍♂️ Das funktioniert hier auch ohne JS auf dem CLIENT!!!

      // ⚠️ hier müsste man jetzt noch den Client-Cache aktualisieren
    });

    // todo:
    //   - create new file 'likes-action.ts' and create your server action
    //      that runs the mutation
    //   - create transition (useTransition)
    //   - start transition here
    //   - inside the transition call your server action 'saveLikeServerAction'
  };

  return (
    <form className={"inline-block"} action={handleSubmit}>
      <input type={"hidden"} name="articleId" value={articleId} />
      <button
        type={"submit"}
        disabled={isPending}
        className={
          "flex space-x-2 rounded border border-slate-200 bg-slate-50 px-2 py-1 text-[15px] text-teal-700 hover:cursor-pointer hover:bg-teal-700 hover:text-white disabled:cursor-default disabled:border-teal-600 disabled:bg-teal-600 disabled:text-teal-50 disabled:hover:bg-teal-600"
        }
      >
        {currentLikes}
        <span className={"ms-2"}>
          {isPending ? <LikeIndicator /> : <LikeIcon />}
        </span>
      </button>
    </form>
  );
}
