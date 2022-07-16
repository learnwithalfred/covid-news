import React from 'react';
import PropTypes from 'prop-types';

const Categories = (props) => {
  Categories.propTypes = {
    name: PropTypes.string.isRequired,
    imgUrl: PropTypes.string.isRequired,
  };

  const { name, imgUrl } = props;
  const handleClick = (name) => {
    console.log(name);
  };
  return (
    <div
      style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        border: 'none',
        color: 'white',
        height: 400,
        backgroundImage: `linear-gradient( to right, rgba(0, 0, 0, 0.202) 0%, rgba(0, 0, 0, 0.62) 50%,  rgba(0, 0, 0, 0.84)100%), url("${imgUrl}")`,
      }}
    >
      <button
        type="button"
        style={{
          top: '50%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '4rem',
          padding: '24px',
        }}
        onClick={() => handleClick(name)}
      >
        {name}
      </button>
    </div>
  );
};

export default Categories;
