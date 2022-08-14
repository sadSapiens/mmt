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
export interface IVariaState {
  blog: [];
  about: IAbout | null;
  portfolio: IPortfolio | null;
}
