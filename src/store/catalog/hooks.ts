import { useSelector } from "react-redux";
import { Store } from "../types";

export const useCatalogProducts = (): [] => {
  return useSelector((state: Store) => state.catalog.catalogProducts);
};
