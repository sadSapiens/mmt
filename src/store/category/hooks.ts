import { useSelector } from "react-redux";
import { Store } from "../types";

export const useCategoryProducts = (): [] => {
  return useSelector((state: Store) => state.category.categoryProducts);
};
