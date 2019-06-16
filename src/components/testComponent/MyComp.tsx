import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import { MyStore } from "../../stores/myStore";

interface IMyComp {
  myStore?: MyStore;
}

// @inject("myStore")
// @observer
// export class MyComp extends Component<IMyComp> {
//   const { greeting } = this.props.mobxStore!;
//   render() {
//     // return <div>Hello World {this.props.user}</div>;
//     return <div>
//      <label htmlFor="test">Счетчик<input type="text" id="test" /></label>
//      <h1></h1>
//     </div>
//   }
// }
