import { combineReducers } from '@reduxjs/toolkit';
import articleReducer from '../features/ArticlesSlice';

const rootReducer = combineReducers({
  article: articleReducer, 
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;