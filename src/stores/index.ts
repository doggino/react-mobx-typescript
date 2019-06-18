import { MobxStore } from "./mobxStore";
import { MyStore } from "./myStore";
import { SearchPanelStore } from "./searchPanelStore";

export const stores = {
  mobxStore: new MobxStore(),
  myStore: new MyStore(),
  searchPanelStore: new SearchPanelStore()
};
