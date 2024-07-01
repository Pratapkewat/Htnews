import './App.css';
import NavBar from './components/NavBar';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';
import News from './components/News';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  const pageSize = 5;
  const apiKey = 'ba61c4780b624638855ba393c9582514';
  const [progress, setProgress] = useState(0);

  const getUrl = (category) => {
    switch (category) {
      case 'Suits':
        return 'https://newsapi.org/v2/everything?q=apple&from=2024-06-23&to=2024-06-23&sortBy=popularity&apiKey=ba61c4780b624638855ba393c9582514';
      case 'Girl Fashion':
        return 'https://newsapi.org/v2/everything?domains=wsj.com&apiKey=ba61c4780b624638855ba393c9582514';
      case 'Tops':
        return 'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=ba61c4780b624638855ba393c9582514';
      case 'Kids':
        return 'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=ba61c4780b624638855ba393c9582514';
      case 'Jawallery':
        return 'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=ba61c4780b624638855ba393c9582514';
      default:
        return `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${apiKey}`;
    }
  };

  return (
    <div>
      <Router>
        <NavBar />
        <LoadingBar height={0.2} color='#f11946' progress={progress} />
        <Routes>
          <Route path="/" element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} url={getUrl('general')} />} />
          <Route path="/business" element={<News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} url={getUrl('business')} />} />
          <Route path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} url={getUrl('entertainment')} />} />
          <Route path="/science" element={<News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} url={getUrl('science')} />} />
          <Route path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} url={getUrl('technology')} />} />
          <Route path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} url={getUrl('sports')} />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
 
