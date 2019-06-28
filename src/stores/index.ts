import { ContentStore } from "./contentStore";
import { OptionsPanelStore } from "./optionsPanelStore";

export const stores = {
  contentStore: new ContentStore(),
  optionsPanelStore: new OptionsPanelStore()
};
