import { useSelector } from "react-redux";
import { Store } from "../types";
import { IHistoryOrder, IOrderProductsCart } from "./interfaces/data.interface";

export const useOrder = (): IOrderProductsCart | null => {
  return useSelector((state: Store) => state.order.orderCart);
};
export const useHistoryOrder = (): IHistoryOrder[] | null => {
  return useSelector((state: Store) => state.order.historyOrder);
};
