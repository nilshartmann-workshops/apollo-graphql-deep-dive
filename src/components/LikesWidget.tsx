"use client";

import { useTransition } from "react";

import LikeIcon from "@/components/LikeIcon";
import saveLikeServerAction from "@/components/likes-action";
import { LikeIndicator } from "@/components/LoadingIndicator";

type LikesWidgetProps = {
  articleId: string;
  currentLikes: number;
};

export function LikesWidget({ articleId, currentLikes }: LikesWidgetProps) {
  const [isPending, startTransition] = useTransition();

  const handleSubmit = () => {
    startTransition(async () => {
      await saveLikeServerAction(articleId);

      // hier müsste man jetzt noch den Client-Cache aktualisieren
    });
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
