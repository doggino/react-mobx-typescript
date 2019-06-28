import React, { Component } from "react";
import { observer} from "mobx-react";

/* components */
import SearchPanel from "./components/SearchPanel";
import OptionsPanel from "./components/OptionsPanel";
import Content from "./components/Content";

/* styles */
import styles from "./App.module.scss";


@observer
export default class App extends Component {
  render() {
    return (
      <div>
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>Welcome to the GIPHY!</h1>
        </div>
        <OptionsPanel />
        <SearchPanel />
        <Content />
      </div>
    );
  }
}
