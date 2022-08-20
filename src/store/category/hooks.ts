import { useSelector } from "react-redux";
import { Store } from "../types";
// import { ICaterory } from "./interfaces/data.interface";

export const useCategoryProducts = (): [] => {
  return useSelector((state: Store) => state.category.categoryProducts);
};
