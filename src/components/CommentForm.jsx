import { useState } from "react";

const CommentForm = ({ addComment }) => {
  const [name, setName] = useState("");
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !text) return;

    const newComment = {
      name: name,
      body: text
    };

    addComment(newComment);

    setName("");
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Name:</label>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

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
