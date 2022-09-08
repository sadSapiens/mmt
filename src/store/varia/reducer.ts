import { createReducer } from "@reduxjs/toolkit";
import { fetchSelectedBlog } from ".";
import {
  fetchAboutSuccess,
  fetchBlogNewsSuccess,
  fetchHomeSuccess,
  fetchPortfolioSuccess,
  fetchSelectedBlogSuccess,
} from "./actions";
import { IVariaState } from "./interfaces/data.interface";

export const initialState: IVariaState = {
  blog: null,
  about: null,
  portfolio: null,
  home: null,
  selectedBlog: null,
};

export default createReducer<IVariaState>(initialState, (builder) =>
  builder
    .addCase(
      fetchBlogNewsSuccess,
      (state, { payload }): IVariaState => ({
        ...state,
        blog: payload,
      })
    )
    .addCase(
      fetchSelectedBlogSuccess,
      (state, { payload }): IVariaState => ({
        ...state,
        selectedBlog: payload,
      })
    )
    .addCase(
      fetchAboutSuccess,
      (state, { payload }): IVariaState => ({
        ...state,
        about: payload,
      })
    )
    .addCase(
      fetchPortfolioSuccess,
      (state, { payload }): IVariaState => ({
        ...state,
        portfolio: payload,
      })
    )
    .addCase(
      fetchHomeSuccess,
      (state, { payload }): IVariaState => ({
        ...state,
        home: payload,
      })
    )
);
