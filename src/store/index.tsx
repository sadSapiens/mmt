import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import ui from "./ui/reducer";
import blog from "./varia/reducer";
import about from "./varia/reducer";
import catalog from "./catalog/reducer";

const store = configureStore({
  reducer: {
    ui,
    blog,
    about,
    catalog,
  },
});

export const useAppDispatch = () => useDispatch();

export default store;
