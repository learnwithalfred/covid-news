import React from 'react';
import { useParams } from 'react-router-dom';

const NewsCategoryPage = () => {
  const { category } = useParams();
  const pageHeader = `${category} News`;
  return (
    <div>
      NewsCategoryPage
      <h1>{pageHeader}</h1>
    </div>
  );
};

export default NewsCategoryPage;
