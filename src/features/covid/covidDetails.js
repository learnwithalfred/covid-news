import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ReactCountryFlag from 'react-country-flag';

import { getCovidDetails } from './covidSlice';
import Navbar from '../../components/navbar';

const CovidDetailsPage = () => {
  const covidData = useSelector(getCovidDetails);
  const navigate = useNavigate();

  const renderCovidDetails = covidData.map((data) => (
    <div key={data.item_id}>
      <main>
        <div className="container py-4">
          <div className="row featurette">
            <h1 className="featurette-heading fw-normal lh-1 mb-4">
              {data.item_id}
              {' '}
              Covid-19 Details
            </h1>
            <div className="col-md-6">
              <table className="table table-bordered text-white">
                <thead>
                  <tr>
                    <th scope="col">Country Name</th>
                    <th scope="col">{data.item_id}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Continent</th>
                    <td>{data.continent}</td>
                  </tr>
                  <tr>
                    <th scope="row">Location</th>
                    <td>{data.location}</td>
                  </tr>
                  <tr>
                    <th scope="row">Capital Town</th>
                    <td>{data.capital_city}</td>
                  </tr>
                  <tr>
                    <th scope="row">Population</th>
                    <td>{data.population}</td>
                  </tr>
                  <tr>
                    <th scope="row">Confirmed Cases</th>
                    <td>{data.confirmed}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="col-md-6">
              <ReactCountryFlag
                countryCode={data.abbreviation}
                svg
                style={{
                  width: '100%',
                  height: '100%',
                }}
                title={data.abbreviation}
              />
            </div>
          </div>
          <nav className="blog-pagination" aria-label="Pagination">
            <button
              className="btn btn-outline-info rounded-pill px-4"
              type="button"
              onClick={() => navigate(-1)}
              style={{
                width: 150,
                color: 'white',
              }}
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
            </button>
          </nav>
        </div>
      </main>
    </div>
  ));

  return (
    <div>
      <Navbar />
      {renderCovidDetails}
    </div>
  );
};
export default CovidDetailsPage;
