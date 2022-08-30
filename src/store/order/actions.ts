import { createAction } from "@reduxjs/toolkit";
import { IHistoryOrder, IOrderProductsCart } from "./interfaces/data.interface";

export const fetchOrderSuccess = createAction<IOrderProductsCart | null>(
  "category/fetchOrderSuccess"
);
export const fetchHistoryOrderSuccess = createAction<IHistoryOrder | null>(
  "category/fetchHistoryOrderSuccess"
);
