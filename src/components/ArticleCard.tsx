import Link from "next/link";

import { formatDate } from "@/components/format-date";
import { H1 } from "@/components/Heading";
import { LikesWidget } from "@/components/LikesWidget";
import {
  G_ArticleCardFragment,
  G_ArticleImageFragment,
} from "@/_generated-graphql-types";
import gql from "graphql-tag";

export const ARTICLE_CARD_FRAGMENT = gql`
  fragment ArticleImageFragment on Image {
    uri
    altText
  }

  fragment ArticleCardFragment on Article {
    id
    title
    excerpt(maxLength: 150)
    date
    category
    likes
    image {
      ...ArticleImageFragment
    }
  }
`;
type ArticleCardProps = {
  article: G_ArticleCardFragment;
};
export default function ArticleCard({ article }: ArticleCardProps) {
  return (
    <div
      className={
        "flex h-full flex-col space-y-4 rounded-lg border border-slate-200 bg-white drop-shadow-sm"
      }
    >
      {article.image && (
        <div className={"border-b-4 border-b-rose-700 hover:border-b-teal-800"}>
          <div className={"overflow-hidden"}>
            <Link prefetch={false} href={`/articles/${article.id}`}>
              <ArticleCardImage image={article.image} />
            </Link>
          </div>
        </div>
      )}
      <div
        className={"flex h-full flex-col justify-between space-y-4 px-4 pb-4"}
      >
        <div className={"flex flex-col space-y-4"}>
          <div className={"tracking-wide text-teal-700"}>
            {article.category}
          </div>
          <H1
            className={
              "font-opensans font-bold text-teal-700 hover:text-teal-800 hover:decoration-4"
            }
          >
            <Link
              className={"hover:underline"}
              prefetch={false}
              href={`/articles/${article.id}`}
            >
              {article.title}
            </Link>
          </H1>
          <div className={"text font-inter"}>
            <span className={"leading-3"}>{formatDate(article.date)} </span>
            {" | "}
            {article.excerpt}
          </div>
        </div>
        <div className={"flex flex-col"}>
          <div className={"flex items-center justify-between"}>
            <LikesWidget articleId={article.id} currentLikes={article.likes} />
          </div>
        </div>
      </div>
    </div>
  );
}

type ArticleCardImageProps = {
  image?: G_ArticleImageFragment;
};
function ArticleCardImage({ image }: ArticleCardImageProps) {
  if (!image) {
    return null;
  }
  return (
    <img
      className="h-32 max-h-full w-full max-w-full transform rounded-t-lg object-cover transition-all duration-500 ease-in-out hover:scale-110"
      src={image.uri}
      alt={image.altText}
    />
  );
}
