import { useSelector } from "react-redux";
import { Store } from "../types";
import { IFilters, IProductState } from "./interfaces/data.interface";

export const useCatalogProducts = (): [] => {
  return useSelector((state: Store) => state.catalog.catalogProducts);
};

export const useSelectedCatalogProduct = (): IProductState | null => {
  return useSelector((state: Store) => state.catalog.selectedProduct);
};

export const useSearchValue = (): string => {
  return useSelector((state: Store) => state.catalog.searchValue);
};

export const useFilters = (): null | IFilters => {
  return useSelector((state: Store) => state.catalog.filters);
};
