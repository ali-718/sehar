import React, { Component } from "react";
import Header from "../components/header";
import Footer from "../components/Footer";

export default class Material extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container-fluid">
          <center>
            <h1 style={{ marginTop: 50 }}>Materials We Collect</h1>
          </center>

          <div className="row" style={{ marginTop: 100 }}>
            <div
              className="col-md-4"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <img
                style={{ width: 300, height: 300, borderRadius: 20 }}
                src={require("../assets/plastic.jpg")}
              />
              <h3 style={{ marginTop: 30 }}>Plastic</h3>
            </div>

            <div
              className="col-md-4"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <img
                style={{ width: 300, height: 300, borderRadius: 20 }}
                src={require("../assets/paper.jpg")}
              />
              <h3 style={{ marginTop: 30 }}>Paper</h3>
            </div>

            <div
              className="col-md-4"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <img
                style={{ width: 300, height: 300, borderRadius: 20 }}
                src={require("../assets/glass.jpg")}
              />
              <h3 style={{ marginTop: 30 }}>Glass</h3>
            </div>
          </div>

          <div className="row" style={{ marginTop: 100 }}>
            <div
              className="col-md-4"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <img
                style={{ width: 300, height: 300, borderRadius: 20 }}
                src={require("../assets/iron.jpg")}
              />
              <h3 style={{ marginTop: 30 }}>Iron</h3>
            </div>

            <div
              className="col-md-4"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <img
                style={{ width: 300, height: 300, borderRadius: 20 }}
                src={require("../assets/wrapper.png")}
              />
              <h3 style={{ marginTop: 30 }}>Wrapper</h3>
            </div>

            <div
              className="col-md-4"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <img
                style={{ width: 300, height: 300, borderRadius: 20 }}
                src={require("../assets/wood.jpg")}
              />
              <h3 style={{ marginTop: 30 }}>Wood</h3>
            </div>
          </div>

          <div className="row" style={{ marginTop: 100 }}>
            <div
              className="col-md-4"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <img
                style={{ width: 300, height: 300, borderRadius: 20 }}
                src={require("../assets/steel.jpg")}
              />
              <h3 style={{ marginTop: 30 }}>Steel</h3>
            </div>

            <div
              className="col-md-4"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <img
                style={{ width: 300, height: 300, borderRadius: 20 }}
                src={require("../assets/tin.jpg")}
              />
              <h3 style={{ marginTop: 30 }}>Tin</h3>
            </div>

            <div
              className="col-md-4"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <img
                style={{ width: 300, height: 300, borderRadius: 20 }}
                src={require("../assets/shopper.jpg")}
              />
              <h3 style={{ marginTop: 30 }}>Shopper</h3>
            </div>
          </div>

          <div className="row" style={{ marginTop: 100 }}>
            <div
              className="col-md-4"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <img
                style={{ width: 300, height: 300, borderRadius: 20 }}
                src={require("../assets/plastic_bags.jpg")}
              />
              <h3 style={{ marginTop: 30 }}>Plastic Bags</h3>
            </div>

            <div
              className="col-md-4"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <img
                style={{ width: 300, height: 300, borderRadius: 20 }}
                src={require("../assets/tyre.png")}
              />
              <h3 style={{ marginTop: 30 }}>Tyre Tube</h3>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
