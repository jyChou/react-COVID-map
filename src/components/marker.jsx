import React, { Component } from "react";
import { Marker, InfoWindow } from "react-google-maps";

class LocationMarker extends Component {
  state = {
    isOpen: false,
    confirmed: this.props.confirmed.reduce((a, b) => a + b),
    death: this.props.death.reduce((a, b) => a + b),
  };

  handleOpen = () => {
    const isOpen = !this.state.isOpen;
    this.setState({ isOpen });
  };

  render() {
    return (
      <Marker
        key={this.props.id}
        position={{
          lat: this.props.lat,
          lng: this.props.lng,
        }}
        onClick={this.handleOpen}
      >
        {this.state.isOpen && (
          <InfoWindow
            position={{
              lat: this.props.lat,
              lng: this.props.lng,
            }}
          >
            <div>
              <h6>{this.props.state_name}</h6>
              <p>{`Confirmed:`}</p>
              <p>{this.state.confirmed}</p>
              <p>{`Death:`}</p>
              <p>{this.state.death}</p>
              <button className="btn btn-primary" onClick={this.props.onClick}>
                {" "}
                Chart
              </button>
            </div>
          </InfoWindow>
        )}
      </Marker>
    );
  }
}

//   {this.state.selectedLat && (
//     <InfoWindow
//       position={{
//         lat: this.state.selectedLat,
//         lng: this.state.selectedLng,
//       }}
//     >
//       <div>test</div>
//     </InfoWindow>
//   )}

export default LocationMarker;
