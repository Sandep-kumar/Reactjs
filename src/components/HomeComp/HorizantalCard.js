import React from "react";

export default function HorizantalCard(props) {
  return (
    <>
      <div className="card p-2 shadow">
        <div className="row no-wrap">
          <div className="col-3 my-auto mx-auto">
            <img style={{maxWidth:"100%"}} src={props.src} alt="" />
          </div>
          <div className="col-7">
            <p className="h2 mb-0">{props.heading}</p>
            <p className="text-muted">{props.subHeading}</p>
          </div>
          <div className="col-2 text-center my-auto"><i className="fa fa-chevron-right" aria-hidden="true"></i></div>
        </div>
      </div>
    </>
  );
}
