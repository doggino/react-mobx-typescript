import { observable, action, computed } from "mobx";

export interface IMyStore {
  count: number;
  inputValue: string;
  getCount: number;
  setInputValue(value: string): void;
  setCount(count: number): void;
}

export class MyStore implements IMyStore {
  @observable count = 0;
  @observable inputValue = "";

  @computed
  public get getCount(): number {
    return this.count;
  }
  @action.bound
  public setInputValue(value: string): void {
    this.inputValue = value;
  }
  @action.bound
  public setCount(count: number): void {
    this.count = this.count + count;
  }
}
