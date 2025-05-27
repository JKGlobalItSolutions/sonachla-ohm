import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import capcha from "../assets/image/agreementform/captcha.png";

function CabForm() {
  return (
    <div className="container mt-5  mb-5">
      <div className="card">
        <div className="card-header fw-bold">Cab Enquiry</div>
        <div className="card-body">
          <p className="text-muted">
            Please provide us required details for Cab enquiry
          </p>
          <form>
            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label">Name</label>
                <input type="text" className="form-control" />
              </div>
              <div className="col-md-6">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label">Mobile</label>
                <input type="text" className="form-control" />
              </div>
              <div className="col-md-6">
                <label className="form-label">City of Residence</label>
                <input type="text" className="form-control" />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label">Location From</label>
                <input type="text" className="form-control" />
              </div>
              <div className="col-md-6">
                <label className="form-label">Location To</label>
                <input type="text" className="form-control" />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label">No. of People</label>
                <input type="number" className="form-control" />
              </div>
              <div className="col-md-6">
                <label className="form-label">Appx. Budget</label>
                <input type="text" className="form-control" />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label">Date of Travel</label>
                <input type="date" className="form-control" />
              </div>
              <div className="col-md-6">
                <label className="form-label">Remarks</label>
                <textarea className="form-control" rows="3"></textarea>
              </div>
            </div>

            <div className="row mb-4">
              <div className="col-md-6">
                <label className="form-label">Verify Code</label>
                <div className="d-flex align-items-center">
                  <img src={capcha} alt="captcha" className="me-2" />
                  <input type="text" className="form-control w-50" />
                </div>
              </div>
            </div>

            <div className="text-end">
              <button type="submit" className="btn btn-success p-2 px-4">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CabForm;
