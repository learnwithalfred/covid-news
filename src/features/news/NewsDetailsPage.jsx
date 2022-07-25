import React from 'react';
import { useSelector } from 'react-redux';
import { getNewsDetails } from './NewsSlice';

const NewsDetailsPage = () => {
  const news = useSelector(getNewsDetails);

  const renderNewsDetail = news.map((data) => (
    <div key={data.id}>
      <main>
        <div className="container py-4">
          <div className="row featurette">
            <div className="col-md-6">
              <h2 className="featurette-heading fw-normal lh-1">
                {data.title}
              </h2>
              <span className="text-muted">
                {data.date}
                {' '}
                |
                {' '}
                {data.time}
                {' '}
                by
                {' '}
                <a href={data.url} target="_blank" rel="noopener noreferrer">{data.author}</a>
              </span>
              <p className="lead mt-4">{data.content}</p>
              <a className="mb-4 pb-4" target="blank" href={data.url}>Read more ...</a>
            </div>
            <div className="col-md-6">
              <img
                className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                width={500}
                height={500}
                src={data.imageUrl}
                alt={data.author}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  ));

  return (
    <div>
      {renderNewsDetail}
    </div>
  );
};
export default NewsDetailsPage;
