import { observable, action, computed } from "mobx";
/* export interface IContentItem {
  name: string;
  link: string;
  tags: Array<string>;
} */
export interface IContentStore {
  count: number;
  content: Array<any>;
  searchContent(url: string): any;
  setContent(content: any): void;
}
//currentContent ? prevContentHistory
export class ContentStore implements IContentStore {
  @observable count = 0;
  @observable content = [];

  @action public searchContent = async (url: string) => {
    const res = await fetch(url);
    const json = await res.json();
    console.log("json", json);
    return json;
  };
  @action public setContent = (content: any)=> {
    this.content = content;
  };
  // @computed public getContent = () => {}
}
