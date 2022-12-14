import { Dispatch } from "@reduxjs/toolkit";
import API, { PUBLIC_API } from "../../constants/api";
import {
  // fetchCatalogSuccess,
  // fetchFiltersSuccess,
  fetchSelectedCatalogProductSuccess,
  fetchSimilarProductsSuccess,
} from "./actions";

// export const fetchCatalogProducts =
//   (categoryId: string | null, searchValue: string | null) =>
//   async (dispatch: Dispatch) => {
//     try {
//       if (categoryId) {
//         const res: any = await API.get(
//           `/products/category/${categoryId}?search=${searchValue}`
//         );
//         console.log(res.data);

//         dispatch(fetchCatalogSuccess(res.data.data));
//         return;
//       }
//       console.log(searchValue);

//       const res: any = await API.get(`/products/all?search=${searchValue}`);
//       console.log(res);

//       dispatch(fetchCatalogSuccess(res.data.data));
//     } catch (e) {
//       console.log(e);
//     }
//   };

export const fetchSlectedCatalogProduct =
  (id: string) => async (dispatch: Dispatch) => {
    try {
      const res: any = await PUBLIC_API.get(`/products/${id}`);
      dispatch(fetchSelectedCatalogProductSuccess(res.data.data));
      dispatch(fetchSimilarProductsSuccess(res.data.similar_products));
    } catch (e) {
      console.log(e);
    }
  };
