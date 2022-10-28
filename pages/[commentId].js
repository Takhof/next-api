import axios from "axios";
import { comments } from "../data/comments";

function singleComment(comment) {
  return (
    <div>
      {comment.comment.id}. {comment.comment.text}
    </div>
  );
}

export default singleComment;

export async function getStaticProps(context) {
  const { params } = context;
  const { commentId } = params;

  const comment = comments.find((comment) => {
    return comment.id === parseInt(commentId);
  });

  return {
    props: {
      comment: comment,
    },
  };
}

export async function getStaticPaths(context) {
  return {
    paths: [
      {
        params: { commentId: "1" },
      },
      {
        params: { commentId: "2" },
      },
      {
        params: { commentId: "3" },
      },
    ],
    fallback: false,
  };
}
