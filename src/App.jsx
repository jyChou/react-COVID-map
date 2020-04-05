import React, { Component } from "react";
import "./App.css";
import MapContainer from "./components/mapContainer";
import * as caseData from "./data/case.json";
import {Line} from 'react-chartjs-2';

const options = {
  responsive: true,
  maintainAspectRatio: false,
  layout: {
      padding: {
          top: 5,
          left: 15,
          right: 15,
          bottom: 15
      },
      position: 'fixed'
  }
}
class App extends Component {
  state = {
    selectedLat: null,
    selectedLng: null,
    defaultLat: 40.756795,
    defaultLng: -74.005974,
    marker_id: null,
    data: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'My First dataset',
          fill: false,
          lineTension: 0.1,
          backgroundColor: 'rgba(75,192,192,0.4)',
          borderColor: 'rgba(75,192,192,1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(75,192,192,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(75,192,192,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [65, 59, 80, 81, 56, 55, 40]
        }
      ]
    }
  };
  render() {
    return (
      <div className="App">
        <MapContainer
          cases={caseData.cases}
          defaultLat={this.state.defaultLat}
          defaultLng={this.state.defaultLng}
        />
        <Line data={this.state.data}  option={options}/>
      </div>

    );
  }
}

export default App;
