import React, { Component } from "react";
import { observer, inject } from "mobx-react";

/* components */
import ContentItem from "../ContentItem";
/* store */
import { ContentStore } from "../../stores/contentStore";
/* styles */
import styles from "./Content.module.scss";

interface IContent {
  contentStore?: ContentStore;
}

@inject("contentStore")
@observer
export default class Content extends Component<IContent> {
  render() {
    return (
      <div className={styles.content}>
        {this.props.contentStore!.loading && <div className="loader" />}
        {!this.props.contentStore!.firstReq &&
          !this.props.contentStore!.content.length && (
            <h3 className={styles.notFound}>Not found ¯＼_(ツ)_/¯</h3>
          )}
        {!!this.props.contentStore!.content.length && (
          <div className={styles.contentContainer}>
            {this.props.contentStore!.content.map(
              (item: any): any => (
                <ContentItem
                  key={item.id}
                  url={item.images.original.url}
                  title={item.title}
                />
              )
            )}
          </div>
        )}
      </div>
    );
  }
}
