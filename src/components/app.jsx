import React, { Component } from 'react';
import FlatList from './flat_list'
import flats from '../../data/flats.js'
import GoogleMap from './google_map_react';

class App extends Component {
  render(){
    return <div>
      < FlatList flats={flats} />
      < GoogleMap />
    </div>
  }
}


export default App