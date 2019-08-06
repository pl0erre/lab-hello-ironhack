import React, {Component} from 'react';
import '../css/Card.css';

class Card extends Component {
  render() {
    return(
      <div className="singleCard">
        <img src={this.props.image} alt="foto" />
        <h3>{this.props.title}</h3>
        <p>{this.props.description}</p>
      </div>
      
    );
  }
}

export default Card;