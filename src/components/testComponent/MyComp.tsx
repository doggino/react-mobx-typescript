import React, { Component } from "react";
import { observer, inject } from "mobx-react";

/* store */
import { MyStore } from "../../stores/myStore";

/* styles */
import styles from "./btn.module.scss";

interface IMyComp {
  myStore?: MyStore;
}

@inject("myStore")
@observer
export default class MyComp extends Component<IMyComp> {
  btnHandler = (e: React.MouseEvent<HTMLButtonElement>): void => {
    const { setCount,inputValue } = this.props.myStore!;
    setCount(+inputValue);
  };
  inputHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { setInputValue } = this.props.myStore!;
    if(!isNaN(+e.target.value)) setInputValue(e.target.value)
    else alert("PLEASE, ENTER ONLY NUMBERS!!!")
  };
  render() {
    const {
      count,
      getCount,
      setCount,
      inputValue,
      setInputValue
    } = this.props.myStore!;
    // return <div>Hello World {this.props.user}</div>;
    return (
      <div>
        <label htmlFor="test">
          На сколько увеличть счетчик?
          <input type="text" id="test" value={inputValue} onChange={this.inputHandler}/>
        </label>
        <button className={styles.btn} onClick={this.btnHandler} >Увеличить</button>
        <h1 className={styles.count}>Счетчик: {count}</h1>
      </div>
    );
  }
}
//className={styles.btn}
