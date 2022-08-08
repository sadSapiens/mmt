import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import ui from "./ui/reducer";
import catalog from "./catalog/reducer";

const store = configureStore({
  reducer: {
    ui,
    catalog,
  },
});

export const useAppDispatch = () => useDispatch();

export default store;
