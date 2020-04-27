import React, { Component } from "react";
import Header from "../components/header";
import Footer from "../components/Footer";

export default class Locations extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container-fluid">
          <center>
            <h1 style={{ marginTop: 50 }}>
              Locations Form Where We Collect Material
            </h1>
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
                src={require("../assets/home.jpg")}
              />
              <h3 style={{ marginTop: 30 }}>Home</h3>
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
                src={require("../assets/university.jpg")}
              />
              <h3 style={{ marginTop: 30 }}>University</h3>
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
                src={require("../assets/resturant.jpg")}
              />
              <h3 style={{ marginTop: 30 }}>Resturant</h3>
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
                src={require("../assets/apartment.jpg")}
              />
              <h3 style={{ marginTop: 30 }}>Apartment</h3>
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
                src={require("../assets/colege.jpg")}
              />
              <h3 style={{ marginTop: 30 }}>School</h3>
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
                src={require("../assets/schools.jpg")}
              />
              <h3 style={{ marginTop: 30 }}>College</h3>
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
                src={require("../assets/hospital.jpg")}
              />
              <h3 style={{ marginTop: 30 }}>Hospital</h3>
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
                src={require("../assets/hotel.jpg")}
              />
              <h3 style={{ marginTop: 30 }}>Hotel</h3>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
