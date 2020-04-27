import React, { Component } from "react";
import Header from "../components/header";
import Footer from "../components/Footer";

export default class Team extends Component {
  render() {
    return (
      <div>
        <Header />
        <center>
          <h1 style={{ marginTop: 100 }}>Our Team</h1>
        </center>
        <div className="row" style={{ marginTop: 50 }}>
          <div
            className="col-md-5"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <img
              src={require("../assets/hamza.jpg")}
              style={{ width: 300, height: 300 }}
            />
            <h3 style={{ marginTop: 30 }}>Hamza Shafi</h3>
          </div>
          <div className="col-md-1"></div>
          <div
            className="col-md-5"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <img
              src={require("../assets/shajia.jpg")}
              style={{ width: 300, height: 300 }}
            />
            <h3 style={{ marginTop: 30 }}>Shajia Seher</h3>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
