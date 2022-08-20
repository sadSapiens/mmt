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
  data: IBlog[];
  is_all: boolean;
  message: string;
  status: string;
}

export interface IBlog {
  author: number;
  content: string;
  created_at: string;
  title: string;
}
// export interface IFaq {
//   answer: {};
//   question: {};
// }

export interface IHomeData {
  brands: [];
  catalogs: [];
  faq: any[];
  portfolio: [];
  reviews: any[];
  types: any[];
}
export interface IVariaState {
  blog: IBlogs | null;
  about: IAbout | null;
  portfolio: IPortfolio | null;
  home: IHomeData | null;
}
