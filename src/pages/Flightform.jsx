import React, { useState } from "react";

const Flightform = () => {
  const [activeTab, setActiveTab] = useState("oneWay");
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);

  const handleCountChange = (setter, value) => {
    if (value >= 0) setter(value);
  };

  const handleSearch = () => {
    alert(`Searching ${activeTab} flights...`);
  };

  const InputGroup = ({ label, value, setValue }) => (
    <div className="d-flex align-items-center gap-2">
      <label className="fw-medium">{label}</label>
      <button
        className="btn btn-success btn-sm"
        onClick={() => handleCountChange(setValue, value - 1)}
        disabled={value <= 0}
      >
        -
      </button>
      <span className="fw-bold">{value}</span>
      <button
        className="btn btn-success btn-sm"
        onClick={() => handleCountChange(setValue, value + 1)}
      >
        +
      </button>
    </div>
  );

  const FlightInputs = () => (
    <div className="row mb-3">
      <div className="col-md-4">
        <label className="form-label">From</label>
        <input
          type="text"
          className="form-control"
          placeholder="City or Airport"
        />
      </div>
      <div className="col-md-4">
        <label className="form-label">To</label>
        <input
          type="text"
          className="form-control"
          placeholder="City or Airport"
        />
      </div>
      <div className="col-md-4">
        <label className="form-label">Date</label>
        <input type="date" className="form-control" />
      </div>
    </div>
  );

  const PassengerSection = () => (
    <div className="d-flex flex-wrap gap-4 mb-4">
      <InputGroup label="Adults" value={adults} setValue={setAdults} />
      <InputGroup label="Children" value={children} setValue={setChildren} />
      <InputGroup label="Infants" value={infants} setValue={setInfants} />
    </div>
  );

  const tabColors = {
    oneWay: "#e6f4ea", // Light pastel green
    roadTrip: "#fff7da", // Light pastel yellow
    multiCity: "#e5f0ff", // Light pastel blue
  };

  return (
    



    <div
      className="container py-5 p-5"
      style={{ backgroundColor: "#e0f2f1", minHeight: "100vh"}}
    >
      {/* Tab Buttons Styled Section */}
      <div
        className="d-flex justify-content-around mb-4 p-2"
        style={{
          background: "linear-gradient(to right, #b2dfdb, #a5d6a7)", // Green gradient
          borderRadius: "10px",
          border: "2px solid #4caf50",
        }}
      >
        {["oneWay", "roadTrip", "multiCity"].map((tab) => (
          <button
            key={tab}
            className={`btn px-4 py-2 fw-semibold ${
              activeTab === tab
                ? "btn-light text-success"
                : "btn-outline-light text-dark"
            }`}
            onClick={() => setActiveTab(tab)}
            style={{
              backgroundColor: activeTab === tab ? "#ffffff" : "transparent",
              borderRadius: "6px",
              border: "none",
            }}
          >
            {tab === "oneWay"
              ? "One Way"
              : tab === "roadTrip"
              ? "Road Trip"
              : "Multi City"}
          </button>
        ))}
      </div>

      <div className="bg-white p-4 rounded shadow">
        {/* Search Button */}
        <div className="text-end mt-4">
          <button
            className="btn btn-lg btn-success px-4"
            onClick={handleSearch}
          >
            🔍 Search
          </button>
        </div>

        {/* Tabs */}
        {/* <ul className="nav nav-tabs mb-4">
          {['oneWay', 'roadTrip', 'multiCity'].map(tab => (
            <li className="nav-item" key={tab}>
              <button
                className={`nav-link mx-1 ${activeTab === tab ? 'active text-dark' : ''}`}
                onClick={() => setActiveTab(tab)}
                style={{
                  backgroundColor: tabColors[tab],
                  borderRadius: '6px',
                  fontWeight: '500',
                }}
              >
                {tab === 'oneWay' ? 'One Way' : tab === 'roadTrip' ? 'Road Trip' : 'Multi City'}
              </button>
            </li>
          ))}
        </ul> */}

        {/* Form Sections */}
        {activeTab === "multiCity" ? (
          <>
            <div className="mb-3">
              <button className="btn btn-outline-success me-2">Flight 1</button>
              <button className="btn btn-outline-success">Flight 2</button>
            </div>
            <FlightInputs />
            <FlightInputs />
            <PassengerSection />
          </>
        ) : (
          <>
            <FlightInputs />
            <PassengerSection />
          </>
        )}
      </div>
    </div>

    
  );
};

export default Flightform;
