import { createReducer } from "@reduxjs/toolkit";
import { IUIState } from "./interfaces/data.interface";

export const initialState: IUIState = {};
export default createReducer<IUIState>(initialState, (builder) => builder);
