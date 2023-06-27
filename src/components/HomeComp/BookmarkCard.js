import React from "react";
import { useState } from "react";

export default function BookmarkCard(props) {
  const [isActive, setActive] = useState("false");
  const ToggleClass = () => {
    setActive(!isActive);
  };
  return (
    <>
      {" "}
     
     
        <div
          className="card rounded px-4 py-3"
          style={{
            height: "40vh",
            position: "relative",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundImage:
              "url('https://img.freepik.com/premium-photo/medical-team-operating-room-dark-background_124865-6182.jpg')",
          }}
        >
          <div className="row">
            <div
              className="col-10 d-inline"
              style={{  color: "white" }}
            >
              12 JUL 2020
            </div>

            <div
              className="col-2 d-inline text-end"
              
            >
              <i
                onClick={ToggleClass}
                className={
                  isActive
                    ? "fa fa-bookmark-o  text-white"
                    : "fa fa-bookmark text-warning"
                }
                style={{ fontSize: "2rem", color: "white",cursor: "pointer"
            }}
                aria-hidden="true"
              ></i>
            </div>
          </div>
          <a style={{textDecoration:"none"}} href={props.link}>
          <div
            className="bottomText text-bottom "
            style={{ position: "absolute", bottom: "0", color: "white" }}
          >
            <div className="h5">COVID-19 vaccine</div>
            <p className="text-muted" style={{ color: "white!important" }}>
              Some Discrption
            </p>
          </div></a>
        </div>
       
    </>
  );
}
