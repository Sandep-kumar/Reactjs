import React from "react";

export default function CatigoryCard(props) {
  return (
    <>
      <div>
        <a href="/" style={{ textDecoration: "none", color: "inherit" }}>
          <div className="row">
            <div className="col-10">
              <div className="h5 m-0">{props.heading}</div>
              <p className="text-muted m-0">{props.subHeading}</p>
            </div>
            <div className="col-2 my-auto">
              {" "}
              <i className="fa fa-chevron-right" aria-hidden="true"></i>
            </div>
          </div>
        </a>
      </div>
    </>
  );
}
