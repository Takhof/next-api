import axios from "axios";
import { useState } from "react";

function CommentsPage() {
  const fetchComments = async () => {
    try {
      const res = await axios.get("/api/comments");
      setComments(res.data);
    } catch (err) {
      return { err };
    }
  };

  const postComment = async () => {
    const res = await axios.post("/api/comments", { comment: comment });
    const data = await res.data;
    console.log(data);
  };

  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");

  return (
    <>
      <input
        type="text"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button onClick={postComment}>Submit Comment</button>
      <button onClick={fetchComments}>Load comments</button>
      {comments.map((comment) => {
        return (
          <div key={comment.id}>
            {comment.id} {comment.text}
          </div>
        );
      })}
    </>
  );
}

export default CommentsPage;
