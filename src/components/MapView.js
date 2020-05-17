import React from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";

const mapStyles = {
  width: "80%",
  height: "70%",
};

function MapView(props) {
  return (
    <Map
      google={props.google}
      zoom={2}
      style={mapStyles}
      initialCenter={{ lat: 0, lng: 0 }}
    />
  );
}

export default GoogleApiWrapper({
  apiKey: "YOUR_API_KEY",
})(MapView);
