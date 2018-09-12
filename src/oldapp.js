import React, { Component } from 'react';
import './ScollSpeed.js';
import './App.css';
import image1 from './image/1.jpg'
import image2 from './image/2.png'
import HoverImage from "react-hover-image"





class App extends Component {

  test = () => {
   console.log("allo")

  }
  render() {

    return (
      <div>

        {/* ////////// image 1 Landing page */}

        <div className="content">

          <div className="wrapper ">
            <div className="box" data-scroll-speed="10">
     
            <img src={image1} className="image1" alt="" onClick={this.test}/>
             
            </div>
          </div>

        </div>

        {/* ////////// image 2 projet */}
        <div className="content">

          <div className="wrapper ">
            <div className="box" data-scroll-speed="1">
              <img src={image2} className="image2" alt="" onClick={this.test}/>
            </div>

          </div>
        </div>



      </div>

    );
  }
}

export default App;

///////
.content {
  height: 19000px;
  }
  .wrapper {
  display: -webkit-box;
  display: -moz-box;
  /* display: box; */
  display: -webkit-flex;
  display: -moz-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -moz-box-pack: center;
  box-pack: center;
  -webkit-justify-content: center;
  -moz-justify-content: center;
  -ms-justify-content: center;
  -o-justify-content: center;
  justify-content: center;
  -ms-flex-pack: center;
  -webkit-box-align: center;
  -moz-box-align: center;
  box-align: center;
  height: 100vh;
  width: 100%;
  position: fixed;
  top: 0px;
  left: 0px;
  }
  
  .box {
  -webkit-box-flex: none;
  -moz-box-flex: none;
  box-flex: none;
  -webkit-flex: none;
  -moz-flex: none;
  -ms-flex: none;
  flex: none;
  
  }

/* /////////////// hover /////////////////////////////// */

.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: .5s ease;
  background-color: #008CBA;
}
.container {
  position: relative;
  width: 50%;
  
}

.container:hover .overlay {
  opacity: 1;
}


.text {
  color: white;
  font-size: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
}