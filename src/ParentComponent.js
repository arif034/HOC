import { Component } from "react";
import PrintName from "./PrintName";
class ParentComponent extends Component {
  render() {
    return (
      <div>
        <PrintName />
      </div>
    );
  }
}
export default ParentComponent;
