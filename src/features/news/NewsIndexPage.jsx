import React from 'react';
import { useSelector } from 'react-redux';
import { selectAllNews, getNewsStatus, getNewsError } from './NewsSlice';
import DisplayNews from '../../components/DisplayNews';

const NewsIndexPage = () => {
  // const dispatch = useDispatch();
  const news = useSelector(selectAllNews);
  const newsStatus = useSelector(getNewsStatus);
  const error = useSelector(getNewsError);

  let bookContent = '';
  if (newsStatus === 'loading') {
    bookContent = <h2>Loading...</h2>;
  } else if (newsStatus === 'succeeded') {
    bookContent = news.map((data) => (
      <div key={data.id}>
        <DisplayNews data={data} />
      </div>
    ));
  } else if (newsStatus === 'failed') {
    bookContent = <p>{error}</p>;
  }
  return (
    <div>
      <h1>this is the news age</h1>
      all news goes here
      {bookContent}
    </div>
  );
};

export default NewsIndexPage;
