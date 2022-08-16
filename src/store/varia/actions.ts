import { createAction } from "@reduxjs/toolkit";
import { IAbout, IBlog, IBlogs, IPortfolio } from "./interfaces/data.interface";

export const fetchBlogNewsSuccess = createAction<IBlogs>(
  "blog/fetchBlogNewsSuccess"
);
export const fetchAboutSuccess = createAction<IAbout>(
  "about/fetchAboutSuccess"
);
export const fetchPortfolioSuccess = createAction<IPortfolio>(
  "portfolio/fetchPortfolioSuccess"
);
