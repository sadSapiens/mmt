import { createAction } from "@reduxjs/toolkit";

export const fetchCatalogSuccess = createAction<[]>(
  "catalog/fetchCatalogSuccess"
);
