import { React, Component } from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";
const mapStyles = {
  width: "100%",
  height: "100%",
  marginLeft: "250px",
};
class MapGps extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stores: [
        { lat: 31.896237855205005, lng: 34.83510240533413 },
        { latitude: 32.0008390165097, longitude: 34.98354656899768 },
        { latitude: 31.432220321956944, longitude: 34.85583054157546 },
        { latitude: 31.714775219631207, longitude: 35.20739301564262 },
        { latitude: 32.71092493703369, longitude: 35.039193161276465 },
        { latitude: 32.23850366479179, longitude: 34.95486453995891 },
      ],
    };
  }

  displayMarkers = () => {
    return this.state.stores.map((store, index) => {
      return (
        <Marker
          key={index}
          id={index}
          position={{
            lat: store.latitude,
            lng: store.longitude,
          }}
          onClick={() => console.log("You clicked me!")}
        />
      );
    });
  };

  render() {
    return (
      <Map
        google={this.props.google}
        zoom={8}
        style={mapStyles}
        initialCenter={{ lat: 31.444, lng: 35.456 }}
      >
        {this.displayMarkers()}
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyD1zH7rJMyq4QMtN2u0PEZKimQ - VTZyv4E",
})(MapGps);
