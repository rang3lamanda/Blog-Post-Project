import { useEffect, useState } from "react";
import BlogList from "../components/BlogList.jsx";

const BlogPostPage = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // 🔹 Types
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

  const getType = (index) => types[index % types.length];

  // 🔹 Trim real JSON title
  const trimTitle = (title) => {
    return title.split(" ").slice(0, 5).join(" ");
  };

  // 🔹 Format body based on type
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

  // 🔹 Fetch + transform data
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        const spacePosts = data.map((post, index) => {
          const type = getType(index);

          return {
            id: post.id,
            type,
            title: `${typeLabels[type]} #${post.id} : ${trimTitle(post.title)}`,
            body: formatBody(post.body, type, post.id),
          };
        });

        setPosts(spacePosts);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>🌌 Receiving transmissions...</p>;

  return <BlogList posts={posts} />;
};

export default BlogPostPage;