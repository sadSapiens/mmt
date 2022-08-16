import { createAction } from "@reduxjs/toolkit";
import { IProductState } from "./interfaces/data.interface";

export const fetchCatalogSuccess = createAction<[]>(
  "catalog/fetchCatalogSuccess"
);

export const fetchSelectedCatalogProductSuccess = createAction<IProductState>(
  "catalog/fetchSelectedCatalogProductSuccess"
);

export const setSearchValue = createAction<string>("catalog/setSearchValue");
