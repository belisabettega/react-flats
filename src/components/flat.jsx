import React, { Component } from 'react';

class Flat extends Component {
  render() {
    const flatstyle = {
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url(${this.props.url})`
    }
    return(
      <div className="card" style={flatstyle} >
        <div className="card-category">
          {this.props.price} {this.props.currency}
        </div>
        <div className="card-description">
          {this.props.name}
        </div>
        <a href="#" className="card-link"></a>
      </div>
    );
  }
}

export default Flat