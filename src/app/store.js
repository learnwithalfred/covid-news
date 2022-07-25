import { configureStore } from '@reduxjs/toolkit';
import newsSlice from '../features/news/NewsSlice';
import covidReducer from '../features/covid/covidSlice';

const store = configureStore({
  reducer: {
    news: newsSlice,
    covid: covidReducer,
  },
});

export default store;
