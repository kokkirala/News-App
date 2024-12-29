import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom'; // Consolidated imports
import './NewsDetail.css';

const NewsDetail = () => {
  const { id } = useParams(); // Get the id from the URL parameter
  const [newsItem, setNewsItem] = useState(null); // Properly initialized state

  useEffect(() => {
    // Fetch the detailed news item from the API (use the id parameter)
    const newsData = [
      {
        _id: 1,
        title: "Breaking News 1",
        description: "I have come here to pay tribute and respect to former PM Dr Manmohan Singh. We have always held him in high regard and respect for his leadership...",
        content: "Dr Manmohan Singh, former Prime Minister passed away at 9.51 PM on December 26, 2024 at AllMS Hospital, New Delhi. It has been decided by the Government that State funeral will be accorded to Dr Manmohan Singh. The funeral will take place at 11:45 AM on December 28, 2024 at Nigambodh Ghat, New Delhi. The Ministry of Defence is requested to make arrangements for State funeral will full military honours.",
        imageUrl: "https://static.toiimg.com/thumb/imgsize-1290888,msid-116689984,width-400,resizemode-4/116689984.jpg",
      },
      {
        _id: 2,
        title: "Breaking News 2",
        description: "Allu Arjun appeared before the court virtually in the Sandhya Theatre stampede case. His bail has been posted to December 30.",
        content: "Actor Allu Arjun, appeared virtually before a local court on Friday in a hearing about his bail in the Sandhya Theatre stampede case. The actor is an accused in the case booked over the death of a woman in a stampede in Hyderabad during the premiere of his latest film Pushpa 2: The Rule.",
        imageUrl: "https://img.republicworld.com/tr:w-236,h-132,q-75,f-auto/all_images/a-file-photo-of-allu-arjun-1734864402668-16_9.webp",
      },
      {
        _id: 3,
        title: "Breaking News 3",
        description: "A day after Parliament’s Monsoon Session drew to a close,amid fire and brimstone,",
        content: "and a no-confidence motion that went along expected lines – with Manipur perhaps none the wiser – both Prime Minister Narendra Modi and Congress leader Rahul Gandhi will be hitting the ground Saturday.Modi is scheduled to visit Sagar district in poll-bound Madhya Pradesh to lay the foundation stone for a Rs 100-crore temple dedicated to 14th-century mystic poet and social reformer Sant Ravidas, followed by a public meeting.",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGKmYnnJf7kOdZNNHOm4TmoGvkRcpbNYIj12oyb535n-9e9Oux6x2xY325V8PeMPVw8RQ&usqp=CAU",
      },
      {
        _id: 4,
        title: "Breaking News 4",
        description: "IND vs AUS 4th Test Day 3 Live Cricket Score,",
        content: "Full article content for News 4.",
        imageUrl: "https://images.indianexpress.com/2024/12/NKR-MCG.jpg?w=316",
      },

    ];

    // Simulate fetching news by ID
    const selectedNews = newsData.find((item) => item._id === parseInt(id));
    setNewsItem(selectedNews);
  }, [id]);

  if (!newsItem) {
    return (
      <p>
        No news article found. Go back to the <Link to="/home">Home</Link>.
      </p>
    );
  }

  return (
    <div className="news-detail">
      <h2>{newsItem.title}</h2>
      <img src={newsItem.imageUrl} alt={newsItem.title} />
      <p>{newsItem.description}</p>
      <p>{newsItem.content}</p>
      <Link to="/home">
        <button className="back-button">Back to News List</button>
      </Link>
    </div>
  );
};

export default NewsDetail;
