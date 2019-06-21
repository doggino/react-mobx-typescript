import React, { Component } from "react";
import { observable, action, computed } from "mobx";
import { observer, inject } from "mobx-react";

/* store */
import { OptionsPanelStore } from "../../stores/optionsPanelStore";

/* styles */
import styles from "./ContentItem.module.scss";

interface IProps {
  url: string;
  title: string;
  //   optionsPanelStore?: OptionsPanelStore;
}

@observer
export default class ContentItem extends Component<IProps> {
  render() {
    const { url, title } = this.props;
    return (
      <div className={styles["content-item"]}>
        <img className={styles.img} src={url} alt={title} />
        <p className={styles.title}>{title}</p>
      </div>
    );
  }
}
