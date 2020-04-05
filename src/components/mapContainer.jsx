import React, { Component } from "react";
import Map from "./map.jsx";

class MapContainer extends Component {
  render() {
    return (
      <div style={{ height: "100vw", width: "100%" }}>
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
    );
  }
}

export default MapContainer;
