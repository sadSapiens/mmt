import { createReducer } from "@reduxjs/toolkit";
import { fetchOrderSuccess } from "./actions";
import { IOrderState } from "./interfaces/data.interface";

export const initialState: IOrderState = {
  orderCart: null,
};

export default createReducer<IOrderState>(initialState, (builder) =>
  builder.addCase(
    fetchOrderSuccess,
    (state, { payload }): IOrderState => ({ ...state, orderCart: payload })
  )
);
