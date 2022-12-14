import { Dispatch } from "@reduxjs/toolkit";

import API from "../../constants/api";
import { fetchHistoryOrderSuccess, fetchOrderSuccess } from "./actions";

export const fetchOrder = () => async (dispatch: Dispatch) => {
  try {
    const res: any = await API.get("/orders/cart");
    dispatch(fetchOrderSuccess(res.data.data));
  } catch (e) {
    console.log(e);
  }
};
export const fetcHistoryhOrder = () => async (dispatch: Dispatch) => {
  try {
    const res: any = await API.get("/orders/list");
    console.log(res);

    dispatch(fetchHistoryOrderSuccess(res.data.data));
  } catch (e) {
    console.log(e);
  }
};
