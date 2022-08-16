import { createReducer } from "@reduxjs/toolkit";
import { fetchCategorySuccess } from "./actions";
import { ICategoryState } from "./interfaces/data.interface";

export const initialState: ICategoryState = {
  categoryProducts: [],
};

export default createReducer<ICategoryState>(initialState, (builder) =>
  builder.addCase(
    fetchCategorySuccess,
    (state, { payload }): ICategoryState => ({
      ...state,
      categoryProducts: payload,
    })
  )
);
