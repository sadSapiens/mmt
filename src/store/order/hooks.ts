import { useSelector } from "react-redux";
import { Store } from "../types";

export const useOrder = (): [] => {
  return useSelector((state: Store) => state.order.orderCart);
};
