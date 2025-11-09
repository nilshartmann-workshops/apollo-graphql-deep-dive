import Link from "next/link";

import { ArrowButton } from "@/components/Button";
import { H3 } from "@/components/Heading";
import { LikesWidget } from "@/components/LikesWidget";

type RelatedArticleBoxProps = {
  onNextClick(): void;
  onPrevClick(): void;
  article: {
    title: string;
    id: string;
    likes: number;
    image?: { uri: string; altText: string };
  };
};

/**
 * Shows the image and title of an image and provides back and forward buttons.
 *
 */
export default function RelatedArticleBox({
  article,
  onNextClick,
  onPrevClick,
}: RelatedArticleBoxProps) {
  return (
    <div
      className={"border-teal rounded-lg"}
      style={{
        "--article-bg-image": `url('${article.image?.uri}')`,
      }}
    >
      <div className={"transform"}>
        <div className={"overflow-hidden"}>
          <img
            className="h-48 max-h-full w-full max-w-full transform rounded object-cover"
            src={article.image?.uri}
            alt={article.image?.altText}
          />

          <button
            className={"absolute left-2 top-2"}
            onClick={() => onPrevClick()}
          >
            <ArrowButton direction={"left"} />
          </button>
          <div className={"absolute left-1/2 top-2 -translate-x-1/2"}>
            <LikesWidget articleId={article.id} currentLikes={article.likes} />
          </div>
          <div className={"absolute bottom-2 w-full"}>
            <div
              className={
                "mx-2 flex justify-center rounded-lg bg-white/90 p-2 text-center"
              }
            >
              <Link
                href={`/articles/${article.id}`}
                prefetch={false}
                className={"hover:underline"}
              >
                <H3 className={"text-teal-700"}>{article.title}</H3>
              </Link>
            </div>
          </div>
          <button
            onClick={() => onNextClick()}
            className={"absolute right-2 top-2"}
          >
            <ArrowButton direction={"right"} />
          </button>
        </div>
      </div>
    </div>
  );
}
