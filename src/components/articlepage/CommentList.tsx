import gql from "graphql-tag";
import { graphlQuery } from "@/graphql-client";
import { CommentListDocument } from "@/_generated-graphql-types";

type CommentListProps = {
  articleId: string;
};

const COMMENT_LIST_QUERY = gql`
  query CommentList($articleId: ID!) {
    comments(articleId: $articleId) {
      requestedAt
      id
      text
      writer
    }
  }
`;

export default async function CommentList({ articleId }: CommentListProps) {
  // 🕵️‍♂️ Apollo Client Cache im Browser angucken!
  const result = await graphlQuery({
    query: CommentListDocument,
    variables: { articleId },
  });

  if (!result?.data) {
    throw new Error("No comments");
  }

  const comments = result.data.comments;

  return (
    <>
      {comments.map((f) => {
        return (
          <div
            key={f.id}
            className={"mb-4 rounded-lg border border-slate-200 bg-white p-4"}
          >
            <span className={"font-inter text-teal-800"}>
              <div className={"flex items-end justify-between"}></div>
              <div className={"leading-7"}>
                <span className={"font-bold"}>{f.writer}</span> says:{" "}
                <span className={""}>{f.text}</span>
              </div>
              <div>Requested: {f.requestedAt}</div>
            </span>
          </div>
        );
      })}
    </>
  );
}
