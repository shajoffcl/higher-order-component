import React from "react";

const Arm = (Men, shot) => {
  return class NewMen extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        gunshot: 0
      };
    }
    handleEvent = () => {
      this.setState((prevState) => ({
        gunshot: prevState.gunshot + shot
      }));
    };
    render() {
      return (
        <Men
          handleEvent={this.handleEvent}
          hocGunshot={this.state.gunshot}
          {...this.props}
        />
      );
    }
  };
};
export default Arm;
