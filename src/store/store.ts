import { configureStore } from '@reduxjs/toolkit';
import ArticlesSlice from '../features/ArticlesSlice.ts';

const store = configureStore({
  reducer: {
    article: ArticlesSlice,
  },
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;