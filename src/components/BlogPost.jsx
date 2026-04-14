import { Link } from "react-router-dom";

const BlogPost = ({ post }) => {
  if (!post) return null;

  const contentPreview =
    typeof post.body === "string"
      ? post.body.substring(0, 200)
      : "No content available";

  return (
    <div className="post">
      <h2>{post.title || "Untitled"}</h2>
      <p>{contentPreview}...</p>

      <Link to={`/posts/${post.id}`}>Read More</Link>

      <ul className="meta">
        <li><strong>Author ID:</strong> {post.userId}</li>
      </ul>
    </div>
  );
};

export default BlogPost;
