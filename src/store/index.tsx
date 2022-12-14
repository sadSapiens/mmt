import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import ui from "./ui/reducer";
import blog from "./varia/reducer";
import about from "./varia/reducer";
import portfolio from "./varia/reducer";
import home from "./varia/reducer";
import catalog from "./catalog/reducer";
import category from "./category/reducer";
import similar from "./category/reducer";
import order from "./order/reducer";
import historyOrder from "./order/reducer";

const store = configureStore({
  reducer: {
    ui,
    blog,
    home,
    about,
    order,
    catalog,
    similar,
    category,
    portfolio,
    historyOrder,
  },
});

export const useAppDispatch = () => useDispatch();

export default store;
