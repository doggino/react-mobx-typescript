import React, { Component } from "react";
import { observable, action, computed } from "mobx";
import { observer, inject } from "mobx-react";

/* store */
import { ContentStore } from "../../stores/contentStore";

/* styles */
import styles from "./SearchPanel.module.scss";

interface ISearchPanel {
  contentStore?: ContentStore;
}

@inject("contentStore")
@observer
export default class SearchPanel extends Component<ISearchPanel> {
  @observable private searchInputValue: string = "";
  @action private handleOnChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    this.searchInputValue = e.target.value;
  };
  private handleOnClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    const { searchContent, setContent } = this.props.contentStore!;
    const url =
      "https://api.giphy.com/v1/gifs/search?api_key=I9TvUsgeHs5ElAzdazaYJGVxc5W45mAe&q=dog&limit=3&offset=0&rating=G&lang=en";
    // setContent(searchContent(url));
    searchContent(url).then(data => setContent(data.data));
  };

  //   @observable searchInputValue = "";
  //   btnHandler = (e: React.MouseEvent<HTMLButtonElement>): void => {
  //     const { setCount, inputValue } = this.props.searchPanelStore!;
  //     setCount(+inputValue);
  //   };
  render() {
    // console.log("content: ", this.props.contentStore!.content);
    return (
      <div>
        <div className={styles.gifs}>
          <div>
            {/* {this.props.contentStore!.content.length !== 0
              ? this.props.contentStore!.content[0]
              : null} */}
          </div>
          <p>GIFs</p>
          <button
            data-content="gif"
            data-type="random"
            onClick={this.handleOnClick}
          >
            Random
          </button>
          <button
            data-content="gif"
            data-type="trend"
            onClick={this.handleOnClick}
          >
            Trend
          </button>
        </div>
        <div className={styles.sticks}>
          <p>Sticks</p>
          <button name="random">Random</button>
          <button>Trend</button>
        </div>
        <div>
          <button>Search!</button>
          <input
            type="text"
            id="search_input"
            value={this.searchInputValue}
            onChange={this.handleOnChange}
          />
        </div>
      </div>
    );
  }
}
