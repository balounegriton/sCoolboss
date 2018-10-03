import React, { Component } from 'react';
import Lottie from 'react-lottie';
import * as animationData from '/Users/noeprovost/Desktop/sCoolboss/src/pinjump.json'


class Project2 extends Component {
  constructor(props) {
    super(props);
    this.state = {isStopped: false, isPaused: false};
  }
 
  render() {

 
    const defaultOptions = {
      loop: true,
      autoplay: true, 
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };
 
    return <div>
      <Lottie options={defaultOptions}/>
    </div>
  }
}

export default Project2;
