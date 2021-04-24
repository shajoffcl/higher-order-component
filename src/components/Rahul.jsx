import React, { Component } from "react";
import Arm from "./Army";

class Rahul extends Component {
  render() {
    return (
      <>
        <h1>Rahul</h1>
        <h3 onMouseOver={this.props.handleEvent}>
          Gunshots fire with {this.props.gun}: {this.props.hocGunshot}
        </h3>
      </>
    );
  }
}

export default Arm(Rahul, 10);
