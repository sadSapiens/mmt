import { Dispatch } from "@reduxjs/toolkit";

import API from "../../constants/api";
import { fetchOrderSuccess } from "./actions";

export const fetchOrder = () => async (dispatch: Dispatch) => {
  try {
    const res: any = await API.get("/orders/cart");
    dispatch(fetchOrderSuccess);
  } catch (e) {
    console.log(e);
  }
};
