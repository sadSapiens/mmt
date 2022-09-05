export interface ICatalogState {
  catalogProducts: [];
  similarProducts: ISimilarProduct[] | [];
  selectedProduct: IProductState | null;
  searchValue: string;
  filters: IFilters | null;
}

export interface ISimilarProduct {
  id: number;
  name: string;
  price: number;
  total_stock: number;
  article: string;
  discount: number;
  discount_price: number;
  colors: [
    {
      color: [];
      images: [];
    }
  ];
}

export interface IFilters {
  colors: [];
  costom_types: [];
  materials: [];
  types: [];
  total_count: any;
}

export interface IProductColor {
  id: string;
  discount: number;
  discount_price: number;
  price: number;
  rating: string;
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
  sizes: [
    {
      id: number;
      quantity: number;
      size: any;
    }
  ];
}

export interface IProductLocations {
  id: number;
  name: string;
  costom_types: [
    {
      id: number;
      colors: [];
      height: number;
      width: number;
    }
  ];
}

export interface IProductPackage {
  package_quantity: string;
  package_type: string;
  volume: any;
  weight: any;
}
export interface IProductAttributes {
  name: string;
  value: any;
}

export interface IProductState {
  id: string;
  article: string;
  attributes: IProductAttributes[];
  color_groups: IProductColor[];
  description: string;
  full_name: string;
  locations: IProductLocations[];
  package: IProductPackage;
  total_stock: number;
  // price_descending: boolean;
}
