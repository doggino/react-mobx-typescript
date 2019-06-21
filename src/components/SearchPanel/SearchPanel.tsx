import React, { Component } from "react";
import { observable, action, computed } from "mobx";
import { observer, inject } from "mobx-react";

/* store */
import { ContentStore } from "../../stores/contentStore";
import { OptionsPanelStore } from "../../stores/optionsPanelStore";

/* styles */
import styles from "./SearchPanel.module.scss";
interface ISearchPanel {
  contentStore?: ContentStore;
  optionsPanelStore?: OptionsPanelStore;
}

@inject("optionsPanelStore")
@inject("contentStore")
@observer
export default class SearchPanel extends Component<ISearchPanel> {
  @observable private searchInputValue: string = "";
  @action private handleOnChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    this.searchInputValue = e.target.value;
  };
  private handleCustomSearch = (
    e: React.MouseEvent<HTMLButtonElement>
  ): void => {
    if (!!this.searchInputValue.trim().length) {
      const { searchContent, setContent } = this.props.contentStore!;
      const {
        type,
        limit,
        offset,
        rating,
        lang
      } = this.props.optionsPanelStore!;
      const api_key = "I9TvUsgeHs5ElAzdazaYJGVxc5W45mAe";
      const url = `https://api.giphy.com/v1/${type}/search?api_key=${api_key}&q=${
        this.searchInputValue
      }&limit=${limit}&offset=${offset}&rating=${rating}&lang=${lang}`;
      searchContent(url).then(data => setContent(data.data));
    }
  };
  private handleHotBtnSearch = (e: any): void => {
    const { limit, rating } = this.props.optionsPanelStore!;
    const { searchContent, setContent } = this.props.contentStore!;
    const type = e.target.getAttribute("data-type");
    const content = e.target.getAttribute("data-content");
    const url =
      `https://api.giphy.com/v1/${type}/${content}?api_key=I9TvUsgeHs5ElAzdazaYJGVxc5W45mAe` +
      (content === "trending" ? `&limit=${limit}` : "") +
      `&rating=${rating}`;
    console.log("URL", url);
    searchContent(url).then(data => setContent(data.data));
  };

  render() {
    return (
      <div>
        <div className={styles.gifs}>
          <p>GIFs</p>
          <button
            data-type="gifs"
            data-content="random"
            onClick={this.handleHotBtnSearch}
          >
            Random
          </button>
          <button
            data-type="gifs"
            data-content="trending"
            onClick={this.handleHotBtnSearch}
          >
            Trend
          </button>
        </div>
        <div className={styles.sticks}>
          <p>Sticks</p>
          <button
            data-type="stickers"
            data-content="random"
            onClick={this.handleHotBtnSearch}
          >
            Random
          </button>
          <button
            data-type="stickers"
            data-content="trending"
            onClick={this.handleHotBtnSearch}
          >
            Trend
          </button>
        </div>
        <div>
          <button onClick={this.handleCustomSearch}>Search!</button>
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
