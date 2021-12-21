import { Component } from "react";
import HOCComponent from "./HOCComponent";

class PrintName extends Component {
  render() {
    return <div>Hello {this.props.name}</div>;
  }
}

export default HOCComponent(PrintName);
