import React from "react";

import { useState } from "react";

export default function ArticalBookmark(props) {

    const [isActive, setActive] = useState("false");
    const ToggleClass = () => {
      setActive(!isActive);
    };
  return (
    <>
      <div className="row flex-nowrap p-2">
        <div className="col-3 " style={{ maxWidth: "fit-content" }}>
          <div className="mx-auto text-center">
            <img
              className="rounded-circle"
              style={{ maxWidth: "100%" }}
              src={props.src}
              alt=""
            />
          </div>
        </div>
        <div className="col-7 text-left my-auto">
          <div className="h5 mb-0 "> {props.heading}</div>
          <div className="p text-muted"> {props.subHeading}</div>
        </div>
        <div
          className="col-2 h5 m-auto"
          style={{ fontSize: "100%", maxWidth: "fit-content" }}
        >
          <div
            className="px-3 py-3 rounded-circle text-last"
            style={{
              width: "fit-content",
              backgroundColor: "rgb(214 216 237)",
              color: "rgb(97 105 197)",
            }}
          >
            <i
                onClick={ToggleClass}
                className={
                  isActive
                    ? "fa fa-bookmark-o"
                    : "fa fa-bookmark text-warning"
                }
                style={{  color: "rgb(97 105 197)",cursor: "pointer"
            }}
                aria-hidden="true"
              ></i>
          </div>
        </div>
      </div>
    </>
  );
}
