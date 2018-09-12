import React, { Component } from 'react';
import './ScollSpeed.js';
import './App.css';
import image1 from './image/1.jpg'
import image2 from './image/2.jpg'
import image3 from './image/3.jpg'
import image4 from './image/4.jpg'
import image5 from './image/5.jpg'
import image6 from './image/6.jpg'
import image7 from './image/7.jpg'
import image8 from './image/8.jpg'
import image9 from './image/9.jpg'


class App extends Component {

  render() {

    return (
      <div className="content" >

        {/* ////////// image 1 Landing page */}

        <div className="content">
          <div className="wrapper ">
            <div className="box" data-scroll-speed="1">
              <img src={image1} className="image1" alt="" />
            </div>
          </div>


        </div>

        {/* ////////// image 2 projet */}
        <div className="content">

          <div className="wrapper ">
            <div className="box" data-scroll-speed="3">
              <img src={image2} className="image2" alt="" />
            </div>

          </div>
        </div>


        {/* ////////// image 3 projet */}
        <div className="content">

          <div className="wrapper ">
            <div className="box" data-scroll-speed="5">
              <img src={image3} className="image3" alt="" />
            </div>

          </div>
        </div>

        {/* ////////// image 4 projet */}
        <div className="content">

          <div className="wrapper ">
            <div className="box" data-scroll-speed="1">
              <img src={image4} className="image4" alt="" />
            </div>

          </div>
        </div>

        {/* ////////// image 5 projet */}
        <div className="content">

          <div className="wrapper ">
            <div className="box" data-scroll-speed="1">
              <img src={image5} className="image5" alt="" />
            </div>

          </div>
        </div>


        {/* ////////// image 6 projet */}
        <div className="content">

          <div className="wrapper ">
            <div className="box" data-scroll-speed="5">
              <img src={image6} className="image6" alt="" />
            </div>

          </div>
        </div>


        {/* ////////// image 7 projet */}
        <div className="content">

          <div className="wrapper ">
            <div className="box" data-scroll-speed="1">
              <img src={image7} className="image7" alt="" />
            </div>

          </div>
        </div>

        {/* ////////// image 8 projet */}
        <div className="content">

          <div className="wrapper ">
            <div className="box" data-scroll-speed="5 ">
              <img src={image8} className="image8" alt="" />
            </div>

          </div>
        </div>


        {/* ////////// image 9 projet */}
        <div className="content">

          <div className="wrapper ">
            <div className="box" data-scroll-speed="10">
              <img src={image9} className="image9" alt="" />
            </div>

          </div>
        </div>


        {/* ///////////// dernier div a laisser \\\\\\\\\\\\\\ */}

      </div>

    );
  }
}

export default App;
