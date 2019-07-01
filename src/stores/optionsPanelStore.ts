import { observable, action } from "mobx";

export interface IOptionsPanelStore {
  type: string;
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
  @observable type = "gifs";
  @observable limit = 10;
  @observable offset = 0;
  @observable rating = "G";
  @observable lang = "eu";

  @action public setType = (type: string): void => {
    this.type = type;
  };
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
