import React from "react";
import { useNavigate } from "react-router-dom";

const NewsList = ({ newsData }) => {
  const navigate = useNavigate();

  const onNewsClick = (newsId) => {
    console.log("News clicked:", newsId);
    // Navigate to the detail page
    navigate(`/news/${newsId}`);
  };

  if (!Array.isArray(newsData)) {
    return <p>No news available</p>; // Handle non-array or empty data gracefully
  }

  return (
    <div className="news-list">
      {newsData.length > 0 ? (
        newsData.map((newsItem) => (
          <div key={newsItem.id} className="news-item">
            <h2>{newsItem.title}</h2>
            <img src={newsItem.imageUrl} alt={newsItem.title} className="news-image" />
            <p>{newsItem.description}</p>
            <button onClick={() => onNewsClick(newsItem.id)}>Read More</button>
          </div>
        ))
      ) : (
        <p></p>
      )}
    </div>
  );
};
  

export default NewsList;
