import React, { Component } from "react";
import { observer, inject } from "mobx-react";

/* store */
import { OptionsPanelStore } from "../../stores/optionsPanelStore";
/* styles */
import styles from "./OptionsPanel.module.scss";

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
    this.props.optionsPanelStore!.setLimit(+e.target.value > 0 ? +e.target.value : 1 );
  }
  private offSetInputHandle = (e: React.ChangeEvent<HTMLInputElement>): void => {
    this.props.optionsPanelStore!.setOffset(+e.target.value > 0 ? +e.target.value : 0 );
  }
  private ratingInputHandle = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    this.props.optionsPanelStore!.setRating(e.target.value);
  }
  private langInputHandle = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    this.props.optionsPanelStore!.setLang(e.target.value);
  }
  render() {
    const {
      type,
      limit,
      offset,
      rating,
      lang
    } = this.props.optionsPanelStore!;
    return (  
      <div className={styles.options}>
        <label>
          Type:  
          <select value={type} onChange={this.typeInputHandle}>
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
          <select value={rating} onChange={this.ratingInputHandle}>
            <option value="Y">Y</option>
            <option value="G">G</option>
            <option value="PG">PG</option>
            <option value="PG-13">PG-13</option>
            <option value="R">R</option>
          </select>
        </label>
        <label>
          Language:  
          <select  value={lang} onChange={this.langInputHandle}>
            <option value="en">en</option>
            <option value="ru">ru</option>
          </select>
        </label>
      </div>
    );
  }
}
