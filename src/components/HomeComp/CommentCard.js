import React from "react";
import { useState } from "react";

export default function CommentCard(props) {
  const [isActive, setActive] = useState("false");
  const ToggleClass = () => {
    setActive(!isActive);
  };
  return (
    <>
      
      <div className=" p-2">
        <div className="row ">
          <div className="col-10">
            {" "}
            <p className="">{props.comment}</p>
          </div>
          <div className="col-2 text-center">
            <i
              onClick={ToggleClass}
              className={
                isActive
                  ? "fa fa-heart-o text-danger"
                  : "fa fa-heart fa-2x text-danger"
              }
              aria-hidden="true"
            ></i>
           
          </div>
        </div>
        <div className="row">
          <div className="col-3" style={{ maxWidth: "fit-content" }}>
            <div className="mx-auto text-center">
              <img
                className="rounded-circle"
                style={{ maxWidth: "100%" }}
                src={props.src}
                alt=""
              />
            </div>
          </div>
          <div className="col-9 my-auto">
            <div className="h4 mb-0">{props.heading}</div>
            <p className="text-muted ">{props.subHeading}</p>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
}
