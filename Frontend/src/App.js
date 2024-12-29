import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import NewsDetail from "./pages/NewsDetail";
import NewsList from "./components/NewsList"; // Assuming you have NewsList component


function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [newsData, setNewsData] = useState([]); // Initialize as an empty array
  const handleNewsClick = (newsId) => {
    console.log("News clicked:", newsId);
    // Add navigation logic if required
  };

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/news?search=${searchQuery}`);
        const data = await response.json();
        setNewsData(Array.isArray(data) ? data : []); // Ensure data is an array
      } catch (error) {
        console.error("Error fetching news:", error);
        setNewsData([]); // Set to empty array in case of an error
      }
    };
  
    fetchNews();
  }, [searchQuery]);
  

  useEffect(() => {
    // Disable swipe back/forward gestures
    const preventNavigation = (event) => {
      window.history.pushState(null, "", window.location.href);
    };

    // Push initial state and listen for popstate events
    window.history.pushState(null, "", window.location.href);
    window.addEventListener("popstate", preventNavigation);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("popstate", preventNavigation);
    };
  }, []);

  return (
    <Router>
      <Navbar 
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory} 
        searchQuery={searchQuery} 
        setSearchQuery={setSearchQuery} 
      />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/home"
          element={<Home selectedCategory={selectedCategory} searchQuery={searchQuery} onNewsClick={handleNewsClick}/>}
        />
        <Route path="/news/:id" element={<NewsDetail />} />
        <Route 
          path="/" 
          element={<NewsList 
            newsData={newsData} 
            selectedCategory={selectedCategory} 
            searchQuery={searchQuery} 
            setNewsData={setNewsData} 
          />} 
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
