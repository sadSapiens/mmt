import { createReducer } from "@reduxjs/toolkit";
import {
  fetchCatalogSuccess,
  fetchSelectedCatalogProductSuccess,
} from "./actions";
import { ICatalogState, IProductState } from "./interfaces/data.interface";

export const initialState: ICatalogState = {
  catalogProducts: [],
  selectedProduct: null,
};

export default createReducer<ICatalogState>(initialState, (builder) =>
  builder
    .addCase(
      fetchCatalogSuccess,
      (state, { payload }): ICatalogState => ({
        ...state,
        catalogProducts: payload,
      })
    )
    .addCase(
      fetchSelectedCatalogProductSuccess,
      (state, { payload }): ICatalogState => ({
        ...state,
        selectedProduct: payload,
      })
    )
);
