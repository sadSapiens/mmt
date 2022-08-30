import { createReducer } from "@reduxjs/toolkit";
import { fetchHistoryOrderSuccess, fetchOrderSuccess } from "./actions";
import { IOrderState } from "./interfaces/data.interface";

export const initialState: IOrderState = {
  orderCart: null,
  historyOrder: null,
};

export default createReducer<IOrderState>(initialState, (builder) =>
  builder
    .addCase(
      fetchOrderSuccess,
      (state, { payload }): IOrderState => ({ ...state, orderCart: payload })
    )
    .addCase(
      fetchHistoryOrderSuccess,
      (state, { payload }): IOrderState => ({ ...state, historyOrder: payload })
    )
);
