import { createAction } from "@reduxjs/toolkit";
import { IOrderProductsCart } from "./interfaces/data.interface";

export const fetchOrderSuccess = createAction<IOrderProductsCart | null>(
  "category/fetchOrderSuccess"
);
