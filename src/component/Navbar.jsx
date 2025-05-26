

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Link } from "react-router-dom";

import {
  FaHotel,
  FaPlane,
  FaBus,
  FaUniversity,
  FaGlassCheers,
  FaMapMarkerAlt,
  FaGift,
  FaPoundSign,
  FaTools,
  FaUsers,
  FaRegLightbulb,
} from "react-icons/fa";

import logo from "../assets/image/componetimsges/logo.png";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark"
      style={{ backgroundColor: "#038A5E" }}
    >
      <div className="container-fluid">
        {/* Logo */}
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="Logo" width="180" height="80" />
        </Link>

        {/* Mobile toggler only shows on small screens */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        {/* Menu items collapse on small screens only */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto d-flex flex-wrap gap-4">
            {/* Hotel Dropdown */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-white d-flex flex-column align-items-center"
                href="#"
                id="hotelDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <FaHotel />
                <span className="small fw-semibold mt-1">Hotel & HomeStays</span>
              </a>
              <ul className="dropdown-menu" aria-labelledby="hotelDropdown">
                <li>
                  <Link to="/" className="dropdown-item">
                    Booking
                  </Link>
                </li>
                <li>
                  <Link to="/List-your-hotel" className="dropdown-item">
                    List Your Hotel
                  </Link>
                </li>
                <li>
                  <Link to="/Hotel-patner" className="dropdown-item">
                    Hotel Partner
                  </Link>
                </li>
                <li>
                  <Link to="/Agent" className="dropdown-item">
                    Agent
                  </Link>
                </li>

                {/* 

                <li><Link to="https://y-spot-user.web.app/" className="dropdown-item">ohm Hotel</Link></li>
                <li><Link to="https://y-spot-user.web.app/about" className="dropdown-item">ohm about Us</Link></li> */}
              </ul>
            </li>

            {/* Main items */}
            {[
              { icon: <FaPlane />, label: "Flight", path: "/flight-form" },
              { icon: <FaBus />, label: "Bus", path: "/Bus-form" },
              { icon: <FaUniversity />, label: "Hall" },
              { icon: <FaGlassCheers />, label: "Event", path: "/Event-form" },
              { icon: <FaMapMarkerAlt />, label: "Car", path: "/Cab-form" },
              {
                icon: <FaGift />,
                label: "Holiday Package",
                path: "/Holida-form",
              },

              // { icon: <FaPoundSign />, label: "Forex", path: "/Forex-form" },

              { icon: <FaTools />, label: "Support", path: "/Support-form" },
            ].map((item, idx) => (
              <li className="nav-item text-center" key={idx}>
                {item.path ? (
                  <Link
                    to={item.path}
                    className="nav-link text-white d-flex flex-column align-items-center"
                  >
                    {item.icon}
                    <span className="small fw-semibold mt-1">{item.label}</span>
                  </Link>
                ) : (
                  <a
                    href="#"
                    className="nav-link text-white d-flex flex-column align-items-center"
                  >
                    {item.icon}
                    <span className="small fw-semibold mt-1">{item.label}</span>
                  </a>
                )}
              </li>
            ))}

            {/* Solutions Dropdown */}
            <li className="nav-item dropdown text-center">
              <a
                className="nav-link dropdown-toggle text-white d-flex flex-column align-items-center"
                href="#"
                id="solutionsDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <FaRegLightbulb />
                <span className="small fw-semibold mt-1">Solutions</span>
              </a>
              <ul className="dropdown-menu" aria-labelledby="solutionsDropdown">
                <li>
                  <Link className="dropdown-item" to="/Centralreseve">
                    Central Reserve
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/PmsConnect">
                    PMS Connect
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/ReserveBackend">
                    Reserve Backend
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/Revenuemanage">
                    Revenue Manage
                  </Link>
                </li>
              </ul>
            </li>

            {/* Booking Dropdown */}

            {/* <li className="nav-item dropdown text-center">
              <a
                className="nav-link dropdown-toggle text-white d-flex flex-column align-items-center"
                href="#"
                id="bookingDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <FaUsers />
                <span className="small fw-semibold mt-1">Booking</span>
              </a>
              <ul className="dropdown-menu" aria-labelledby="bookingDropdown">
                <li><Link className="dropdown-item" to="/Searchbookings">Search Booking</Link></li>
                <li><Link className="dropdown-item" to="/CustomerSignin">Sign In</Link></li>
                <li><Link className="dropdown-item" to="/SignupForm">Sign Up</Link></li>
              </ul>
            </li>
             */}
          </ul>

          {/* Auth Buttons */}
          <div className="d-flex gap-4 mt-3 mt-lg-0">
            <button className="btn btn-light fw-semibold px-3">Register</button>
            <button className="btn btn-outline-light fw-semibold px-3">
              Sign in
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
