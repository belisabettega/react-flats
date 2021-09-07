import React, { Component } from 'react';

class Flat extends Component {
  constructor (props) {
    super(props);

    this.state = { clicked: false };
  }

  handleClick = () => {
    this.setState({
      clicked: !this.state.clicked
    });
    this.props.map(this.props.lat, this.props.lng);
  }

  render() {
    const flatstyle = {
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url(${this.props.url})`
    }
    return(
      <div 
       className={this.state.clicked? "card active" : "card"} 
       style={flatstyle} 
       onClick={this.handleClick} 
      >
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