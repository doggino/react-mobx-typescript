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
  @observable content = <any>[];

  @action public searchContent = async (url: string) => {
    try {
      const res = await fetch(url);
      const json = await res.json();
      console.log("json", json);
      return json;
    } catch (e) {
      console.error("Error! ", e);
    }
  };
  @action public setContent = (content: any) => {
    if (Array.isArray(content)) this.content = content;
    else this.content = [content];
  };
  // @computed public getContent = () => {}
}
