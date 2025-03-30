import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchBlogs, fetchCountries } from "../api/api";
import "./BlogPage.css";

const BlogList = () => {
  const [posts, setPosts] = useState([]);
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const blogs = await fetchBlogs();
      const countryData = await fetchCountries();
      setPosts(blogs);
      setCountries(countryData);
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) return <div className="loading">Loading...</div>;

  return (
    <div className="blog-container">
      <h1 className="blog-title">Blog Page</h1>

      <input
        type="text"
        placeholder="Search Blogs..."
        className="search-box"
        onChange={(e) => setSearch(e.target.value.toLowerCase())}
      />

      {posts
        .filter((post) => post.title.toLowerCase().includes(search))
        .map((post) => (
          <div key={post.id} className="blog-post">
            <h2 className="post-title">
              <Link to={`/blog/${post.id}`} className="post-link">
                {post.title}
              </Link>
            </h2>
            <p className="post-body">{post.body}</p>
          </div>
        ))}

      <h2 className="section-title">Country Info</h2>
      {countries.map((country) => (
        <div key={country.cca3} className="country-info">
          <h3>{country.name.common}</h3>
          <p>Population: {country.population}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
