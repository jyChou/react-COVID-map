import React, { Component } from "react";
import Map from "./map.jsx";
import LineChartWindow from "./lineChartWindow";
import Loading from "./loading";

class MapContainer extends Component {
  state = {
    marker_id: 0,
    loading: true,
    defaultLat: 38.68550976,
    defaultLng: -99.79980469,
  };
  handleOnClick = (id) => {
    
    const c = this.props.cases.filter((c) => c.id === id);
    this.setState({
      marker_id: c[0].id,
      defaultLat: c[0].lat,
      defaultLng: c[0].lng,
    });
    console.log("marker id:"+this.state.marker_id);
    console.log("id:"+id);
  };

  handleClose = () => {
    this.setState({ marker_id: 0 });
  };
  componentDidMount = () => {
    console.log("close loading page!");
    this.setState({ loading: false });
  };
  render() {
    return (
      <>
        <div style={{ height: "100%", width: "100%", position: "absolute" }}>
          {this.state.loading ? <Loading /> : ""}
          <Map
            googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}
            loadingElement={<div style={{ height: "100%" }} />}
            containerElement={<div style={{ height: "100%" }} />}
            mapElement={<div style={{ height: "100%" }} />}
            cases={this.props.cases}
            defaultLat={this.state.defaultLat}
            defaultLng={this.state.defaultLng}
            onClick={this.handleOnClick}
          />
        </div>
        {this.state.marker_id ? (
          <LineChartWindow
            key={this.state.marker_id}
            data={this.props.cases}
            id={this.state.marker_id}
            onClick={() => {
              this.handleClose();
            }}
          />
        ) : (
          ""
        )}
      </>
    );
  }
}

export default MapContainer;
