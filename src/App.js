import React, { Component } from 'react';
import './ScollSpeed.js';
import './App.css';
import image1 from './image/1.jpg'
import image2 from './image/2.jpg'
import image3 from './image/3.jpg'






class App extends Component {
  constructor(props) {
    super(props);
    this.state = { x: 0, y: 0 };
  }

  _onMouseMove(e) {
    this.setState({ x: e.screenX, y: e.screenY });
  }

  test = () => {
    console.log("allo")

  }
  render() {
    const { x, y } = this.state;
    return (
      <div className="content" onMouseMove={this._onMouseMove.bind(this)}>

        {/* ////////// image 1 Landing page */}

        <div className="content">

          <div className="wrapper ">
            <div className="box" data-scroll-speed="20">

              <img src={image1} className="image1" alt="" onClick={this.test} />

            </div>
          </div>


        </div>

        {/* ////////// image 2 projet */}
        <div className="content">

          <div className="wrapper ">
            <div className="box" data-scroll-speed="5">
              <img src={image2} className="image2" alt="" onClick={this.test} />
            </div>

          </div>
        </div>


        {/* ////////// image 3 projet */}
        <div className="content">

          <div className="wrapper ">
            <div className="box" data-scroll-speed="1">
              <img src={image3} className="image3" alt="" onClick={this.test} />
            </div>

          </div>
        </div>

<div onMouseMove={this._onMouseMove.bind(this)}>
      <h1>Mouse coordinates: { x } { y }</h1>
    </div>;
      </div>

    );
  }
}

export default App;
