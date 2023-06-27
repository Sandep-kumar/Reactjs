import React from "react";

export default function AdCard(props) {
  return (
    <>
    <div className="card">
      <div className="row px-2 py-2">
        <div className="col-3">
        <div className="mx-auto text-center">
              <img
                className="rounded"
                style={{ maxWidth: "100%" }}
                src={props.src}
                alt=""
              />
            </div>
        </div>
        <div className="col-7 my-auto">
        <div className="h5 mb-0 "> {props.heading}</div>
          <div className="p text-muted"> {props.subHeading}</div>
        </div>
        <div
          className="col-2 m-auto align-text-bottom"
          style={{ maxWidth: "fit-content" }}
        >
          {" "}
          <i
            className="fa fa-arrow-right text-secondary "
            aria-hidden="true"
          ></i>
        </div>
      </div>
      </div>
    </>
  );
}
