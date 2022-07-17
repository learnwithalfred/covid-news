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
    id, author, time, date, content, imgUrl,
  } = props;

  NewsContent.propTypes = {
    id: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    imgUrl: PropTypes.string.isRequired,
  };

  const handleReadMore = (id) => {
    const response = news.filter((data) => data.id === id);
    dispatch(showPostDetails(response));
    navigate(`/news/${id}/details`);
  };

  return (
    <div className="">
      <img src={imgUrl} alt={author} />
      <span>{time}</span>
      <span>{date}</span>
      <p>{content}</p>
      <button type="button" onClick={() => handleReadMore(id)}>
        Read more
      </button>
    </div>
  );
};

export default NewsContent;
