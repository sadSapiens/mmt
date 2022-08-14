import { Dispatch } from "@reduxjs/toolkit";
import API from "../../constants/api";
import {
  fetchCatalogSuccess,
  fetchSelectedCatalogProductSuccess,
} from "./actions";

export const fetchCatalogProducts =
  (categoryId: string | null) => async (dispatch: Dispatch) => {
    try {
      if (categoryId) {
        const res: any = await API.get(`/products/category/${categoryId}`);
        console.log(res.data);

        dispatch(fetchCatalogSuccess(res.data.data));
        return;
      }
      console.log(1);

      const res: any = await API.get("/products/all");
      dispatch(fetchCatalogSuccess(res.data.data));
    } catch (e) {
      console.log(e);
    }
  };

export const fetchSlectedCatalogProduct =
  (id: string) => async (dispatch: Dispatch) => {
    try {
      const res: any = await API.get(`/products/${id}`);
      dispatch(fetchSelectedCatalogProductSuccess(res.data.data));
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  };
