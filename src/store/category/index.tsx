import { Dispatch } from "@reduxjs/toolkit";
import API from "../../constants/api";
import { fetchCategorySuccess } from "./actions";

export const fetchCategories = () => async (dispatch: Dispatch) => {
  try {
    const res: any = await API.get("/products/catalog");
    dispatch(fetchCategorySuccess(res.data.data));
  } catch (e) {
    console.log(e);
  }
};
