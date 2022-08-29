import { createAction } from "@reduxjs/toolkit";

export const fetchCategorySuccess = createAction<[]>(
  "category/fetchCategorySuccess"
);
