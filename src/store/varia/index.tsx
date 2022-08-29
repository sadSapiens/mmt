import { Dispatch } from "@reduxjs/toolkit";
import API, { PUBLIC_API } from "../../constants/api";
import {
  fetchAboutSuccess,
  fetchBlogNewsSuccess,
  fetchHomeSuccess,
  fetchPortfolioSuccess,
} from "./actions";

export const fetchBlogInfo = () => async (dispatch: Dispatch) => {
  try {
    const res: any = await PUBLIC_API.get("/blog/news");
    dispatch(fetchBlogNewsSuccess(res.data));
  } catch (e) {
    console.log(e);
  }
};
export const fetchAbout = () => async (dispatch: Dispatch) => {
  try {
    const res: any = await PUBLIC_API.get("/about_us");
    dispatch(fetchAboutSuccess(res.data.data));
  } catch (e) {
    console.log(e);
  }
};
export const fetchPortfolio = () => async (dispatch: Dispatch) => {
  try {
    const res: any = await PUBLIC_API.get("/portfolio");
    dispatch(fetchPortfolioSuccess(res.data));
  } catch (e) {
    console.log(e);
  }
};
export const fetchHome = () => async (dispatch: Dispatch) => {
  try {
    const res: any = await PUBLIC_API.get("/home");
    dispatch(fetchHomeSuccess(res.data.data));
  } catch (e) {
    console.log(e);
  }
};