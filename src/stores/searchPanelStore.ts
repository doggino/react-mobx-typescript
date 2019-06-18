import { observable, action, computed } from "mobx";

export interface ISearchPanelStore {
  count: number;

}

export class SearchPanelStore implements ISearchPanelStore {
  @observable count = 0;
}
