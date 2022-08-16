import { ICatalogState } from "./catalog/interfaces/data.interface";
import { ICategoryState } from "./category/interfaces/data.interface";
import { IOrderState } from "./order/interfaces/data.interface";
import { IUIState } from "./ui/interfaces/data.interface";
import { IVariaState } from "./varia/interfaces/data.interface";

export interface Store {
  ui: IUIState;
  catalog: ICatalogState;
  blog: IVariaState;
  about: IVariaState;
  portfolio: IVariaState;
  category: ICategoryState;
  order: IOrderState;
}
