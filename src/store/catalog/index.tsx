import { Dispatch } from "@reduxjs/toolkit";
import API from "../../constants/api";
import { fetchCatalogSuccess } from "./actions";

export const fetchCatalogProducts = () => async (dispatch: Dispatch) => {
  try {
    const res: any = await API.get("/products/all");
    console.log(res);

    dispatch(fetchCatalogSuccess(res.data));
  } catch (e) {
    console.log(e);
  }
};
