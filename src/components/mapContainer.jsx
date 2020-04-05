import React, { Component } from "react";
import Map from "./map.jsx";
import LineChartWindow from "./lineChartWindow";

class MapContainer extends Component {
  state = {
    marker_id: false,
  };
  handleOnClick = (id) => {
    this.setState({ marker_id: id });
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
            onClick={this.handleOnClick}
          />
        </div>
        {this.state.marker_id ? (
          <LineChartWindow
            data={this.props.cases}
            id={this.state.marker_id}

            onClick={() => {this.handleOnClick(0)}}
          />
        ) : (
          ""
        )}
      </>
    );
  }
}

export default MapContainer;
