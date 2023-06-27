import React from "react";
import { useState } from "react";

export default function Card(props) {
  const [isActive, setActive] = useState("false");
  const [isBookmarkActive, setBookmarkActive] = useState("false");

  const ToggleClass = () => {
    setActive(!isActive);
  };
  const ToggleBookmarkClass = () => {
    setBookmarkActive(!isBookmarkActive);
  };
  return (
    <>
      <div className="card">
        {/* overflow like clock and bookmark */}
        <div style={{ position: "relative" }}>
          <div
            className="time"
            style={{
              width: "90%",
              position: "absolute",
              bottom: "10%",
              left: "5%",
              right:"5%",
              color: "black",
            }}
          >
            <div className="row" style={{ height: "fit-content",color:"white" }}>
              <div className="col-3 p-0 m-auto text-center">
                <span>
                  <i
                    onClick={ToggleClass}
                    className={
                      isActive ? "fa fa-heart-o " : "fa fa-heart text-danger"
                    }
                    aria-hidden="true"
                  ></i>{" "}
                  {props.likes}
                </span>
              </div>
              <div className="col-3 p-0 m-auto text-center">
                <span>
                  <i className="px-1 fa fa-clock-o" aria-hidden="true"></i>
                  {props.time}
                </span>
              </div>

              <div className="col-6 m-auto text-end">
                <span
                  className="px-3 py-3 rounded-circle text-center"
                  style={{
                    backgroundColor: "gray",
                    opacity: 0.8
                  }}
                >
                  <i
                    onClick={ToggleBookmarkClass}
                    className={
                      isBookmarkActive
                        ? "fa fa-bookmark-o"
                        : "fa fa-bookmark text-warning"
                    }
                    style={{
                      color: "white",
                      cursor: "pointer",
                      fontSize: "1rem",
                    }}
                    aria-hidden="true"
                  ></i>
                </span>
              </div>
            </div>
          </div>
          <img className="card-img-top" src={props.src} alt="Card cap" />
        </div>

        <div className="card-body">
          <h5 className="card-title">{props.heading}</h5>
          <p className="card-text text-muted">{props.subHeading}</p>
          <div className="row ">
            <div className="col-8 text-secondary">

            <div
              className="px-2 py-1 rounded "
              style={{
                width: "fit-content",
                backgroundColor: "rgb(214 216 237)",
                color: "rgb(97 105 197)",
              }}
            >
             <h6 className="m-0">{props.topic}</h6> 
            </div>
            </div>

            <div className="col-4 ">
                <a className="text-secondary" href="/" style={{textDecoration:"none"}}>
              Read
              <i className="p-2 fa fa-chevron-right" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
