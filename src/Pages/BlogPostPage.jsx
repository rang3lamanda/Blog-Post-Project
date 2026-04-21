import { useEffect, useState } from "react";
import BlogList from "../components/BlogList.jsx";

const BlogPostPage = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch(() => setError("Failed to fetch posts"))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="page-wrapper">
        <p>Loading posts...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="page-wrapper">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="page-wrapper">
      {/* PAGE HEADER */}
      <div className="blogs-header">
        <h1 className="blog-title">Our Blogs</h1>
        <p className="blog-subtitle">Latest updates, stories, and space discoveries</p>
      </div>

      {/* BLOG LIST */}
      <BlogList posts={posts} />
    </div>
  );
};

export default BlogPostPage;