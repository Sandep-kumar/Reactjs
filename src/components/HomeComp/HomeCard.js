import React from "react";

export default function HomeCard(props) {
  return (
    <>
      <div>
        <a href={props.link} style={{textDecoration:"none", color:"inherit"}}>
        <div
          className="card p-3 text-center"
          style={{ width: "100%" }}
        >
          <i
            className={props.icon}
            style={{ color: "#a4a4d7" }}
            aria-hidden="true"
          ></i>

          <div className="mt-2">
            <div className="h5">{props.heading}</div>
            <p className="text-muted">{props.text}</p>
          </div>
        </div>
        </a>
      </div>
    </>
  );
}
