/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'https://inshorts.deta.dev/news?';
export const URL = `${BASE_URL}category=`;

export const fetchNews = createAsyncThunk(
  'news/fetchNews',
  async (category) => {
    const response = await axios.get(`${URL}${category}`);
    return response.data.data;
  },
);

const initialState = {
  news: [],
  status: 'idle',
  error: null,
  newsDetail: null,
};

const newsSlice = createSlice({
  name: 'news',
  initialState,
  // add any action that don't require api request
  reducers: {
    showPostDetails: (state, action) => {
      state.newsDetail = action.payload;
    },
  },
  // add any action the require API request
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.news = action.payload;
      })
      .addCase(fetchNews.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const selectAllNews = (state) => state.news.news;
export const getNewsStatus = (state) => state.news.status;
export const getNewsError = (state) => state.news.error;
export const getNewsDetails = (state) => state.news.newsDetail;
export const { showPostDetails } = newsSlice.actions;

export default newsSlice.reducer;
