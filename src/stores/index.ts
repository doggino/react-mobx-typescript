import { MobxStore } from "./mobxStore";
import { MyStore } from "./myStore";
import { ContentStore } from "./contentStore";
import { OptionsPanelStore } from "./optionsPanelStore";

export const stores = {
  mobxStore: new MobxStore(),
  myStore: new MyStore(),
  contentStore: new ContentStore(),
  optionsPanelStore: new OptionsPanelStore()
};
