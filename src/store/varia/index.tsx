import { Dispatch } from "@reduxjs/toolkit";
import API from "../../constants/api";
import {
  fetchAboutSuccess,
  fetchBlogNewsSuccess,
  fetchPortfolioSuccess,
} from "./actions";

export const fetchBlogInfo = () => async (dispatch: Dispatch) => {
  try {
    const res: any = await API.get("/blog/news");
    console.log(res);

    dispatch(fetchBlogNewsSuccess(res.data));
  } catch (e) {
    console.log(e);
  }
};
export const fetchAbout = () => async (dispatch: Dispatch) => {
  try {
    const res: any = await API.get("/about_us");
    console.log(res);

    dispatch(fetchAboutSuccess(res.data));
  } catch (e) {
    console.log(e);
  }
};
export const fetchPortfolio = () => async (dispatch: Dispatch) => {
  try {
    const res: any = await API.get("/portfolio");
    console.log(res);

    dispatch(fetchPortfolioSuccess(res.data));
  } catch (e) {
    console.log(e);
  }
};
