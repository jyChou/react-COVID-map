import React, { Component } from "react";
import "./App.css";
import MapContainer from "./components/mapContainer";
import * as caseData from "./data/case.json";

class App extends Component {
  state = {
    selectedLat: null,
    selectedLng: null,
    defaultLat: 40.756795,
    defaultLng: -74.005974,
    marker_id: null,
    
  };
  render() {
    return (
      <div className="App">
        <MapContainer
          cases={caseData.cases}
          defaultLat={this.state.defaultLat}
          defaultLng={this.state.defaultLng}
        />
        
      </div>
    );
  }
}

export default App;
