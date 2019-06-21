import React, { Component } from "react";
import { observable, action, computed } from "mobx";
import { observer, inject } from "mobx-react";

/* store */
import { OptionsPanelStore } from "../../stores/optionsPanelStore";

/* styles */
import styles from "./OptionPanel.module.scss";

interface IOptionsPanelStore {
  optionsPanelStore?: OptionsPanelStore;
}

@inject("optionsPanelStore")
@observer
export default class OptionsPanel extends Component<IOptionsPanelStore> {
  private typeInputHandle = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    this.props.optionsPanelStore!.setType(e.target.value);
  }
  private limitInputHandle = (e: React.ChangeEvent<HTMLInputElement>): void => {
    this.props.optionsPanelStore!.setLimit(+e.target.value);
  }
  private offSetInputHandle = (e: React.ChangeEvent<HTMLInputElement>): void => {
    this.props.optionsPanelStore!.setOffset(+e.target.value);
  }
  private ratingInputHandle = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    this.props.optionsPanelStore!.setRating(e.target.value);
  }
  private langInputHandle = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    this.props.optionsPanelStore!.setLang(e.target.value);
  }
  // limitInputHandle(e: React.ChangeEvent<HTMLInputElement) {}
  render() {
    // console.log("content: ", this.props.contentStore!.content);
    const {
      type,
      limit,
      offset,
      rating,
      lang,
      setLimit,
      setOffset,
      setRating,
      setLang
    } = this.props.optionsPanelStore!;
    console.log("rat", this.props.optionsPanelStore!.rating )
    return (
      
      <div>
        <label>
          Type:
          <select name="" id="" value={type} onChange={this.typeInputHandle}>
            <option value="gifs">gifs</option>
            <option value="stickers">stickers</option>
          </select>
        </label>
        <label>
          Limit:
          <input type="number" value={limit} onChange={this.limitInputHandle}/>
        </label>
        <label>
          Offset:
          <input type="number" value={offset} onChange={this.offSetInputHandle}/>
        </label>
        <label>
          Rating:
          <select name="" id="" value={rating} onChange={this.ratingInputHandle}>
            <option value="Y">Y</option>
            <option value="G">G</option>
            <option value="PG">PG</option>
            <option value="PG-13">PG-13</option>
            <option value="R">R</option>
          </select>
        </label>
        <label>
          lang:
          <select name="" id="" value={lang} onChange={this.langInputHandle}>
            <option value="en">en</option>
            <option value="ru">ru</option>
          </select>
        </label>
      </div>
    );
  }
}
