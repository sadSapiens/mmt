import { useSelector } from "react-redux";
import { Store } from "../types";
import { IProductState } from "./interfaces/data.interface";

export const useCatalogProducts = (): [] => {
  return useSelector((state: Store) => state.catalog.catalogProducts);
};

export const useSelectedCatalogProduct = (): IProductState | null => {
  return useSelector((state: Store) => state.catalog.selectedProduct);
};
