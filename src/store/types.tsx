import { ICatalogState } from "./catalog/interfaces/data.interface";
import { IUIState } from "./ui/interfaces/data.interface";

export interface Store {
  ui: IUIState;
  catalog: ICatalogState;
}
