import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div
        style={{
          width: "100%",
          height: 60,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#31AA3A",
          marginTop: 100,
        }}
      >
        <p style={{ fontSize: 10 }}>
          © 2016 Clean Pakistan 0800 87274 | Powered by: Waste Busters
        </p>
      </div>
    );
  }
}
