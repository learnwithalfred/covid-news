/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'https://covid-api.mmediagroup.fr/v1/cases';

export const fetchCovidData = createAsyncThunk(
  'covid/fetchCovidData',
  async () => {
    const response = await axios.get(BASE_URL);
    const newData = [];
    Object.keys(response.data).forEach((key) => {
      if (key) {
        newData.push({
          ...response.data[key].All,
          item_id: key,
        });
      }
    });

    return newData;
  },
);

const initialState = {
  covid: [],
  status: 'idle',
  error: null,
  covidDetail: [],
  searchResults: [],
  pageTitle: '',
};

const covidSlice = createSlice({
  name: 'covid',
  initialState,
  // add any action that don't require api request
  reducers: {
    getCountryDetails: (state, action) => {
      state.covidDetail = action.payload;
    },
    searchData: (state, action) => {
      state.searchResults = action.payload;
      state.pageTitle = 'Search Results';
    },
  },
  // add any action the require API request
  extraReducers: (builder) => {
    builder
      .addCase(fetchCovidData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCovidData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.covid = action.payload;
        state.pageTitle = 'All covid data';
      })
      .addCase(fetchCovidData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const selectAllCovidData = (state) => state.covid.covid;
export const getCovidStatus = (state) => state.covid.status;
export const getCovidError = (state) => state.covid.error;
export const getCovidDetails = (state) => state.covid.covidDetail;
export const getSearchResults = (state) => state.covid.searchResults;
export const getPageTitle = (state) => state.covid.pageTitle;
export const { getCountryDetails, searchData } = covidSlice.actions;

export default covidSlice.reducer;
