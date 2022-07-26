import { configureStore } from '@reduxjs/toolkit';
import covidReducer from '../features/covid/covidSlice';

const store = configureStore({
  reducer: {
    covid: covidReducer,
  },
});

export default store;
