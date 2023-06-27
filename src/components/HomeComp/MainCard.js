import React from "react";

export default function MainCard(props) {
  return (
    <>
      <div
        className="card p-4"
        style={{ width: "100%" }}
      >
        <div className="icon m-auto">
          <i
            className={props.icon}
            style={{ color: "blue" }}
            aria-hidden="true"
          ></i>
        </div>
        <div className="text m-auto">
          <p className="h2 text-muted">Doctors</p>
        </div>
      </div>
    </>
  );
}
