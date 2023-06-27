import React from "react";

export default function Footor(props) {
  return (
    <>
      <div className="footor my-5 mx-auto" style={{ width: "80vw" }}>
        <h2>Patient care comes first</h2>
        <h6>
          Your well-being is our top priority. That is why we guarantee that
          your tele-consult will run smoothly - from the appointment to the
          prescription. Otherwise you will get your money back.
        </h6>
        <div className="section my-5">
          <div className="row my-5">
            <div className="col-sm-3 text-center">
              <h2>24x7</h2>
              <h6>Always Availbale</h6>
            </div>
            <div className="col-sm-3 text-center">
              <h2>5 Lakh +</h2>
              <h6>Patient Treated</h6>
            </div>
            <div className="col-sm-3 text-center">
              <h2>Fastest</h2>
              <h6>Doctor Response</h6>
            </div>
            <div className="col-sm-3 text-center">
              <h2>99 %</h2>
              <h6>Happy Clients</h6>
            </div>
          </div>
        </div>
      </div>
      <div className="lable py-3" style={{backgroundColor:"lightblue"}}>
        <p className="text-center" style={{color:"white", font:"15px"}}>© 2023 Doctor24x7 All Right Reserved</p>
      </div>
    </>
  );
}
