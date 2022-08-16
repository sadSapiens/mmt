import { useSelector } from "react-redux";
import { Store } from "../types";
import { IAbout, IBlogs, IPortfolio } from "./interfaces/data.interface";

export const useBlogNews = (): IBlogs | null => {
  return useSelector((state: Store) => state.blog.blog);
};
export const useAbout = (): IAbout | null => {
  return useSelector((state: Store) => state.about.about);
};
export const usePortfolio = (): IPortfolio | null => {
  return useSelector((state: Store) => state.portfolio.portfolio);
};
