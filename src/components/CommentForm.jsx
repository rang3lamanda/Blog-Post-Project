import { useState } from "react";
import { useUsername } from './AuthContext'

const CommentForm = ({ addComment }) => {
  const [text, setText] = useState("");
  const username = useUsername();

  if (!username) {
    return <p>Please log in to add a comment.</p>;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !text) return;

    const newComment = {
      name: username,
      body: text
    };

    addComment(newComment);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>

      <label>Comment:</label>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default CommentForm;
