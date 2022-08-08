import { createReducer } from "@reduxjs/toolkit";
import { fetchCatalogSuccess } from "./actions";
import { ICatalogState } from "./interfaces/data.interface";

export const initialState: ICatalogState = {
  catalogProducts: [],
};

export default createReducer<ICatalogState>(initialState, (builder) =>
  builder.addCase(
    fetchCatalogSuccess,
    (state, { payload }): ICatalogState => ({
      ...state,
      catalogProducts: payload,
    })
  )
);
