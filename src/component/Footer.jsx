import React from "react";

import { Link } from "react-router-dom";

import logo from "../assets/image/componetimsges/logo.png";
import componislogo from "../assets/image/componetimsges/footerimg.png";

import smedia1 from "../assets/image/componetimsges/smedia1.png";
import smedia2 from "../assets/image/componetimsges/smedia2.png";
import smedia3 from "../assets/image/componetimsges/smedia3.png";
import smedia4 from "../assets/image/componetimsges/smedia4.png";
import smedia5 from "../assets/image/componetimsges/smedia5.png";

const Footer = () => {
  return (
    //     <footer className="bg-dark text-white pt-4 pb-2">
    //       <div className="container">
    //         <div className="row text-center text-md-start align-items-center">
    //           {/* Logos and description */}
    //           <div className="col-md-3 mb-4 mb-md-0">
    //             <p className="text-muted small">
    //               India’s best travel management company.
    //             </p>
    //             <div className="d-flex justify-content-center justify-content-md-start gap-2 mb-2">
    //               <img src={logo} alt="Logo" width="180" height="80" />
    //             </div>
    //           </div>

    //           {/* Explore */}
    //           <div className="col-md-3 mb-4 mb-md-0">
    //             <h6 className="text-uppercase fw-bold mb-3">Explore</h6>
    //             <p className="mb-1 small">India Services</p>
    //             <p className="mb-1 small">IRCTC Agent</p>
    //             <p className="mb-1 small">No. 1 B2B</p>
    //           </div>

    //           {/* Company */}
    //           <div className="col-md-3 mb-4 mb-md-0">
    //             <h6 className="text-uppercase fw-bold mb-3">Company</h6>
    //             <p className="mb-1 small">About Us</p>
    //             <p className="mb-1 small">GST/ MSME Certified</p>
    //             <p className="mb-1 small">Career</p>
    //           </div>

    //           {/* Help */}
    //           <div className="col-md-3">
    //             <h6 className="text-uppercase fw-bold mb-3">Help</h6>
    //             <p className="mb-1 small">Privacy Policy</p>
    //             <p className="mb-1 small">Terms & Conditions</p>
    //             <p className="mb-1 small">Support</p>
    //           </div>
    //         </div>

    //         {/* Social + Payment */}
    //         <div className="row mt-4 text-center text-md-start">
    //           <div className="col-md-6 mb-3 mb-md-0">
    //             <div className="d-flex justify-content-center justify-content-md-start gap-3">

    //             <>
    //   <Link to="/media1">
    //     <img src={smedia1} alt="Media 1" height="50" />
    //   </Link>
    //   <Link to="/mastercard1">
    //     <img src={smedia2} alt="MasterCard" height="50" />
    //   </Link>
    //   <Link to="/mastercard2">
    //     <img src={smedia3} alt="MasterCard" height="50" />
    //   </Link>
    //   <Link to="/mastercard3">
    //     <img src={smedia4} alt="MasterCard" height="50" />
    //   </Link>
    //   <Link to="/mastercard4">
    //     <img src={smedia5} alt="MasterCard" height="50" />
    //   </Link>
    // </>

    //             </div>
    //           </div>

    //           <div className="col-md-6">
    //             <div className="d-flex justify-content-center justify-content-md-end gap-2 flex-wrap">
    //               {/* <img src="/visa.png" alt="Visa" height="24" />
    //               <img src="/mastercard.png" alt="MasterCard" height="24" />
    //               <img src="/rupay.png" alt="Rupay" height="24" />
    //               <img src="/paytm.png" alt="Paytm" height="24" />
    //               <img src="/phonepe.png" alt="PhonePe" height="24" /> */}

    //               <img src={componislogo} alt="Paytm" height="24" />
    //             </div>
    //           </div>
    //         </div>

    //         {/* Copyright */}
    //         <div className="text-center mt-3 small text-muted">
    //           © 2025 SONACHALA Developers Pvt. Ltd.
    //         </div>
    //       </div>
    //     </footer>

    <footer className="bg-dark text-white pt-4 pb-2">
      <div className="container-fluid">
        <div className="row text-center text-md-start align-items-start">
          {/* Logo */}
          <div className="col-lg-6 mt-5 mb-md-0">
            <div className="d-flex justify-content-center justify-content-md-start mb-5">
              <img
                src={logo}
                alt="Logo"
                width="300"
                height="200"
                className="rounded-5"
              />
            </div>
          </div>

          {/* Explore, Company, Help + Social/Logos */}
          <div className="col-lg-6">
            <div className="row">
              <div className="col-4">
                <h6 className="text-uppercase fw-bold mb-3">Explore</h6>
                <p className="mb-1 small">India Services</p>
                <p className="mb-1 small">IRCTC Agent</p>
                <p className="mb-1 small">No. 1 B2B</p>
              </div>
              <div className="col-4">
                <h6 className="text-uppercase fw-bold mb-3">Company</h6>
                <p className="mb-1 small">About Us</p>
                <p className="mb-1 small">GST/ MSME Certified</p>
                <p className="mb-1 small">Career</p>
              </div>
              <div className="col-4">
                <h6 className="text-uppercase fw-bold mb-3">Help</h6>
                <p className="mb-1 small">Privacy Policy</p>
                <p className="mb-1 small">Terms & Conditions</p>
                <p className="mb-1 small">Support</p>
              </div>
            </div>

            {/* Combined Social Media & Company Logos in one row */}
            <div className="mt-3 d-flex flex-wrap justify-content-center justify-content-md-between align-items-center ">
              {/* Social Media Icons */}
              <div className="d-flex gap-2">
                <Link to="/linkedin">
                  <img
                    src={smedia1}
                    alt="LinkedIn"
                    width="50"
                    height="50"
                    style={{ borderRadius: "50%" }}
                  />
                </Link>
                <Link to="/instagram">
                  <img
                    src={smedia2}
                    alt="Instagram"
                    width="50"
                    height="50"
                    style={{ borderRadius: "50%" }}
                  />
                </Link>
                <Link to="/twitter">
                  <img
                    src={smedia3}
                    alt="Twitter"
                    width="50"
                    height="50"
                    style={{ borderRadius: "50%" }}
                  />
                </Link>
                <Link to="/facebook">
                  <img
                    src={smedia4}
                    alt="Facebook"
                    width="50"
                    height="50"
                    style={{ borderRadius: "50%" }}
                  />
                </Link>
                <Link to="/youtube">
                  <img
                    src={smedia5}
                    alt="YouTube"
                    width="50"
                    height="50"
                    style={{ borderRadius: "50%" }}
                  />
                </Link>
              </div>

              {/* Payment/Company Logos */}
              <div className="d-flex gap-3 flex-wrap justify-content-center">
                <img src={componislogo} alt="Paytm" height="50" />
              </div>
            </div>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="text-center mt-3 small text-muted">
          © 2025 SONACHALA Developers Pvt. Ltd.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
