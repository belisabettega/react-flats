import React, { Component } from 'react';
import Flat from './flat'

class FlatList extends Component {
  render() {

    return (
    <div className="flat-list">
      {this.props.flats.map((flat) => <Flat 
      key={flat.name}
      name={flat.name}
      url={flat.imageUrl}
      price={flat.price}
      currency={flat.priceCurrency}
      lat={flat.lat}
      lng={flat.lng}
      map={this.props.mapFunction}
      />)}
    </div>
  );
  }
}

export default FlatList