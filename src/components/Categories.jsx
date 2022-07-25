import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ReactCountryFlag from 'react-country-flag';
import PropTypes from 'prop-types';
import { fetchNews } from '../features/news/NewsSlice';

const Categories = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  Categories.propTypes = {
    abbreviation: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    confirmed: PropTypes.number.isRequired,
  };

  const { abbreviation, country, confirmed } = props;

  const handleClick = (name) => {
    dispatch(fetchNews(name));
    navigate(`/news/${name}`);
  };
  return (
    <div className="col">
      <div
        className="card shadow-sm"
        style={{
          // backgroundPosition: 'center center',
          // border: 'none',
          // color: 'white',
          height: 100,
          // backgroundImage:
          // `linear-gradient( to right, rgba(0, 0, 0, 0.1) 0%
          // , rgba(0, 0, 0, 0.62) 50%,  rgba(0, 0, 0, 0.84)100%), url("${imgUrl}")`,
        }}
      >
        <ReactCountryFlag
          countryCode={abbreviation}
          svg
          style={{
            width: '4rem',
            height: '4rem',
          }}
          title={abbreviation}
        />

        <button
          type="button"
          style={{
            fontSize: '2rem',
            border: 'none',
            background: 'transparent',
            color: 'black',
            margin: '0 auto',
          }}
          onClick={() => handleClick(country)}
        >
          {country}
        </button>
        <div className="card-body">
          <p className="text-center">{confirmed}</p>
        </div>
      </div>
    </div>
  );
};

export default Categories;
