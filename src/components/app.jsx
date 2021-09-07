import React, { Component } from 'react';
import FlatList from './flat_list'
import flats from '../../data/flats.js'
import GoogleMap from './google_map_react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lat: 10.99835602,
      lng: 77.01502627
    };
  }
  centerMap = (lat, lng) => {
    this.setState({
      lat: lat,
      lng: lng
    });

  }
  render(){
    return <div>
      < FlatList flats={flats} mapFunction={this.centerMap}/>
      < GoogleMap lat={this.state.lat} lng={this.state.lng} />
    </div>
  }
}


export default App