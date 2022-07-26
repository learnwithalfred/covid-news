import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import FuzzySearch from 'fuzzy-search';
import { selectAllCovidData, searchData } from '../features/covid/covidSlice';

function Navbar() {
  const initialState = { search: '' };
  const [search, setSearch] = useState(initialState);
  const dispatch = useDispatch();
  const covidData = useSelector(selectAllCovidData);

  const handleSubmitSearch = (data) => {
    const searcher = new FuzzySearch(
      covidData,
      [
        'item_id',
        'deaths',
        'country',
        'continent',
        'capital_city',
        'confirmed',
        'abbreviation',
      ],
      {
        caseSensitive: false,
      },
    );
    const result = searcher.search(data);
    dispatch(searchData(result));
    setSearch(initialState);
  };

  const continents = [
    'Africa',
    'Asia',
    'Europe',
    'North America',
    'Oceania',
    'South America',
  ];

  const renderContinents = () =>
    // eslint-disable-next-line implicit-arrow-linebreak
    continents.map((continent) => (
      <li key={continent}>
        <button type="button" className="dropdown-item">
          <li>
            <button
              type="button"
              className="dropdown-item"
              onClick={() => handleSubmitSearch(continent)}
            >
              {continent}
            </button>
          </li>
        </button>
      </li>
    ));

  const handleInputChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setSearch({ ...search, [name]: value });
  };

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-dark"

    >
      <div className="container">
        <Link className="navbar-brand" to="/">
          Covid 19 Tracker
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Search Continent Data
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                {renderContinents()}
              </ul>
            </li>
          </ul>
          <div className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={search.search}
              onChange={handleInputChange}
              name="search"
            />
            <button
              className="btn btn-primary me-2"
              type="submit"
              onClick={() => handleSubmitSearch(search.search)}
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
