import React from 'react';
import { useSelector } from 'react-redux';
import { getNewsDetails } from './NewsSlice';

const NewsDetailsPage = () => {
  const news = useSelector(getNewsDetails);

  const renderNewsDetail = news.map((data) => (
    <div key={data.id}>
      <img src={data.imageUrl} alt={data.author} />
      <span>{data.time}</span>
      <span>{data.date}</span>
      <p>{data.content}</p>
    </div>
  ));

  return (
    <div>
      <h2> NewsDetailsPage</h2>
      {renderNewsDetail}
    </div>
  );
};
export default NewsDetailsPage;
