import React, { useState } from 'react';

const Flightform = () => {
  const [activeTab, setActiveTab] = useState('oneWay');
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);

  const handleCountChange = (setter, value) => {
    if (value >= 0) setter(value);
  };

  const handleSearch = () => {
    console.log('Searching Flights...', {
      tripType: activeTab,
      adults,
      children,
      infants,
    });
    alert(`Searching ${activeTab} flights...`);
  };

  const InputGroup = ({ label, value, setValue }) => (
    <div className="d-flex align-items-center gap-2">
      <label className="fw-medium">{label}</label>
      <button
        className="btn btn-outline-secondary btn-sm"
        onClick={() => handleCountChange(setValue, value - 1)}
        disabled={value <= 0}
      >
        -
      </button>
      <span className="fw-bold">{value}</span>
      <button
        className="btn btn-outline-secondary btn-sm"
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
        <input type="text" className="form-control" placeholder="City or Airport" />
      </div>
      <div className="col-md-4">
        <label className="form-label">To</label>
        <input type="text" className="form-control" placeholder="City or Airport" />
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

  return (
    <div className="container py-5" style={{ backgroundColor: '#e0f2f1', minHeight: '100vh' }}>
      <div className="bg-white p-4 rounded shadow">
        {/* Tabs */}
        <ul className="nav nav-tabs mb-4">
          {['oneWay', 'roadTrip', 'multiCity'].map(tab => (
            <li className="nav-item" key={tab}>
              <button
                className={`nav-link ${activeTab === tab ? 'active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab === 'oneWay' ? 'One Way' : tab === 'roadTrip' ? 'Road Trip' : 'Multi City'}
              </button>
            </li>
          ))}
        </ul>

        {/* Form Sections */}
        {activeTab === 'multiCity' ? (
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

        {/* Search Button */}
        <div className="text-end">
          <button className="btn btn-lg btn-success px-4" onClick={handleSearch}>
            🔍 Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Flightform;
