import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import capcha from "../assets/image/agreementform/captcha.png"

function SupportForm() {
  return (
    <div className="container mb-5 mt-5">
      <div className="card">
        <div className="card-header fw-bold">Hotel Support - Raise Your Tickets</div>
        <div className="card-body">
          <p className="text-muted">Please provide us required details to serve you better.</p>
          <form>
            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label">Hotel Name</label>
                <input type="text" className="form-control" />
              </div>
              <div className="col-md-6">
                <label className="form-label">Hotel Email ID</label>
                <input type="email" className="form-control" />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label">Account Manager</label>
                <input type="text" className="form-control" />
              </div>
              <div className="col-md-6">
                <label className="form-label">Document or PDF or Image, if any</label>
                <input type="text" className="form-control" />
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label">Subject</label>
              <input type="text" className="form-control" />
            </div>

            <div className="mb-3">
              <label className="form-label">Message</label>
              <textarea className="form-control" rows="4"></textarea>
            </div>

            <div className="row mb-4">
              <div className="col-md-6">
                <label className="form-label">Verify Code</label>
                <div className="d-flex align-items-center">
                  <img
                    src={capcha}
                    alt="captcha"
                    className="me-2"
                  />
                  <input type="number" className="form-control w-50" />
                </div>
              </div>
            </div>

            <div className="text-start">
              <button type="submit" className="btn btn-success px-4">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SupportForm;
