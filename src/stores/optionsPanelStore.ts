import { observable, action } from "mobx";

export interface IOptionsPanelStore {
  limit: number;
  offset: number;
  rating: string;
  lang: string;
  setLimit(limit: number): void;
  setOffset(offset: number): void;
  setRating(rating: string): void;
  setLang(lang: string): void;
}

export class OptionsPanelStore implements IOptionsPanelStore {
  @observable limit = 0;
  @observable offset = 0;
  @observable rating = "";
  @observable lang = "";

  @action public setLimit = (limit: number): void => {
    this.limit = limit;
  };
  @action public setOffset = (offset: number): void => {
    this.offset = offset;
  };
  @action public setRating = (rating: string): void => {
    this.rating = rating;
  };
  @action public setLang = (lang: string): void => {
    this.lang = lang;
  };
}
