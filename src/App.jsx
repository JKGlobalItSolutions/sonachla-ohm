import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import './App.css';

import Home from './pages/Home';
import Agent from './pages/Agent';
import Hotelpatner from './pages/Hotelpatner';
import Listyourhotel from './pages/Listyourhotel';
import Agreementform from './pages/Agreementform';
import Flightform from './pages/FlightForm';
import BusForm from './pages/BusForm';
import EventForm from './pages/EventForm';
import CabForm from './pages/CabForm';

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/Agent" element={<Agent />} />
        <Route path="/Hotel-patner" element={<Hotelpatner />} />
        <Route path="/List-your-hotel" element={<Listyourhotel />} />
        <Route path="/Agreement-form" element={<Agreementform />} />
        <Route path="/flight-form" element={<Flightform />} />
        <Route path="/Bus-form" element={<BusForm />} />
        <Route path="/Event-form" element={<EventForm />} />
        <Route path="/Cab-form" element={<CabForm />} />




        

       



      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
