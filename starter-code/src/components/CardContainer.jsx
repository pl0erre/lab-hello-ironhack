import React, {Component} from 'react';
import '../css/CardContainer.css';

class CardContainer extends Component {
  render() {
    return(
      <div className="cardContainer">
        {this.props.children}
      </div>
    );
  }
}

export default CardContainer;
