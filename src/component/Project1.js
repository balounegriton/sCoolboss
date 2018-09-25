import React, { Component } from 'react';
import './Project.css';
import ReactHover from 'react-hover'
import image1 from '../image/1.jpg'
const optionsCursorTrueWithMargin = {
  followCursor: true,
  shiftX:0,
  shiftY:-500
}

class Project1 extends Component {

  render() {
    return (
      <div >
        {/* //////////////overlay 1 //////////////// */}
        <div className="flex">

          <div className="overlay" onClick={this.props.action}>
          </div>

          <div className="overlay2">


<ReactHover options={optionsCursorTrueWithMargin}>
<ReactHover.Trigger type='trigger'>
<h1 style={{background: '#abbcf1', width: '200px'}}> Hover o
</h1>
</ReactHover.Trigger>
<ReactHover.Hover type='hover'>
<div className="reactHover"> 
<img  className="img8" src={image1}  alt="" />
</div>
</ReactHover.Hover>
</ReactHover>

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
