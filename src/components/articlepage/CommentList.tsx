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
  // todo:
  //  1. load comments for articleId
  //   - the document is already defined above
  //   - add gql tag around the document and re-run code generator
  //  2. assign the data to 'comments'
  //   - remove the typescript type
  //   - assign 'comments' from your query result
  //   - there should be no typescript errors
  const { data } = await graphlQuery({
    query: CommentListDocument,
    variables: { articleId },
  });

  if (!data?.comments) {
    return <div>no comments!</div>;
  }

  return (
    <>
      {data.comments.map((f) => {
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
