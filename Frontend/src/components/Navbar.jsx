import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NewsList from "./NewsList";

const Navbar = ({ searchQuery, setSearchQuery,onNewsClick}) => {
  const [newsData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredNews, setFilteredNews] = useState([]);
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  // Filter the news based on selected category and search query
  useEffect(() => {
    if (newsData.length > 0) {
      const filtered = newsData.filter(
        (news) =>
          (selectedCategory === "All" || news.category === selectedCategory) &&
          (news.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            news.description.toLowerCase().includes(searchQuery.toLowerCase()))
      );
      setFilteredNews(filtered);
    }
  }, [newsData, selectedCategory, searchQuery]);

  return (
    <div>
      <nav style={styles.navbar}>
        <div style={styles.leftSection}>
          <h1 style={styles.title}>News App</h1>
          <div style={styles.categorySelector}>
            <button onClick={() => handleCategoryChange("All")} style={styles.categoryButton}>All</button>
            <button onClick={() => handleCategoryChange("Political")} style={styles.categoryButton}>Political</button>
            <button onClick={() => handleCategoryChange("Cinema")} style={styles.categoryButton}>Cinema</button>
            <button onClick={() => handleCategoryChange("Sports")} style={styles.categoryButton}>Sports</button>
          </div>
        </div>

        <div style={styles.rightSection}>
          <input
            type="text"
            placeholder="Search news..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={styles.searchBar}
          />
          <ul style={styles.navLinks}>
            <li><Link to="/login" style={styles.link}>Login</Link></li>
            <li><Link to="/register" style={styles.link}>Register</Link></li>
          </ul>
        </div>
      </nav>

      <div className="Navbar">
      {filteredNews.length > 0 ? (
        filteredNews.map((newsItem) => (
          <div key={newsItem.id} className="news-item">
            <h2>{newsItem.title}</h2>
            <img src={newsItem.imageUrl} alt={newsItem.title} className="news-image" />
            <p>{newsItem.description}</p>
            <button onClick={() => onNewsClick(newsItem.id)}>Read More</button>
          </div>
        ))
      ) : (
        <NewsList newsData={Array.isArray(filteredNews) ? filteredNews : []} />
      )}
    </div>
    </div>
  );
};

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: "#333",
    color: "#fff",
    flexWrap: "wrap",
  },
  leftSection: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold",
  },
  categorySelector: {
    display: "flex",
    gap: "10px",
  },
  categoryButton: {
    padding: "5px 10px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  rightSection: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
  },
  searchBar: {
    padding: "5px 10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    fontSize: "16px",
  },
  navLinks: {
    listStyle: "none",
    display: "flex",
    gap: "15px",
    margin: 0,
    padding: 0,
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "16px",
  },
};

export default Navbar;
