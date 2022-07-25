import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ReactCountryFlag from 'react-country-flag';
import PropTypes from 'prop-types';
import { fetchNews } from '../features/news/NewsSlice';
import './Category.css';

const Categories = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  Categories.propTypes = {
    abbreviation: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    confirmed: PropTypes.number.isRequired,
    deaths: PropTypes.number.isRequired,
  };

  const {
    abbreviation, country, confirmed, deaths,
  } = props;

  const handleClick = (name) => {
    dispatch(fetchNews(name));
    navigate(`/news/${name}`);
  };
  return (
    <div className="card bg-dark">
      <div className="countries-content">
        <div className="countries-item">
          <ReactCountryFlag
            countryCode={abbreviation}
            svg
            style={{
              width: '100%',
              height: '100%',
            }}
            title={abbreviation}
          />
        </div>
        <div className="countries-item">
          <button
            type="button"
            style={{
              fontSize: '1rem',
              border: 'none',
              background: 'transparent',
              color: 'white',
              margin: '0 auto',
            }}
            onClick={() => handleClick(country)}
          >
            {country}
          </button>
          <div className="card-body">
            <p className="text-white">
              Cases:
              <em>{confirmed}</em>
            </p>
            <p className="text-white">
              Deaths:
              <em>{deaths}</em>
            </p>
            <button
              type="button"
              style={{
                fontSize: '1rem',
                border: 'none',
                background: 'transparent',
                color: 'white',
                margin: '0 auto',
              }}
              onClick={() => handleClick(country)}
            >
              Read more..
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
