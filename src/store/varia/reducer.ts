import { createReducer } from "@reduxjs/toolkit";
import { fetchAboutSuccess, fetchBlogNewsSuccess } from "./actions";
import { IVariaState } from "./interfaces/data.interface";

export const initialState: IVariaState = {
  blog: [],
  about: [],
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
);
