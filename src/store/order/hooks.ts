import { useSelector } from "react-redux";
import { Store } from "../types";
import { IOrderProductsCart } from "./interfaces/data.interface";

export const useOrder = (): IOrderProductsCart | null => {
  return useSelector((state: Store) => state.order.orderCart);
};
