import React, { Component } from 'react';
import './Project.css';



class Project1 extends Component {

  render() {
    return (
      <div >
        {/* //////////////overlay 1 //////////////// */}
        <div className="flex">

          <div className="overlay" onClick={this.props.action}>
          </div>

          <div className="overlay2">




            <div className="a"> s</div>
            <div className="a"> s</div>
            <div className="a"> s</div>
            <div className="a"> s</div>
          </div>

       

        </div>
      </div>

    );
  }
}

export default Project1;
