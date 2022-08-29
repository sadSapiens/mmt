import { createReducer } from "@reduxjs/toolkit";
import {
  fetchAboutSuccess,
  fetchBlogNewsSuccess,
  fetchHomeSuccess,
  fetchPortfolioSuccess,
} from "./actions";
import { IVariaState } from "./interfaces/data.interface";

export const initialState: IVariaState = {
  blog: null,
  about: null,
  portfolio: null,
  home: null,
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
