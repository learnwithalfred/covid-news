import { configureStore } from '@reduxjs/toolkit';
import newsSlice from '../features/news/NewsSlice';

const store = configureStore({
  reducer: {
    news: newsSlice,
  },
});

export default store;
