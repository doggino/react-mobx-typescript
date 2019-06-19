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
  limitInputHandle() {}
  render() {
    // console.log("content: ", this.props.contentStore!.content);
    const {
      limit,
      offset,
      rating,
      lang,
      setLimit,
      setOffset,
      setRating,
      setLang
    } = this.props.optionsPanelStore!;

    return (
      <div>
        <label>
          <input type="text" value={limit} />
        </label>
        <label>
          <input type="text" value={offset} />
        </label>
        <select name="" id="" value={rating}>
          <option value="Y">Y</option>
          <option value="G">G</option>
          <option value="PG">PG</option>
          <option value="PG-13">PG-13</option>
          <option value="R">R</option>
        </select>
        <select name="" id="" value={lang}>
          <option value="en">en</option>
          <option value="ru">ru</option>
        </select>
      </div>
    );
  }
}
