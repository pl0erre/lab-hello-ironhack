import React, {Component} from 'react';
import '../css/Content.css';

class Content extends Component {
  render() {
    return(
      <div className="container">
        {this.props.children}
      </div>
    );
  }
}

export default Content;