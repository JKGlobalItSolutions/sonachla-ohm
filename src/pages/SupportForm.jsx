import React, { useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import emailjs from '@emailjs/browser';
import capcha from "../assets/image/agreementform/captcha.png";

function SupportForm() {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_c82ojes', 'template_94mq7vq', form.current, 'ynqEfG11gKmr6S51S')
      .then((result) => {
        alert("Ticket submitted successfully!");
        console.log(result.text);
      }, (error) => {
        alert("Failed to submit ticket. Please try again.");
        console.error(error.text);
      });
  };

  return (
    <div className="container mb-5 mt-5">
      <div className="card">
        <div className="card-header fw-bold">Hotel Support - Raise Your Ticket</div>
        <div className="card-body">
          <p className="text-muted">Please provide us required details to serve you better.</p>
          <form ref={form} onSubmit={handleSubmit}>
            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label">Hotel Name</label>
                <input type="text" className="form-control" name="hotel_name" required />
              </div>
              <div className="col-md-6">
                <label className="form-label">Hotel Email ID</label>
                <input type="email" className="form-control p-4" name="hotel_email" required />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label">Account Manager</label>
                <input type="text" className="form-control" name="account_manager" />
              </div>
              <div className="col-md-6">
                <label className="form-label">Document or PDF or Image, if any</label>
                <input type="file" className="form-control" name="attachment" />
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label">Subject</label>
              <input type="text" className="form-control" name="subject" required />
            </div>

            <div className="mb-3">
              <label className="form-label">Message</label>
              <textarea className="form-control" rows="4" name="message" required></textarea>
            </div>

            <div className="row mb-4">
              <div className="col-md-6">
                <label className="form-label">Verify Code</label>
                <div className="d-flex align-items-center">
                  <img src={capcha} alt="captcha" className="me-2" />
                  <input type="text" className="form-control w-50" name="captcha_code" required />
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
