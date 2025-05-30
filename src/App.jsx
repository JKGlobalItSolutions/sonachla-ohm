import React from "react";
import { useState } from "react";

import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import "./App.css";

import Home from "./pages/Home";
import Agent from "./pages/Agent";
import Hotelpatner from "./pages/Hotelpatner";
import Listyourhotel from "./pages/Listyourhotel";
import Agreementform from "./pages/Agreementform";
import Flightform from "./pages/FlightForm";
import BusForm from "./pages/BusForm";
import EventForm from "./pages/EventForm";
import CabForm from "./pages/CabForm";
import HolidayForm from "./pages/HolidayForm";
import ForexForm from "./pages/ForexForm";

import SupportForm from "./pages/SupportForm";
import Searchbookings from "./pages/Searchbookings";
import CustomerSignin from "./pages/CustomerSignin";
import SignupForm from "./pages/SignupForm";
import Centralreseve from "./pages/Centralreseve";
import PmsConnect from "./pages/PmsConnect";
import ReserveBackend from "./pages/ReserveBackend";
import Revenuemanage from "./pages/Revenuemanage";

//  coming soon popup
import ComingSoonPopup from "./pages/ComingSoonPopup";

function App() {
  // const [showPopup, setShowPopup] = useState(false);

  const [popupKey, setPopupKey] = useState(null);

  const showPopup = () => {
    setPopupKey(Date.now()); // Every call gets a unique value
  };

  const closePopup = () => {
    setPopupKey(null); // Hide the popup
  };

  return (
    <Router>
      <Navbar />

      {/* Coming Soon Popup here so it shows on every page */}

      {popupKey && <ComingSoonPopup key={popupKey} onClose={closePopup} />}

      <Routes>
        <Route path="/" element={<Home showPopup={showPopup} />} />

        <Route path="/Agent" element={<Agent />} />
        <Route path="/Hotel-patner" element={<Hotelpatner />} />
        <Route path="/List-your-hotel" element={<Listyourhotel />} />
        <Route path="/Agreement-form" element={<Agreementform />} />
        <Route path="/flight-form" element={<Flightform />} />
        <Route path="/Bus-form" element={<BusForm />} />
        <Route path="/Event-form" element={<EventForm />} />
        <Route path="/Cab-form" element={<CabForm />} />
        <Route path="/Holida-form" element={<HolidayForm />} />
        <Route path="/Forex-form" element={<ForexForm />} />
        <Route path="/Support-form" element={<SupportForm />} />
        <Route path="/Searchbookings" element={<Searchbookings />} />
        <Route path="/CustomerSignin" element={<CustomerSignin />} />
        <Route path="/SignupForm" element={<SignupForm />} />
        <Route path="/Centralreseve" element={<Centralreseve />} />
        <Route path="/PmsConnect" element={<PmsConnect />} />
        <Route path="/ReserveBackend" element={<ReserveBackend />} />
        <Route path="/Revenuemanage" element={<Revenuemanage />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
