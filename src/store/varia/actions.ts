import { createAction } from "@reduxjs/toolkit";

export const fetchBlogNewsSuccess = createAction<[]>(
  "blog/fetchBlogNewsSuccess"
);
export const fetchAboutSuccess = createAction<[]>("about/fetchAboutSuccess");
export const fetchPortfolioSuccess = createAction<[]>(
  "portfolio/fetchPortfolioSuccess"
);
