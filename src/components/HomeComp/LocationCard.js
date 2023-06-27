import React from "react";

export default function DoctorCard(props) {
  return (
    <>
      <div className="border rounded shadow" style={{backgroundColor:"white"}}>
        <div className="row flex-nowrap p-2">
          <div className="col-3 " style={{maxWidth:"fit-content"}}>
            <div className="mx-auto text-center">
              <img
                className="rounded-circle"
                style={{ maxWidth: "100%" }}
                src={props.src}
                alt=""
              />
            </div>
          </div>
          <div className="col-6 text-left my-auto" >
            <div className="h4 mb-0 "> {props.heading}</div>
            <div className="p text-muted">
              <i className="fa fa-location-arrow" aria-hidden="true"></i> {props.distance}
            </div>
          </div>
          <div className="col-3 h5 m-auto" style={{ fontSize:"100%", maxWidth:"fit-content"}}>
            <div
              className="px-2 py-1 rounded "
              style={{
                width: "fit-content",
                backgroundColor: "rgb(214 216 237)",
                color: "rgb(97 105 197)",
              }}
            >
              <i className="fa fa-star mr-1 " aria-hidden="true"></i>{props.rating}
            </div>
          </div>
        </div>
        <hr style={{ marginTop: "1%", marginBottom: "1%" }} />

        <div className="row flex-nowrap px-2 py-2">
          <div className="col-2 text-center">
            <div
              className="text-center px-3 py-2 border mx-auto"
              style={{ width: "fit-content" }}
            >
              <i className="fa fa-map-marker fa-2x" aria-hidden="true"></i>
            </div>
          </div>
          <div className="col-8 text-secondary my-auto">
            {props.address}
          </div>
          <div className="col-2 m-auto text-end" style={{maxWidth:"fit-content"}}> <i className="fa fa-arrow-right text-secondary" aria-hidden="true"></i></div>
        </div>
      </div>
    </>
  );
}
