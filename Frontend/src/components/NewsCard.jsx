import React from "react";


const NewsCard = ({ news, onClick }) => {
  return (
    <div className="news-card" onClick={onClick}>
      <img src={news.imageUrl} alt={news.title} />
      <h2>{news.title}</h2>
      <p>{news.description}</p>
      <button className="read-more-btn">Read More</button>
    </div>
  );
};

export default NewsCard;
