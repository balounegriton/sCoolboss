import React, { Component } from 'react';
import '../App.css';
import logo from '../image/page.jpg'

class Project1 extends Component {
  render() {
    return (
      <div >
        {/* //////////////overlay 1 //////////////// */}
        <div className="overlay">
          <div >
            <img className="imagetest" src={logo} onClick={this.props.action} />
          </div>
        </div>
      </div>

    );
  }
}

export default Project1;
