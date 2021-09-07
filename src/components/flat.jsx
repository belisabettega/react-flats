import React, { Component } from 'react';

class Flat extends Component {
  handleClick = () => {
    this.props.selectFlat(this.props.index);
  }

  render() {
    const flatstyle = {
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url(${this.props.flat.imageUrl})`
    }
    return(
      <div 
       className={this.props.selected? "card active" : "card"} 
       style={flatstyle}
      >
        <div className="card-category">
          {this.props.flat.price} {this.props.flat.priceCurrency}
        </div>
        <div className="card-description">
          {this.props.flat.name}
        </div>
        <a href="#" className="card-link" onClick={this.handleClick} ></a>
      </div>
    );
  }
}

export default Flat;