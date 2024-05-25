import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Article } from '../types';
import articles from "../data/articles.tsx";

interface ArticleState {
  currentArticle: Article | null;
}

const initialState: ArticleState = {
  currentArticle: null,
};

const articleSlice = createSlice({
  name: 'article',
  initialState,
  reducers: {
    setCurrentArticle(state, action: PayloadAction<number | null>) {
      if (action.payload !== null) {
        const foundArticle = articles.find(article => article.id === action.payload);
        state.currentArticle = foundArticle || null;
      } else {
        state.currentArticle = null;
      }
    },
  },
});

export const { setCurrentArticle } = articleSlice.actions;

export default articleSlice.reducer;
