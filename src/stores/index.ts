import { MobxStore } from "./mobxStore";
import { MyStore } from "./myStore";

export const stores = {
  mobxStore: new MobxStore(),
  myStore: new MyStore()
};
