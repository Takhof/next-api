import { comments } from "../../../data/comments";

export default function handler(req, res) {
  const { commentId } = req.query;
  const comment = comments.find(
    (comment) => comment.id === parseInt(commentId)
  );
  console.log(comments);
  res.status(200).json(comment);
}
