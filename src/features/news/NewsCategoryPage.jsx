import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ReactLoading from 'react-loading';
import { useParams, useNavigate } from 'react-router-dom';
import NewsContent from '../../components/News';
import {
  selectAllNews,
  getNewsStatus,
  getNewsError,
  fetchNews,
} from './NewsSlice';
import CategoriesData from '../../Utils/CategoriesData';

const NewsCategoryPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const news = useSelector(selectAllNews);
  const newsStatus = useSelector(getNewsStatus);
  const error = useSelector(getNewsError);

  let newsContent = '';
  if (newsStatus === 'loading') {
    newsContent = (
      <div
        style={{
          margin: '2rem auto',
        }}
      >
        <ReactLoading type="spin" color="blue" height={100} width={100} />
      </div>
    );
  } else if (newsStatus === 'succeeded') {
    newsContent = news.map((data) => (
      <div key={data.id}>
        <NewsContent
          id={data.id}
          author={data.author}
          time={data.time}
          date={data.date}
          content={data.content}
          title={data.title}
          url={data.url}
        />
      </div>
    ));
  } else if (newsStatus === 'failed') {
    newsContent = <h2>{error}</h2>;
  }

  const handleClick = (name) => {
    dispatch(fetchNews(name));
    navigate(`/news/${name}`);
  };

  const renderCategories = CategoriesData.map((data) => (
    <li
      style={{
        margin: '5px 0',
      }}
      key={data.name}
    >
      <button
        className="btn btn-link"
        type="button"
        style={{
          padding: '5px 0',
        }}
        onClick={() => handleClick(data.name)}
      >
        {data.name}
      </button>
    </li>
  ));

  const { category } = useParams();
  const pageHeader = `${category} News`;
  return (
    <div>
      <>
        <main className="container">
          <div className="p-4 p-md-5 mb-4 rounded text-bg-dark">
            <div className="col-md-6 px-0">
              <h1 className="display-4 fst-italic">{pageHeader}</h1>
              <p className="lead my-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
                nam amet ipsa consequuntur? Consequuntur, illum reprehenderit
                illo eius est neque?
              </p>
            </div>
          </div>
          <div className="row g-5">
            <div className="col-md-8">
              {newsContent}
              <nav className="blog-pagination" aria-label="Pagination">
                <a
                  href="/"
                  style={{
                    width: 150,
                  }}
                  className="btn btn-outline-primary rounded-pill d-flex justify-content-center"
                >
                  <img
                    style={{
                      color: 'white',
                      fontSize: '2rem',
                      margin: '0 5px',
                    }}
                    src="/assets/arrow-left.svg"
                    alt="go back"
                  />
                  Go back
                </a>
              </nav>
            </div>
            <div className="col-md-4">
              <div className="position-sticky" style={{ top: '2rem' }}>
                <div className="p-4 mb-3 bg-light rounded">
                  <h4 className="fst-italic">Read news on other topics</h4>
                  <ol className="list-unstyled mb-0">{renderCategories}</ol>
                </div>
              </div>
            </div>
          </div>
        </main>
      </>
    </div>
  );
};

export default NewsCategoryPage;
