import { observable, action } from "mobx";

interface IContentStore {
  count: number;
  content: Array<any>;
  firstReq: boolean;
  loading: boolean;
  searchContent(url: string): any;
  setContent(content: any): void;
  setFirstReq(status: boolean): void;
}

export class ContentStore implements IContentStore {
  @observable count = 0;
  @observable content = [] as any;
  @observable firstReq = true;
  @observable loading = false;

  @action public searchContent = async (url: string) => {
    this.setLoading(true);
    try {
      const res = await fetch(url);
      this.setLoading(false);
      const json = await res.json();
      return json;
    } catch (e) {
      console.error("Error! ", e);
    }
  };
  @action public setContent = (content: any): void => {
    if (Array.isArray(content)) this.content = content;
    else this.content = [content];
  };
  @action public setFirstReq = (status: boolean): void => {
    this.firstReq = status;
  };
  @action private setLoading = (status: boolean): void => {
    this.loading = status;
  };
}
