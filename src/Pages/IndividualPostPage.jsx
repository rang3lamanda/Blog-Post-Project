import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import CommentList from "../components/CommentList";
import CommentForm from "../components/CommentForm";

const IndividualPostPage = () => {
  const { id } = useParams();

  const [post, setPost] = useState(null);
  const [user, setUser] = useState(null);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {

        const postRes = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${id}`
        );
        const postData = await postRes.json();
        setPost(postData);


        const userRes = await fetch(
          `https://jsonplaceholder.typicode.com/users/${postData.userId}`
        );
        const userData = await userRes.json();
        setUser(userData);


        const commentsRes = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${id}/comments`
        );
        const commentsData = await commentsRes.json();

      
        const postId = parseInt(id, 10);


        if (postId % 2 === 0) {
          setComments(commentsData);
        } else {
          setComments([]);
        }

      } catch (err) {
        setError("Failed to load post.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);


  const addComment = async (newComment) => {
    try {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}/comments`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newComment),
        }
      );

      const savedComment = await res.json();

      setComments([...comments, savedComment]);
    } catch (err) {
      alert("Failed to post comment.");
    }
  };

  if (loading) return <p>Loading post...</p>;
  if (error) return <p>{error}</p>;
  if (!post) return <p>Post not found.</p>;

  return (
    <div className="container">
      <div className="individual-post">
        <h1>{post.title}</h1>

        <p>{post.body}</p>

        <ul className="meta">
          <li><strong>Author:</strong> {user?.name}</li>
          <li><strong>Email:</strong> {user?.email}</li>
        </ul>

        <button
          onClick={() => setLiked(!liked)}
          className="like-btn"
        >
          {liked ? "❤️ Liked" : "🤍 Like"}
        </button>

        <section className="comments">
          <h3>Existing Comments</h3>
          <CommentList comments={comments} />

          <h3 style={{ marginTop: "15px" }}>Add a Comment</h3>
          <CommentForm addComment={addComment} />
        </section>
      </div>
    </div>
  );
};

export default IndividualPostPage;
