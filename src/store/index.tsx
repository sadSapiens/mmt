import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import ui from "./ui/reducer";
import blog from "./varia/reducer";
import about from "./varia/reducer";
import portfolio from "./varia/reducer";
import catalog from "./catalog/reducer";
import category from "./category/reducer";
import order from "./order/reducer";

const store = configureStore({
  reducer: {
    ui,
    blog,
    about,
    order,
    catalog,
    category,
    portfolio,
  },
});

export const useAppDispatch = () => useDispatch();

export default store;
