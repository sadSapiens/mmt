import { ICatalogState } from "./catalog/interfaces/data.interface";
import { IUIState } from "./ui/interfaces/data.interface";
import { IVariaState } from "./varia/interfaces/data.interface";

export interface Store {
  ui: IUIState;
  catalog: ICatalogState;
  blog: IVariaState;
  about: IVariaState;
  portfolio: IVariaState;
}
