import React, { Component } from "react";
import CatigoryCard from "../components/HomeComp/CatigoryCard";

export default class Specialities extends Component {
  CatigoryCard = [
    { heading: "Radioloy", subHeading: "18 Specialists" },
    { heading: "Radioloy", subHeading: "18 Specialists" },
    { heading: "Radioloy", subHeading: "18 Specialists" },
    { heading: "Radioloy", subHeading: "18 Specialists" },
    { heading: "Radioloy", subHeading: "18 Specialists" },
  ];
  constructor() {
    super();
    this.state = {
      CatigoryCard: this.CatigoryCard,
      loading: false,
    };
  }
  render() {
    return (
      <>
        <div
          className="box mb-5"
          style={{ width: "100%", backgroundColor: "#e2ecef" }}
        >
          <div
            className="head py-2"
            style={{ color: "white", backgroundColor: "#8171cb" }}
          >
            <div className="row m-4 ">
              <div className="col-2">
                {" "}
                <i className="fa fa-arrow-left" aria-hidden="true"></i>
              </div>
              <div className="col-10 h5">Go Back</div>
            </div>

            <div className="input-group justify-content-center">
              <div className="form-outline">
                <input
                  type="search"
                  id="form1"
                  className="form-control"
                  placeholder="Search"
                />
              </div>
              <button type="button" className="btn ">
                <i className="fa fa-search"></i>
              </button>
            </div>
          </div>

          <hr />
          {this.state.CatigoryCard.map((e) => {
            return (
              <>
                <div className="m-4">
                  <CatigoryCard heading={e.heading} subHeading={e.subHeading} />
                </div>
                <hr />
              </>
            );
          })}
        </div>
      </>
    );
  }
}
