import React, { Component } from 'react';
import './ScollSpeed.js';
import './App.css';
import Project1 from './component/Project1.js'
import Project2 from './component/Project2.js'
import ReactHover from 'react-hover'


import image1 from './image/1.jpg'
import image2 from './image/2.jpg'
import image3 from './image/3.jpg'
import image4 from './image/4.jpg'
import image5 from './image/5.jpg'
import image6 from './image/6.jpg'
import image7 from './image/7.jpg'
import image8 from './image/8.jpg'
import image9 from './image/9.jpg'
import image10 from './image/10.jpg'

import imageHover2 from './image/hover-2.jpg'
import imageHover3 from './image/hover-3.jpg'
import imageHover4 from './image/hover-4.jpg'
import imageHover5 from './image/hover-5.jpg'
import imageHover6 from './image/hover-6.jpg'
import imageHover7 from './image/hover-7.jpg'
import imageHover8 from './image/hover-8.jpg'
import imageHover9 from './image/hover-9.jpg'




class App extends Component {
  constructor() {
    super();

    this.state = {
      bus: true,
      project: true,
      series: true,
      imgSrc: ["image0", "image1", image2, image3, image4, image5, image6, image7, image8, image9, image10],
      imgHover: ["image0", "image1", imageHover2, imageHover3, imageHover4, imageHover5, imageHover6, imageHover7, imageHover8, imageHover9, image1],

    };
  }


  handleMouseOver = (id, imgNumber) => {
    document.getElementById(id).src = this.state.imgHover[imgNumber]
  }



  handleMouseOut = (id, imgNumber) => {
    document.getElementById(id).src = this.state.imgSrc[imgNumber]
  }

  //////////////////// La function pour le navBar \\\\\\\\\\\\\\\\\\\\\\

  busNav = () => {

    if (this.state.project === false && this.state.series === false && this.state.bus === true) {
      this.setState({
        series: true,
        project: true,
        bus: true
      })
      document.getElementById("project").className = "texte "
      document.getElementById("series").className = "texte "
      document.getElementById("bus").className = "texte "
    }
    else if (this.state.project === true && this.state.series === true && this.state.bus === true) {
      this.setState({
        bus: false

      })
      document.getElementById("bus").className = "texte texteColor  "

    }
    else if (this.state.bus === false) {
      this.setState({ bus: true })
      document.getElementById("bus").className = "texte"
    }
    else {
      this.setState({ bus: false })
      document.getElementById("bus").className = "texte texteColor"
    }



  }


  projectNav = () => {

    if (this.state.project === true && this.state.series === false && this.state.bus === false) {
      this.setState({
        series: true,
        project: true,
        bus: true
      })
      document.getElementById("project").className = "texte "
      document.getElementById("series").className = "texte "
      document.getElementById("bus").className = "texte  "
    }
    else if (this.state.project === true && this.state.series === true && this.state.bus === true) {
      this.setState({
        project: false,
        

      })

      document.getElementById("project").className = "texte texteColor "
    }
    else if (this.state.project === false) {
      this.setState({ project: true })
      document.getElementById("project").className = "texte"
    }
    else {
      this.setState({ project: false })
      document.getElementById("project").className = "texte texteColor"
    }

  }

  seriesNav = () => {

    if (this.state.project === false && this.state.series === true && this.state.bus === false) {
      this.setState({
        series: true,
        project: true,
        bus: true
      })
      document.getElementById("project").className = "texte "
      document.getElementById("series").className = "texte "
      document.getElementById("bus").className = "texte "
    }
    else if (this.state.project === true && this.state.series === true && this.state.bus === true) {
      this.setState({
       series:false

      })
      document.getElementById("series").className = "texte texteColor "
    }
    else if (this.state.series === false) {
      this.setState({ series: true })
      document.getElementById("series").className = "texte"
    }
    else {
      this.setState({ series: false })
      document.getElementById("series").className = "texte texteColor"
    }

  }


  //////////////////// La function pour fermer tout les over de projet /\\\\\\\\\\\\\\\\\\\\\\

  closeOver = () => {
    this.setState({
      project1: false,
      project2: false,
      project3: false

    })
  }

  ////////////////////  function pour ouvrir les over de projet /\\\\\\\\\\\\\\\\\\\\\\

  openOver2 = () => {
    this.setState({
      project1: true
    })
  }
  openOver3 = () => {
    this.setState({
      project2: true
    })
  }

