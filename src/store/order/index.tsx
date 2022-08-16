import React from "react";
import { Dispatch } from "@reduxjs/toolkit";

import API from "../../constants/api";
import { fetchOrderSuccess } from "./actions";

export const fetchOrder = () => async (dispatch: Dispatch) => {
  try {
    const res: any = await API.get("/orders/cart");
    console.log(res);
    dispatch(fetchOrderSuccess);
  } catch (e) {
    console.log(e);
  }
};
