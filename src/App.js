import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import ReactLoading from 'react-loading';
import {
  selectAllCovidData,
  getCovidStatus,
  // getCovidError,
  fetchCovidData,
} from './features/covid/covidSlice';
import Categories from './components/Categories';
import Navbar from './components/navbar';
// import CategoriesData from './Utils/CategoriesData';

const App = () => {
  const dispatch = useDispatch();
  const covidData = useSelector(selectAllCovidData);
  const loadingStatus = useSelector(getCovidStatus);
  // const error = useSelector(getCovidError);

  useEffect(() => {
    if (loadingStatus === 'idle') {
      dispatch(fetchCovidData());
    }
  }, [loadingStatus, dispatch]);
  // console.log(covidData);

  const renderCategories = covidData.map((data) => (
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

  return (
    <div>
      <Navbar />
      <main className="container py-5">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          {renderCategories}
        </div>
      </main>
    </div>
  );
};

export default App;
