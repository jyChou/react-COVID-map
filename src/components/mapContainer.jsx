import React, { Component } from "react";
import Map from "./map.jsx";
import { Line } from "react-chartjs-2";

class MapContainer extends Component {
  state = {
    data: {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          label: "My First dataset",
          fill: false,
          lineTension: 0.1,
          backgroundColor: "rgba(75,192,192,0.4)",
          borderColor: "rgba(75,192,192,1)",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "rgba(75,192,192,1)",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgba(75,192,192,1)",
          pointHoverBorderColor: "rgba(220,220,220,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [65, 59, 80, 81, 56, 55, 40],
        },
      ],
    },
  };
  render() {
    return (
      <>
        <div style={{ height: "100%", width: "100%", position: "absolute" }}>
          <Map
            googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}
            loadingElement={<div style={{ height: "100%" }} />}
            containerElement={<div style={{ height: "100%" }} />}
            mapElement={<div style={{ height: "100%" }} />}
            cases={this.props.cases}
            defaultLat={this.props.defaultLat}
            defaultLng={this.props.defaultLng}
          />
        </div>
        <div
          style={{
            position: "fixed",
            bottom: 0,
            left: 0,
            width: 500,
            height: 300,
          }}
        >
          <Line data={this.state.data} options={{maintainAspectRatio: false}}/>
        </div>
      </>
    );
  }
}

export default MapContainer;
