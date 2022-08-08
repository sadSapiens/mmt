import { useSelector } from "react-redux";
import { Store } from "../types";

export const useBlogNews = (): [] => {
  return useSelector((state: Store) => state.blog.blog);
};
export const useAbout = (): [] => {
  return useSelector((state: Store) => state.about.about);
};
export const usePortfolio = (): [] => {
  return useSelector((state: Store) => state.portfolio.portfolio);
};
