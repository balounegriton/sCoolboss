import React, { Component } from 'react';
import Lottie from 'react-lottie';
import * as backgroundAnimation from './svgFiles/backgroundAnimation.json'


class  Backgroubnd extends Component {

 
  render() {

 
    const defaultOptions = {
      loop: true,
      autoplay: true, 
      animationData: backgroundAnimation,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };
 
    return <div>
      <Lottie options={defaultOptions}/>
    </div>
  }
}

export default Backgroubnd;
