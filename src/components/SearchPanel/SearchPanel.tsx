import React, { Component } from "react";
import { observer, inject } from "mobx-react";

/* store */
import { SearchPanelStore } from "../../stores/searchPanelStore";

/* styles */
import styles from "./styles.module.scss";

interface ISearchPanel {
  searchPanelStore?: SearchPanelStore;
}

@inject("searchPanelStore")
@observer
export default class SearchPanel extends Component<ISearchPanel> {
//   @observable searchInputValue = "";
  //   btnHandler = (e: React.MouseEvent<HTMLButtonElement>): void => {
  //     const { setCount, inputValue } = this.props.searchPanelStore!;
  //     setCount(+inputValue);
  //   };
  //   inputHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
  //     const { setInputValue } = this.props.searchPanelStore!;
  //     if (typeof +e.target.value) setInputValue(e.target.value);
  //     else alert("PLEASE ENTER ONLY NUMBERS!!!");
  //   };
  render() {
    // const {
    //   count,
    //   getCount,
    //   setCount,
    //   inputValue,
    //   setInputValue
    // } = this.props.myStore!;
    // return <div>Hello World {this.props.user}</div>;
    return (
      <div>
        <div className={styles.gifs}>
          <p>GIFs</p>
          <button>Random</button>
          <button>Trend</button>
        </div>
        <div className={styles.sticks}>
          <p>Sticks</p>
          <button name="random">Random</button>
          <button>Trend</button>
        </div>
        <div>
          <button>Search!</button>
          <input />
        </div>
      </div>
    );
  }
}
