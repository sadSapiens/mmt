export interface IAbout {
  director: any;
  employers: any;
  main_info: any;
}
export interface IPortfolio {
  categories: any;
  data: any;
  message: string;
}

export interface IBlogs {
  count: number;
  data: IBlog[] | any;
  is_all: boolean;
  message: string;
  status: string;
}

export interface IBlog {
  picture: string | undefined;
  id: number;
  author: number;
  content: string;
  created_at: string;
  title: string;
  brief_about: string;
}

export interface IHomeData {
  brands: IBrands[];
  catalogs: IHomeCatalog[];
  faq: any[];
  portfolio: [];
  reviews: any[];
  types: any[];
  banners: any;
}

export interface IBrands {
  name: string;
  logotype: string;
}

export interface IHomeCatalog {
  icon: string | any;
  is_holidays: boolean;
  name: string;
  categories: IHomeCatalogCategories[];
}
export interface IHomeCatalogCategories {
  id: number;
  level: number;
  name: string;
  picture: string | any;
}

export interface IVariaState {
  blog: IBlogs | null;
  about: IAbout | null;
  portfolio: IPortfolio | null;
  home: IHomeData | null;
  selectedBlog: any;
}
