import React, { Component } from "react";

class Loading extends Component {
  state = {};
  render() {
    return (
      <div
        style={{
          backgroundColor: "rgba(170, 183, 184, 0.3)",
          height: "100%",
          width: "100%",
          position: "absolute",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 2,
        }}
      >
        <p>Loading</p>
      </div>
    );
  }
}

export default Loading;
