import { useAuth } from "./AuthContext";

const CommentList = ({ comments }) => {
  const { user } = useAuth();

  const isLoggedIn = !!user;


  if (!comments || comments.length === 0) {
    return <p>No comments yet. Be the first to comment!</p>;
  }
  
  

  return (
    <ul>
      {comments.map(comment => (
        <li key={comment.id}>
          <strong>{comment.name}:</strong> {comment.body}
        </li>
      ))}
    </ul>
  );
};

export default CommentList;
