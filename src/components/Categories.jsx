import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { fetchNews } from '../features/news/NewsSlice';

const Categories = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  Categories.propTypes = {
    name: PropTypes.string.isRequired,
    imgUrl: PropTypes.string.isRequired,
  };

  const { name, imgUrl } = props;

  const handleClick = (name) => {
    dispatch(fetchNews(name));
    navigate(`/news/${name}`);
  };
  return (
    <div
      style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        border: 'none',
        color: 'white',
        height: 400,
        backgroundImage: `linear-gradient( to right, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.62) 50%,  rgba(0, 0, 0, 0.84)100%), url("${imgUrl}")`,
      }}
    >
      <button
        type="button"
        style={{
          fontSize: '6rem',
          padding: '24px',
          border: 'none',
          background: 'transparent',
          color: 'white',
        }}
        onClick={() => handleClick(name)}
      >
        {name}
      </button>
    </div>
  );
};

export default Categories;
