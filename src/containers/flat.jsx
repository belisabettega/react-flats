import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectFlat } from '../actions';


class Flat extends Component {
  handleClick = () => {
    this.props.selectFlat(this.props.flat);
  }

  render() {
    const flatstyle = {
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url(${this.props.flat.imageUrl})`
    }

    let classes = "card";
    if (this.props.flat === this.props.selectedFlat) {
      classes = "card active";
    }
    return(
      <div 
       className={classes}
       style={flatstyle}
       onClick={this.handleClick}
      >
        <div className="card-category">
          {this.props.flat.price} {this.props.flat.priceCurrency}
        </div>
        <div className="card-description">
          {this.props.flat.name}
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { selectFlat: selectFlat },
    dispatch
  );
}

function mapStateToProps(state) {
  return {
    selectedFlat: state.selectedFlat
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Flat);