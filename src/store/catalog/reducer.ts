import { createReducer } from "@reduxjs/toolkit";
import {
  fetchCatalogSuccess,
  fetchFiltersSuccess,
  fetchSelectedCatalogProductSuccess,
  fetchSimilarProductsSuccess,
  setSearchValue,
} from "./actions";
import { ICatalogState } from "./interfaces/data.interface";

export const initialState: ICatalogState = {
  catalogProducts: [],
  selectedProduct: null,
  searchValue: "",
  filters: null,
  similarProducts: [],
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
    .addCase(
      fetchSimilarProductsSuccess,
      (state, { payload }): ICatalogState => ({
        ...state,
        similarProducts: payload,
      })
    )
    .addCase(
      setSearchValue,
      (state, { payload }): ICatalogState => ({
        ...state,
        searchValue: payload,
      })
    )
    .addCase(
      fetchFiltersSuccess,
      (state, { payload }): ICatalogState => ({
        ...state,
        filters: payload,
      })
    )
);
