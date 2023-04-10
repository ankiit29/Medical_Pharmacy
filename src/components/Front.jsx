import React from "react";
import { Link } from "react-router-dom";

function Front() {
  return (

      <div className=" main">
        <div className="col-sm-4 mx-3">
          <div className="card my-4 ">
            <div className="card-body">
              <h5 className="card-title">Hey! Continue as a Pharmacist</h5>
              <p className="card-text">
                Here, you can view the Prescriptions Uploaded by Patients and
                Offer a Price a for it.
              </p>
              <Link to="/PLogin">
                <button type="button" className="btn btn-primary">
                  I am a Pharmacist
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-sm-4 mx-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Hey! Continue as a Customer</h5>
              <p className="card-text">
                Here , I can Uplaod my Prescriptions and get the Best Price
                Offer for it from the Pharmacist near me.
              </p>
              <Link to="/CLogin">
                <button type="button" className="btn btn-primary">
                  I am a Customer
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

  );
}

export default Front;
