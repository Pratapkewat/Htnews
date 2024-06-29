import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';
import Spinner from '../Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';

const News = (props) => {
  const { url, setProgress, pageSize } = props;
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const updateNews = async () => {
    setProgress(10);
    setLoading(true);
    try {
      let data = await fetch(`${url}&page=${page}&pageSize=${pageSize}`);
      let parsedData = await data.json();
      setArticles(parsedData.articles || []);
      setTotalResults(parsedData.totalResults || 0);
    } catch (error) {
      console.error('Error fetching news:', error);
      setArticles([]);
      setTotalResults(0);
    }
    setLoading(false);
    setProgress(100);
  };

  useEffect(() => {
    document.title = `${capitalizeFirstLetter(props.category)} - NewsMonkey`;
    updateNews();
  }, []);

  const fetchMoreData = async () => {
    try {
      let data = await fetch(`${url}&page=${page + 1}&pageSize=${pageSize}`);
      let parsedData = await data.json();
      setArticles(articles.concat(parsedData.articles || []));
      setTotalResults(parsedData.totalResults || 0);
      setPage(page + 1);
    } catch (error) {
      console.error('Error fetching more news:', error);
    }
  };

  return (
    <>
      <h1 className="text-center" style={{ margin: '35px 0px', marginTop: '90px' }}>
        NewsMonkey - Top {capitalizeFirstLetter(props.category)} Headlines
      </h1>
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles.length || 0}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="row">
            {articles.map((element) => (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title ? element.title : ''}
                  description={element.description ? element.description : ''}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                  author={element.author}
                  date={element.publishedAt}
                  source={element.source.name}
                />
              </div>
            ))}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
};

News.defaultProps = {
  country: 'in',
  pageSize: 8,
  category: 'general',
};

News.propTypes = {
  url: PropTypes.string.isRequired,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
 