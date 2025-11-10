"use client";

import LikeIcon from "@/components/LikeIcon";
import { LikeIndicator } from "@/components/LoadingIndicator";
import { saveLikeAction } from "@/components/likes-function";
import { useOptimistic, useTransition } from "react";

type LikesWidgetProps = {
  articleId: string;
  currentLikes: number;
};

export function LikesWidget({ articleId, currentLikes }: LikesWidgetProps) {
  // const isPending = false; // <-- replace with pending status from transition
  const [isPending, startTransition] = useTransition();
  const [optimisticLikes, setOptimisticLikes] = useOptimistic(currentLikes);
  const handleSubmit = () => {
    startTransition(async () => {
      setOptimisticLikes(currentLikes + 1);
      const result = await saveLikeAction(articleId);
      console.log("RESULT from LikesWidget", result);
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
        {optimisticLikes}
        <span className={"ms-2"}>
          {isPending ? <LikeIndicator /> : <LikeIcon />}
        </span>
      </button>
    </form>
  );
}