  render() {

    return (




      <div >
        {/* ////////////// Project overlay //////////////// */}
        {this.state.project1 && <Project1 action={this.closeOver} />}
        {this.state.project2 && <Project2 action={this.closeOver} />}



        {/* ////////////// navBar //////////////// */}
        <div className="navbar">
          <a id="bus" className="texte" onClick={this.busNav} >bus</a>
          <a id="project" className="texte" onClick={this.projectNav} >project</a>
          <a id="series" className="texte" onClick={this.seriesNav} >series</a>
          <a className="texte" onClick={this.openOver3}>+</a>
        </div>
        {/* ////////// image 1 Landing page */}
        <div  >

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
            <div className="box  imgHoverIndex z-indexImg2" data-scroll-speed="100">
              {this.state.bus &&
                <img id="img2" onMouseOver={() => this.handleMouseOver("img2", 2)} onMouseOut={() => this.handleMouseOut("img2", 2)} src={this.state.imgSrc[2]} className="image2" alt="" onClick={this.openOver2} />}
            </div>
          </div>
        </div>


        {/* ////////// image 3 projet */}
        <div className="content">
          <div className="wrapper  ">
            <div className="box imgHoverIndex z-indexImg3" data-scroll-speed="1">
              {this.state.series &&
                <img id="img3" onMouseOver={() => this.handleMouseOver("img3", 3)} onMouseOut={() => this.handleMouseOut("img3", 3)} src={this.state.imgSrc[3]} className="image3" alt="" />}
            </div>
          </div>
        </div>

        {/* ////////// image 4 projet */}
        <div className="content">
          <div className="wrapper ">
            <div className="box imgHoverIndex" data-scroll-speed="5">
              {this.state.project &&
                <img id="img4" onMouseOver={() => this.handleMouseOver("img4", 4)} onMouseOut={() => this.handleMouseOut("img4", 4)} src={this.state.imgSrc[4]} className="image4" alt="" />}
            </div>
          </div>
        </div>

        {/* ////////// image 5 projet */}
        <div className="content">
          <div className="wrapper ">
            <div className="box imgHoverIndex z-indexImg5" data-scroll-speed="1">
              {this.state.project &&
                <img id="img5" onMouseOver={() => this.handleMouseOver("img5", 5)} onMouseOut={() => this.handleMouseOut("img5", 5)} src={this.state.imgSrc[5]} className="image5" alt="" />}
            </div>
          </div>
        </div>


        {/* ////////// image 6 projet */}
        <div className="content">
          <div className="wrapper ">
            <div className="box imgHoverIndex" data-scroll-speed="500000">
              {this.state.series &&
                <img id="img6" onMouseOver={() => this.handleMouseOver("img6", 6)} onMouseOut={() => this.handleMouseOut("img6", 6)} src={this.state.imgSrc[6]} className="image6" alt="" />}
            </div>
          </div>
        </div>


        {/* ////////// image 7 projet */}
        <div className="content">
          <div className="wrapper ">
            <div className="box imgHoverIndex" data-scroll-speed="1">
              {this.state.bus &&
                <img id="img7" onMouseOver={() => this.handleMouseOver("img7", 7)} onMouseOut={() => this.handleMouseOut("img7", 7)} src={this.state.imgSrc[7]} className="image7" alt="" />
              }
            </div>
          </div>
        </div>

        {/* ////////// image 8 projet */}
        <div className="content">
          <div className="wrapper ">
            <div className="box imgHoverIndex" data-scroll-speed="500000 ">
              {this.state.project &&
                <img id="img8" onMouseOver={() => this.handleMouseOver("img8", 8)} onMouseOut={() => this.handleMouseOut("img8", 8)} src={this.state.imgSrc[8]} className="image8" alt="" />}
            </div>
          </div>
        </div>


        {/* ////////// image 9 projet */}
        <div className="content">
          <div className="wrapper ">
            <div className="box imgHoverIndex" data-scroll-speed="1">
              {this.state.bus &&
                <img id="img9" onMouseOver={() => this.handleMouseOver("img9", 9)} onMouseOut={() => this.handleMouseOut("img9", 9)} src={this.state.imgSrc[9]} className="image9" alt="" />
              }
            </div>
          </div>
        </div>


        {/* ////////// image 10 projet */}
        <div className="content">
          <div className="wrapper ">
            <div className="box imgHoverIndex" data-scroll-speed="10">
              {this.state.bus &&
                <img id="img10" onMouseOver={() => this.handleMouseOver("img10", 9)} onMouseOut={() => this.handleMouseOut("img10", 10)} src={this.state.imgSrc[10]} className="image10" alt="" />
              }
            </div>
          </div>
        </div>



        {/* ///////////// dernier div a laisser \\\\\\\\\\\\\\ */}
        </div>
      </div>

    );
  }
}

export default App;
