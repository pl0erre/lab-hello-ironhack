import React, {Component} from 'react';
import menuTop from '../images/menu-top.svg';
import ironhackLogo from '../images/ironhack-logo.svg'
import '../css/Nav.css';

class Nav extends Component {
  render() {
    return (
      <nav className="App-nav">
        <img src={ironhackLogo} alt="ironhack-logo" />
        <img src={menuTop} alt="menu-top" />
      </nav>
    );
  }
}

export default Nav;

