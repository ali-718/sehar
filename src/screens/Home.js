import React, { Component } from "react";
import Header from "../components/header";
import Footer from "../components/Footer";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Header navigation={this.props.history} />
        <div class="container">
          <div
            id="carouselExampleControls"
            className="carousel slide"
            data-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src={require("../assets/slide1.png")}
                  className="d-block w-90"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src={require("../assets/slide2.png")}
                  className="d-block w-90"
                  alt="..."
                />
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#carouselExampleControls"
              role="button"
              data-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleControls"
              role="button"
              data-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>

        {/* content */}
        <div style={{ marginTop: 100 }} className="container">
          <div className="row">
            <div className="col-md-12">
              <center>
                <h3>ABOUT US</h3>
              </center>
              <p>
                Waste Busters is one of the largest waste management companies
                operating in the private sector in Pakistan. Incorporated in
                1996, it has been a market leader in the waste management
                industry with its innovative ideas such as door to door
                collection of garbage, sorting and recycling of the waste
                collected and producing products such as compost, soil
                conditioners, fertilizers, refuse derived fuel (RDF) and
                furniture made out of recycled plastic bags. Waste Busters has
                won many awards and recognition from multilateral agencies such
                as the World Bank, Asian Development Bank, United Nations and
                many others. Waste Busters was show cased as a model of low cost
                sustainable waste management practice in developing countries in
                an International symposium held in Sardinia, Italy in 2013.
                Waste Busters has embarked upon sharing its knowledge and
                experience with others who would like to benefit from this new
                evolving industry of waste management in Pakistan. The “CLEAN
                PAKISTAN” program has been start entirely over the country to
                achieve its goal of making Pakistan a pollution free country
                while using waste as a resource to earn income.
              </p>
            </div>
          </div>
          <div className="row">
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
        </div>

        <div style={{ marginTop: 100 }} className="container">
          <div className="row">
            <div className="col-md-6">
              <img
                src={require("../assets/img2.jpg")}
                style={{ width: "100%", height: 638 }}
              />
            </div>
            <div className="col-md-6">
              <h3>ECOPRENEUR</h3>
              <p>
                This project has been designed specially for the Youth of
                Pakistan whom we call “Ecopreneurs”. An “Ecopreneur” is the
                young person who shares our vision of a Clean Pakistan. A person
                who wants to do something for his country and a person who has
                the passion to become self made and have his/her own business.
                Waste Busters is offering its Franchise to operate its waste
                management model at the grass root level that is the Union
                Council. Any person with the requisite qualifications can apply
                to get a Franchise from Waste Busters. The selected franchisee
                is called the “Ecopreneur”. The Ecopreneur would be given a
                proper training along with the guidance to implement the program
                in his/her Union Council once he has been selected. The
                Ecopreneur would also qualify to apply for the Loan of Rs. 20
                Lacs available at specially discounted interest rate of 6% and
                is payable in 8 years. The Loan would be applied towards the
                initial Capital Cost and operating expenses of the Franchise in
                any given area. This would include hiring of manpower,
                purchasing of pick up vehicles, hand carts, tools, protective
                gear and training of the personnel.
              </p>
            </div>
          </div>
        </div>

        <div style={{ marginTop: 100 }} className="container">
          <h3>ELIGIBILITY</h3>
          <p>
            The Clean Pakistan Program has been designed specially to attract
            the unemployed youth in the Country. The person who complies with
            the following criteria may apply for a Franchise of Waste Busters
            and can become an “Ecopreneur”.
          </p>
          <p>Age: 21 yrs to 45 years</p>
          <p>Education: Matric </p>
          <p>Must Have: Valid CNIC</p>
          <p>Gender: Male & Female both can apply</p>
        </div>
        {/* content ends */}

        {/* footer */}
        <Footer />
        {/* footer ends */}
      </div>
    );
  }
}
