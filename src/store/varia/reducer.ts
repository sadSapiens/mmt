import { createReducer } from "@reduxjs/toolkit";
import {
  fetchAboutSuccess,
  fetchBlogNewsSuccess,
  fetchPortfolioSuccess,
} from "./actions";
import { IVariaState } from "./interfaces/data.interface";

export const initialState: IVariaState = {
  blog: [],
  about: [],
  portfolio: [],
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
);
