import axios from "axios";
import { useState } from "react";

function ComponentsPage() {
  const fetchComments = async () => {
    try {
      const res = await axios.get("/api/comments");
      setComments(res.data);
    } catch (err) {
      return { err };
    }
  };

  const [comments, setComments] = useState([]);

  return (
    <>
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

export default ComponentsPage;
