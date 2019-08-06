import React, {Component} from 'react';
import '../css/Header.css';

class Header extends Component {
  render() {
    return (
      <header className="App-header">
        {this.props.children}
      </header>
    );
  }
}

export default Header;

