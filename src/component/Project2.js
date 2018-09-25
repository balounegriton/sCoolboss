import React, { Component } from 'react';
import './Project.css';
import test from "../image/page.jpg"


class Project2 extends Component {
  render() {
    return (
      <div >
        {/* //////////////overlay 1 //////////////// */}
        <div className="overlay3" onClick={this.props.action}>
          <img src={test} className="page" alt="" />

        </div>
      </div>

    );
  }
}

export default Project2;
