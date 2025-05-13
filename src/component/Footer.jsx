import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-4 pb-2">
      <div className="container">
        <div className="row text-center text-md-start align-items-center">
          {/* Logos and description */}
          <div className="col-md-3 mb-4 mb-md-0">
            <p className="text-muted small">India’s best travel management company.</p>
            <div className="d-flex justify-content-center justify-content-md-start gap-2 mb-2">
              <img src="/logo1.png" alt="Logo1" height="30" />
              <img src="/logo2.png" alt="Logo2" height="30" />
              <img src="/logo3.png" alt="Logo3" height="30" />
            </div>
            <h5><FaMapMarkerAlt className="me-2" />Sonachala</h5>
          </div>

          {/* Explore */}
          <div className="col-md-3 mb-4 mb-md-0">
            <h6 className="text-uppercase fw-bold mb-3">Explore</h6>
            <p className="mb-1 small">India Services</p>
            <p className="mb-1 small">IRCTC Agent</p>
            <p className="mb-1 small">No. 1 B2B</p>
          </div>

          {/* Company */}
          <div className="col-md-3 mb-4 mb-md-0">
            <h6 className="text-uppercase fw-bold mb-3">Company</h6>
            <p className="mb-1 small">About Us</p>
            <p className="mb-1 small">GST/ MSME Certified</p>
            <p className="mb-1 small">Career</p>
          </div>

          {/* Help */}
          <div className="col-md-3">
            <h6 className="text-uppercase fw-bold mb-3">Help</h6>
            <p className="mb-1 small">Privacy Policy</p>
            <p className="mb-1 small">Terms & Conditions</p>
            <p className="mb-1 small">Support</p>
          </div>
        </div>

        {/* Social + Payment */}
        <div className="row mt-4 text-center text-md-start">
          <div className="col-md-6 mb-3 mb-md-0">
            <div className="d-flex justify-content-center justify-content-md-start gap-3">
              <FaFacebook />
              <FaTwitter />
              <FaInstagram />
              <FaLinkedin />
              <FaYoutube />
            </div>
          </div>

          <div className="col-md-6">
            <div className="d-flex justify-content-center justify-content-md-end gap-2 flex-wrap">
              <img src="/visa.png" alt="Visa" height="24" />
              <img src="/mastercard.png" alt="MasterCard" height="24" />
              <img src="/rupay.png" alt="Rupay" height="24" />
              <img src="/paytm.png" alt="Paytm" height="24" />
              <img src="/phonepe.png" alt="PhonePe" height="24" />
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-3 small text-muted">
          © 2025 SONACHALA Developers Pvt. Ltd.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
