import React from 'react';
import BarGraph from './barGraph';
import RadarGraph from './radarGraph';
import './App.css'; 

const App = () => {
  return (
    <>
    <div className="container">
      <div className="box">
        <BarGraph />
      </div>
      <div className="box">
          <RadarGraph />
        </div>
    </div>
    </>
  );
};

export default App;
