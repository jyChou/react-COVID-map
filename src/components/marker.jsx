import React, { Component } from "react";
import { Marker, InfoWindow } from "react-google-maps";

class LocationMarker extends Component {
  state = { isOpen: false };

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
                <p>test</p>
                <p>test</p>
                <butto onClick={this.props.onClick}> Click</butto>
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
