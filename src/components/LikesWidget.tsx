import LikeIcon from "@/components/LikeIcon";

type LikesWidgetProps = {
  articleId: string;
  currentLikes: number;
};

export function LikesWidget({ currentLikes }: LikesWidgetProps) {
  return (
    <div className={"inline-block"}>
      <button
        type={"submit"}
        className={
          "flex space-x-2 rounded border border-slate-200 bg-slate-50 px-2 py-1 text-[15px] text-teal-700 hover:cursor-default hover:bg-teal-700 hover:text-white disabled:cursor-default disabled:border-teal-600 disabled:bg-teal-600 disabled:text-teal-50 disabled:hover:bg-teal-600"
        }
      >
        <span className={"ms-2"}>
          <LikeIcon />
          {currentLikes}
        </span>
      </button>
    </div>
  );
}
