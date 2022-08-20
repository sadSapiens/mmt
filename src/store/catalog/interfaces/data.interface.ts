export interface ICatalogState {
  catalogProducts: [];
  selectedProduct: IProductState | null;
  searchValue: string;
  filters: IFilters | null;
}

export interface IFilters {
  colors: [];
  costom_types: [];
  materials: [];
  types: [];
}

export interface IProductColor {
  id: string;
  color: {
    hex_code: any;
    id: number;
    name: string;
  };
  images: [
    {
      big: string;
      small: string;
      superbig: string;
    }
  ];
}
export interface IProductState {
  article: string;
  attributes: [];
  color_groups: IProductColor[];
  description: string;
  full_name: string;
  locations: [];
  package: [];
  total_stock: number;
  // price_descending: boolean;
}
