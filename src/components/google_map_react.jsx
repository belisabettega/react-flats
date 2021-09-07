import React, {Component} from "react";
import GoogleMapReact from 'google-map-react';
import Marker from './marker';

class GoogleMap extends Component {
  render(){
    const defaultProps = {
      center: {
        lat: this.props.lat,
        lng: this.props.lng
      },
      zoom: 11
    };
    return (
      <div className="map-container">
        <GoogleMapReact
          bootstrapURLKeys={{ key: "" }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          <Marker
            lat={this.props.lat}
            lng={this.props.lng}
          />
        </GoogleMapReact>
      </div>
    );

  }
}

export default GoogleMap