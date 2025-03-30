import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchBlogs } from "../api/api";
import "./BlogPage.css";

const BlogDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    const fetchPost = async () => {
      const blogs = await fetchBlogs();
      const selectedPost = blogs.find((blog) => blog.id === parseInt(id));
      setPost(selectedPost);
      setLoading(false);
    };
    fetchPost();
  }, [id]);

  if (loading) return <div className="loading">Loading...</div>;
  if (!post) return <div className="loading">Blog not found.</div>;

  // Handle Like Button
  const handleLike = () => {
    setLikes(likes + 1);
  };

  // Handle Adding a Comment
  const handleAddComment = () => {
    if (newComment.trim() !== "") {
      setComments([...comments, newComment]);
      setNewComment("");
    }
  };

  return (
    <div className="blog-container">
      <h1 className="post-title">{post.title}</h1>
      <p className="post-body">{post.body}</p>

      {/* Like Button */}
      <button className="like-button" onClick={handleLike}>
        👍 Like ({likes})
      </button>

      {/* Comments Section */}
      <div className="comments-section">
        <h2>Comments</h2>
        <ul>
          {comments.map((comment, index) => (
            <li key={index} className="comment">{comment}</li>
          ))}
        </ul>
        <input
          type="text"
          className="comment-input"
          placeholder="Add a comment..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <button className="comment-button" onClick={handleAddComment}>
          Add Comment
        </button>
      </div>
    </div>
  );
};

export default BlogDetail;
