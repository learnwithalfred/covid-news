import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ReactLoading from 'react-loading';
import {
  selectAllCovidData,
  getCovidStatus,
  getCovidError,
  fetchCovidData,
  getPageTitle,
  getSearchResults,
} from './covidSlice';
import Categories from '../../components/Categories';
import Navbar from '../../components/navbar';

const CovidIndex = () => {
  const dispatch = useDispatch();
  const covidData = useSelector(selectAllCovidData);
  const loadingStatus = useSelector(getCovidStatus);
  const error = useSelector(getCovidError);
  const pageTitle = useSelector(getPageTitle);
  const searchResults = useSelector(getSearchResults);

  useEffect(() => {
    if (loadingStatus === 'idle') {
      dispatch(fetchCovidData());
    }
  }, [loadingStatus, dispatch]);

  let newsContent = '';
  if (loadingStatus === 'loading') {
    newsContent = (
      <div
        style={{
          margin: '2rem auto',
        }}
      >
        <ReactLoading type="spin" color="white" height={100} width={100} />
      </div>
    );
  } else if (loadingStatus === 'succeeded') {
    const dataToRender = searchResults.length > 0 ? searchResults : covidData;
    newsContent = dataToRender.map((data) => (
      <div key={data.item_id}>
        <Categories
          abbreviation={data.abbreviation ? data.abbreviation : 'GH'}
          country={data.item_id}
          confirmed={data.confirmed}
          deaths={data.deaths}
          covidData={covidData}
        />
      </div>
    ));
  } else if (loadingStatus === 'failed') {
    newsContent = <h2>{error}</h2>;
  }

  return (
    <div>
      <Navbar />
      <main className="container py-5">
        <h1>{pageTitle}</h1>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          {newsContent}
        </div>
      </main>
    </div>
  );
};

export default CovidIndex;
