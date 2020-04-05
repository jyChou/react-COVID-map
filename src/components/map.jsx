import React from "react";
import { withGoogleMap, GoogleMap } from "react-google-maps";
import withScriptjs from "react-google-maps/lib/withScriptjs";
import mapStyle from "../mapStyle.js";
import LocationMarker from "./marker";

const Map = withScriptjs(
  withGoogleMap((props) => {
    const markers = props.cases.map((c) => (
      <LocationMarker
        key={c.id}
        lat={c.lat}
        lng={c.lng}
        onClick={()=> props.onClick(c.id)}
      />
    ));

    return (
      <GoogleMap
        defaultZoom={14}
        center={{ lat: props.defaultLat, lng: props.defaultLng }}
        defaultOptions={{ styles: mapStyle }}
      >
        {markers}
      </GoogleMap>
    );
  })
);

export default Map;

// export class Map extends Component {
//   state = {
//     selectedLat: null,
//     selectedLng: null,
//     defaultLat: 40.756795,
//     defaultLng: -74.005974,
//   };

//   render() {
//     const GoogleMapExample = withScriptjs(
//       withGoogleMap((props) => (
//         <GoogleMap
//           defaultCenter={{
//             lat: this.state.defaultLat,
//             lng: this.state.defaultLng,
//           }}
//           defaultZoom={10}
//           defaultOptions={{ styles: mapStyle }}
//         >
//           {caseData.cases.map((c) => (
//             <Marker
//               key={c.id}
//               position={{
//                 lat: c.geomety.coordinates[1],
//                 lng: c.geomety.coordinates[0],
//               }}
//               onClick={() => {
//                 this.setState({
//                   selectedLat: c.geomety.coordinates[1],
//                   selectedLng: c.geomety.coordinates[0],
//                   defaultLat: c.geomety.coordinates[1],
//                   defaultLng: c.geomety.coordinates[0],
//                 });
//               }}
//             />
//           ))}

//           {this.state.selectedLat && (
//             <InfoWindow
//               position={{
//                 lat: this.state.selectedLat,
//                 lng: this.state.selectedLng,
//               }}
//             >
//               <div>test</div>
//             </InfoWindow>
//           )}
//         </GoogleMap>
//       ))
//     );

//     return (
//       <div style={{ height: "100vw", width: "100%" }}>
//         <GoogleMapExample
//           googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}
//           loadingElement={<div style={{ height: "100%" }} />}
//           containerElement={<div style={{ height: "100%" }} />}
//           mapElement={<div style={{ height: "100%" }} />}
//         />
//       </div>
//     );
//   }
// }
