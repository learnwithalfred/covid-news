import React from 'react';
import PropTypes from 'prop-types';

const NewsContent = (props) => {
  const {
    id, author, time, date, content, imgUrl,
  } = props;
  console.log(props);

  NewsContent.propTypes = {
    id: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    imgUrl: PropTypes.string.isRequired,
  };

  const handleReadMore = (id) => {
    console.log(id, 'clicked');
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
