import React, { Component } from "react";
import LocationCard from "../components/HomeComp/LocationCard";
export default class ClinlicsPage extends Component {
  data = [
    {
      heading: "Name of Clinic",
      distance: "68km away",
      address: "987 Blaise Drive Suite 420",
      rating: "4.7",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4xdxVILjN9aYnozgR6l5Y3eF6DWxi0Z_l0w&usqp=CAU",
    },
    {
      heading: "Name of Clinic",
      distance: "68km away",
      address: "987 Blaise Drive Suite 420",
      rating: "4.7",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4xdxVILjN9aYnozgR6l5Y3eF6DWxi0Z_l0w&usqp=CAU",
    },
    {
      heading: "Name of Clinic",
      distance: "68km away",
      address: "987 Blaise Drive Suite 420",
      rating: "4.7",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4xdxVILjN9aYnozgR6l5Y3eF6DWxi0Z_l0w&usqp=CAU",
    },
    {
      heading: "Name of Clinic",
      distance: "68km away",
      address: "987 Blaise Drive Suite 420",
      rating: "4.7",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4xdxVILjN9aYnozgR6l5Y3eF6DWxi0Z_l0w&usqp=CAU",
    },
  ];

  constructor() {
    super();
    this.state = {
      data: this.data,
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
              <div className="col-6 h5">Clinics</div>
              <div className="col-2 text-center">
                <i className="fa fa-search" aria-hidden="true"></i>
              </div>
              <div className="col-2 text-center">
                <i className="fa fa-map-marker" aria-hidden="true"></i>
              </div>
            </div>
          </div>

          <div className="location m-2">
            {this.state.data.map((e) => {
              return (
                <div className="my-2">
                  <LocationCard
                    heading={e.heading}
                    distance={e.distance}
                    address={e.address}
                    rating={e.rating}
                    src={e.src}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  }
}
