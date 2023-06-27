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
      <div className="card" >
        <div style={{position:"relative"}}>
        <div className="time" style={{position:"absolute", bottom:"4%", left:"5%", color:"black"}}><i className="fa fa-clock-o" aria-hidden="true"></i> {props.time}</div>
            <img className="card-img-top" src={props.src} alt="Card cap" />
            </div> 
        <div className="card-body">
          <h5 className="card-title">{props.heading}</h5>
          <p className="card-text text-muted">{props.subHeading}</p>
          <div className="row ">
            <div className="col-8 text-secondary">
              {" "}
              <i
                onClick={ToggleClass}
                className={
                  isActive
                    ? "fa fa-heart-o "
                    : "fa fa-heart text-danger"
                }
                aria-hidden="true"
              ></i> {props.likes}{" "}
            </div>
            <div className="col-2">
            <i 
            className="fa fa-share-alt" 
            aria-hidden="true"></i>
            </div>
            <div className="col-2">
              <i
              onClick={ToggleBookmarkClass}
              className={
                isBookmarkActive
                  ? "fa fa-bookmark-o text-secondary"
                  : "fa fa-bookmark text-warning"}
               
               aria-hidden="true">

               </i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
