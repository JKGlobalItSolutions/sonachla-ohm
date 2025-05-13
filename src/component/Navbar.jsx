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
      <div className="container-fluid d-flex flex-column p-0">
        {/* Logo Row */}
        <div className="w-100 d-flex align-items-center justify-content-start py-2">
          <Link to={"/"}>
            <img src={logo} alt="Logo" width="254" height="142" />
          </Link>
        </div>

        {/* Navigation + Auth Buttons */}
        <div className="w-100 d-flex flex-wrap align-items-center justify-content-between px-3 py-2">
          {/* Menu */}
          <ul className="navbar-nav d-flex flex-wrap gap-2 me-auto justify-content-center">
            {/* Dropdown: Hotel */}
            <li className="nav-item dropdown text-center">
              <a
                className="nav-link dropdown-toggle text-white d-flex flex-column align-items-center"
                href="#"
                id="hotelDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <FaHotel />
                <span className="small fw-semibold mt-1">Hotel</span>
              </a>
              <ul className="dropdown-menu" aria-labelledby="hotelDropdown">
                <li>
                  {" "}
                  <Link to="/Agent" className="dropdown-item">
                    {" "}
                    Agent{" "}
                  </Link>{" "}
                </li>

                <li>
                  {" "}
                  <Link to="/Hotel-patner" className="dropdown-item">
                    {" "}
                    Hotel Partner{" "}
                  </Link>{" "}
                </li>

                <li>
                  <Link to="/List-your-hotel" className="dropdown-item">
                    {" "}
                    List Your Hotel{" "}
                  </Link>{" "}
                </li>
              </ul>
            </li>

            {/* Simple Nav Items */}

            {[
              { icon: <FaPlane />, label: "Flight", path: "/flight-form" },
              { icon: <FaBus />, label: "Bus", path: "/Bus-form" },
              { icon: <FaUniversity />, label: "Venue" },
              { icon: <FaGlassCheers />, label: "Event", path: "/Event-form" },
              { icon: <FaMapMarkerAlt />, label: "Cab" , path: "/Cab-form" },
              { icon: <FaGift />, label: "Holiday Package" },
              { icon: <FaPoundSign />, label: "Forex" },
              { icon: <FaTools />, label: "Support" },
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
                    className="nav-link text-white d-flex flex-column align-items-center"
                    href="#"
                  >
                    {item.icon}
                    <span className="small fw-semibold mt-1">{item.label}</span>
                  </a>
                )}
              </li>
            ))}

            {/* Dropdown: Solutions */}
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
                  <a className="dropdown-item" href="#">
                    Enterprise
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    White Label
                  </a>
                </li>
              </ul>
            </li>

            {/* Dropdown: Booking */}
            <li className="nav-item dropdown text-center">
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
                <li>
                  <a className="dropdown-item" href="#">
                    My Bookings
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Manage Booking
                  </a>
                </li>
              </ul>
            </li>
          </ul>

          {/* Auth Buttons */}
          <div className="d-flex gap-2">
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
