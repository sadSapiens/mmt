export interface ICatalogState {
  catalogProducts: [];
  selectedProduct: IProductState | null;
}

export interface IProductState {
  article: string;
  attributes: [];
  color_groups: [];
  description: string;
  full_name: string;
  locations: [];
  package: [];
  total_stock: number;
}
