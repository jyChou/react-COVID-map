import React, { Component } from "react";
import { Marker, InfoWindow } from "react-google-maps";

class LocationMarker extends Component {
  state = { isOpen: false };

  handleOpen = () => {
    const isOpen = !this.state.isOpen;
    this.setState({ isOpen });
  };

  render() {
    console.log(this.props.confirmed)
    const confirmed = this.props.confirmed.reduce((a,b)=>a+b);
    const death = this.props.death.reduce((a,b)=>a+b);
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
                <p>{`Confirmed:`}</p>
                <p>{confirmed}</p>
                <p>{`Death:`}</p>
                <p>{death}</p>
                <butto className="btn btn-primary" onClick={this.props.onClick}> Chart</butto>
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
