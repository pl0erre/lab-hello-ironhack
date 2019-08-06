import React, { Component } from 'react';
import '../css/Button.css';

class Button  extends Component {
  render () {
    return (
      <button className="App-button">{this.props.name}
      </button>
    );
  }
}

export default Button;