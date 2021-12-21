import { Component } from "react";

const HOCComponent = (OriginalComponent) => {
  class NewComponent extends Component {
    constructor(props) {
      super(props);
      this.state = {
        name: "Arif"
      };
    }
    render() {
      return <OriginalComponent name={this.state.name} />;
    }
  }
  return NewComponent;
};
export default HOCComponent;
