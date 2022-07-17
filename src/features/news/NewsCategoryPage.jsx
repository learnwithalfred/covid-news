import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import NewsContent from '../../components/News';
import { selectAllNews, getNewsStatus, getNewsError } from './NewsSlice';

const NewsCategoryPage = () => {
  const news = useSelector(selectAllNews);
  const newsStatus = useSelector(getNewsStatus);
  const error = useSelector(getNewsError);

  let newsContent = '';
  if (newsStatus === 'loading') {
    newsContent = <h2>Loading...</h2>;
  } else if (newsStatus === 'succeeded') {
    newsContent = news.map((data) => (
      <div key={data.id}>
        <NewsContent
          id={data.id}
          author={data.author}
          time={data.time}
          date={data.date}
          content={data.content}
          imgUrl={data.imageUrl}
        />
      </div>
    ));
  } else if (newsContent === 'failed') {
    newsContent = <p>{error}</p>;
  }

  const { category } = useParams();
  const pageHeader = `${category} News`;
  return (
    <div>
      NewsCategoryPage
      <h1>{pageHeader}</h1>
      {newsContent}
    </div>
  );
};

export default NewsCategoryPage;
