import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./BlogPage.css";

const BlogPage = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_URL = "https://jsonplaceholder.typicode.com/posts";

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        setPosts(data.slice(0, 10)); // Get only 10 posts
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="blog-container">
      <h1 className="blog-title">Blog Page</h1>
      {posts.map((post) => (
        <div key={post.id} className="blog-post">
          <h2 className="post-title">
            <Link to={`/blog/${post.id}`} className="post-link">
              {post.title}
            </Link>
          </h2>
          <p className="post-body">{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogPage;
