import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectAllNews, showPostDetails } from '../features/news/NewsSlice';

const NewsContent = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const news = useSelector(selectAllNews);

  const {
    id, author, time, date, content,
    title,
    url,
  } = props;

  NewsContent.propTypes = {
    id: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  };

  const handleReadMore = (id) => {
    const response = news.filter((data) => data.id === id);
    dispatch(showPostDetails(response));
    navigate(`/news/${id}/details`);
  };

  return (
    <div className="">
      <article className="blog-post">
        <h2 className="blog-post-title mb-1">{title}</h2>
        <p className="blog-post-meta">
          {date}
          {' '}
          |
          {' '}
          {time}
          {' '}
          by
          {' '}
          <a href={url} target="_blank" rel="noopener noreferrer">{author}</a>
        </p>
        <p>{content}</p>
        <button
          type="button"
          className="btn btn-link"
          onClick={() => handleReadMore(id)}
        >
          Read more
        </button>
        <hr />
      </article>
    </div>
  );
};

export default NewsContent;
