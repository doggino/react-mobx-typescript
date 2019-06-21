import React, { Component } from "react";

import "./App.css";
import TClass from "./components/testClass";
import MyComp from "./components/testComponent";
import SearchPanel from "./components/SearchPanel";
import OptionsPanel from "./components/OptionsPanel";
import ContentItem from "./components/ContentItem";
/* store */
import { ContentStore } from "./stores/contentStore";
import { OptionsPanelStore } from "./stores/optionsPanelStore";

import { observer, inject } from "mobx-react";
import { JSXElement } from "@babel/types";

interface IApp {
  contentStore?: ContentStore;
  optionsPanelStore?: OptionsPanelStore;
}
@inject("contentStore")
@observer
export default class App extends Component<IApp> {
  render() {
    console.log("asd", this.props.contentStore!.content);
    return (
      <div>
        <div>
          <TClass />>
        </div>
        <div>
          <MyComp />
        </div>
        <div>
          <OptionsPanel />
        </div>
        <div>
          <SearchPanel />
        </div>
        <div>
          {this.props.contentStore!.content.length &&
            this.props.contentStore!.content.map(
              (item: any): any => {
                console.log("item", item.url);

                return (
                  <ContentItem
                    url={item.images.original.url}
                    title={item.title}
                  />
                );
              }
            )}
        </div>
      </div>
    );
  }
}
