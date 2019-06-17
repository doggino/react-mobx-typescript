import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import { MyStore } from "../../stores/myStore";
// import styles from "./MyComp.css";
import "./styles.css";
interface IMyComp {
  myStore?: MyStore;
}

@inject("myStore")
@observer
export default class MyComp extends Component<IMyComp> {
  btnHandler = (e: React.MouseEvent<HTMLButtonElement>): void => {
    const { setCount } = this.props.myStore!;
    setCount(5);
  };
  render() {
    const { count, getCount, setCount } = this.props.myStore!;
    // return <div>Hello World {this.props.user}</div>;
    return (
      <div>
        <label htmlFor="test">
          Счетчик
          <input type="text" id="test" />
        </label>
        <button className="btn" onClick={this.btnHandler} />
        <h1>{count}</h1>
      </div>
    );
  }
}
//className={styles.btn}
