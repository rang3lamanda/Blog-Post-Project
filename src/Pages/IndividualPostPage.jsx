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
  const [liked, setLiked] = useState(false);


  const types = [
    "MISSION_LOG",
    "DEEP_SPACE_REPORT",
    "SATELLITE_UPDATE",
    "PLANETARY_BRIEFING",
    "ANOMALY_ALERT",
  ];

  const typeLabels = {
    MISSION_LOG: "🚀 MISSION LOG",
    DEEP_SPACE_REPORT: "🌌 DEEP SPACE REPORT",
    SATELLITE_UPDATE: "🛰️ SATELLITE UPDATE",
    PLANETARY_BRIEFING: "🪐 PLANETARY BRIEFING",
    ANOMALY_ALERT: "🌠 ANOMALY ALERT",
  };


  const getType = (id) => types[(id - 1) % types.length];


  const trimTitle = (title) => {
    return title.split(" ").slice(0, 5).join(" ");
  };


  const formatBody = (body, type, id) => {
    const text = body.split(" ").slice(0, 20).join(" ");

    switch (type) {
      case "MISSION_LOG":
        return `🚀 MISSION ENTRY #${id}

${text}...

— Commander Log`;

      case "DEEP_SPACE_REPORT":
        return `📡 DEEP SPACE SCAN

${text}...

Signal analysis complete.`;

      case "SATELLITE_UPDATE":
        return `🛰️ ORBITAL STATUS UPDATE

${text}...

All systems monitored.`;

      case "PLANETARY_BRIEFING":
        return `🪐 PLANETARY REPORT

${text}...

Council review pending.`;

      case "ANOMALY_ALERT":
        return `⚠️ ANOMALY DETECTED

${text}...

Further investigation required.`;

      default:
        return `${text}...`;
    }
  };


  useEffect(() => {
    const fetchData = async () => {
      try {
        const postRes = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${id}`
        );
        const postData = await postRes.json();

        const userRes = await fetch(
          `https://jsonplaceholder.typicode.com/users/${postData.userId}`
        );
        const userData = await userRes.json();

        const commentsRes = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${id}/comments`
        );
        const commentsData = await commentsRes.json();

        const type = getType(postData.id);

        setPost({
          ...postData,
          type,
          title: `${typeLabels[type]} #${postData.id} : ${trimTitle(postData.title)}`,
          body: formatBody(postData.body, type, postData.id),
        });

        setUser(userData);
        setComments(commentsData); 
      } catch (err) {
        console.log("Failed to load post");
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

      setComments((prev) => [...prev, savedComment]);
    } catch (err) {
      alert("Failed to post comment.");
    }
  };

  if (loading) return <p>🛰️ Decoding transmission...</p>;
  if (!post) return <p>Signal lost.</p>;

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
          className={`like-btn ${liked ? "liked" : ""}`}
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