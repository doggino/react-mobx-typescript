import { observable, action, computed } from "mobx";

export interface IMyStore {
  count: number;
  Count: number;
  setCount(count: number): void;
}

export class MyStore implements IMyStore {
  @observable count = 0;

  @computed
  public get Count(): number {
    return this.count;
  }

  @action.bound
  public setCount(count: number): void {
    this.count = this.count + count;
  }
}
