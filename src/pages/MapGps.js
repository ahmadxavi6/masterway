import { React, Component } from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";
import axios from "axios";
import { toast } from "react-toastify";
const API = "https://masterway.herokuapp.com";

const mapStyles = {
  width: "100%",
  height: "100%",
};

class MapGps extends Component {
  componentDidMount() {
    axios
      .get(`${API}/map`)
      .then((resp) => {
        console.log(resp.data);
        this.setState({ stores: resp.data });
        console.log(this.state);
      })
      .catch((err) => toast.error("There is a problem in the server"));
    this.interval = setInterval(
      () => {
        axios
          .get(`${API}/map`)
          .then((resp) => {
            this.setState({ stores: resp.data });
          })
          .catch((err) => toast.error("There is a problem in the server"));
      },

      60000
    );
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }
  constructor(props) {
    super(props);

    this.state = { stores: [] };
  }

  displayMarkers = () => {
    return this.state.stores.map((item, index) => {
      return (
        <Marker
          key={index}
          id={index}
          position={{
            lat: item.location.Lati,
            lng: item.location.Long,
          }}
          onClick={() => {
            toast.success(item.vehcile + " " + "(" + item.fName + ")");
          }}
        />
      );
    });
  };

  render() {
    return (
      <div className="map">
        <Map
          google={this.props.google}
          zoom={8}
          style={mapStyles}
          initialCenter={{ lat: 31.444, lng: 35.456 }}
        >
          {this.displayMarkers()}
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyB5KYAd3mdYB4GK9sM_ZthVSKIudYJBvTk",
})(MapGps);
