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
  constructor() {
    super();

    this.state = {
      bus: true,
      project: true,
      series: true
    };
  }

  ////////////// test pour voir si Onclick function ( il fonctione juste sur l'image 9 qui est au dessu de tout )  //////////
  test = () => {
    console.log("IMAGE 9 Click")
  }


  //////////////////// La function pour le navBar ( la fonction bus est Ok, mais celle project et series son a revoir/\\\\\\\\\\\\\\\\\\\\\\

  busNav = () => {

    if (this.state.project === false && this.state.series === false && this.state.bus === true) {
      this.setState({
        series: true,
        project: true,
        bus: false
      })
      document.getElementById("project").className = "texte "
      document.getElementById("series").className = "texte "
      document.getElementById("bus").className = "texte texteColor "
    }
    else if (this.state.project === true && this.state.series === true && this.state.bus === true) {
      this.setState({
        series: false,
        project: false,

      })
      document.getElementById("project").className = "texte texteColor "
      document.getElementById("series").className = "texte texteColor "
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
    if (this.state.project === true) {
      if (this.state.bus === false && this.state.series === false) {
        this.setState({
          bus: true,
          series: true,

        })
        document.getElementById("bus").className = "texte "
        document.getElementById("series").className = "texte "
      }
      this.setState({ project: false })
      document.getElementById("project").className = "texte texteColor"
    }
    else {
      this.setState({ project: true })
      document.getElementById("project").className = "texte "
    }
  }

  seriesNav = () => {
    if (this.state.series === true) {
      if (this.state.bus === false && this.state.project === false) {
        this.setState({
          project: true,
          bus: true,

        })
        document.getElementById("project").className = "texte "
        document.getElementById("bus").className = "texte "
      }
      this.setState({ series: false })
      document.getElementById("series").className = "texte texteColor "
    }
    else {
      this.setState({ series: true })
      document.getElementById("series").className = "texte "
    }
  }




  render() {

    return (


      <div >
        <div className="navbar">
          <a id="bus" className="texte" onClick={this.busNav} >bus</a>
          <a id="project" className="texte" onClick={this.projectNav} >project</a>
          <a id="series" className="texte" onClick={this.seriesNav} >series</a>
          <a className="texte" onClick={this.plus}>+</a>
        </div>
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
              {this.state.bus && <img src={image2} className="image2" alt="" />}
            </div>

          </div>
        </div>


        {/* ////////// image 3 projet */}
        <div className="content">

          <div className="wrapper ">
            <div className="box" data-scroll-speed="5">
              {this.state.series && <img src={image3} className="image3" alt="" />}
            </div>

          </div>
        </div>

        {/* ////////// image 4 projet */}
        <div className="content">

          <div className="wrapper ">
            <div className="box" data-scroll-speed="1">
              {this.state.project && <img src={image4} className="image4" alt="" />}
            </div>

          </div>
        </div>

        {/* ////////// image 5 projet */}
        <div className="content">

          <div className="wrapper ">
            <div className="box" data-scroll-speed="1">
              {this.state.project && <img src={image5} className="image5" alt="" />}
            </div>

          </div>
        </div>


        {/* ////////// image 6 projet */}
        <div className="content">

          <div className="wrapper ">
            <div className="box" data-scroll-speed="5">
              {this.state.series && <img src={image6} className="image6" alt="" />}
            </div>

          </div>
        </div>


        {/* ////////// image 7 projet */}
        <div className="content">

          <div className="wrapper ">
            <div className="box" data-scroll-speed="1">
              {this.state.bus && <img src={image7} className="image7" alt="" />}
            </div>

          </div>
        </div>

        {/* ////////// image 8 projet */}
        <div className="content">

          <div className="wrapper ">
            <div className="box" data-scroll-speed="5 ">
              {this.state.project && <img src={image8} className="image8" alt="" />}
            </div>

          </div>
        </div>


        {/* ////////// image 9 projet */}
        <div className="content">

          <div className="wrapper ">
            <div className="box" data-scroll-speed="10">
              {this.state.bus && <img src={image9} className="image9" alt="" onClick={this.test} />}
            </div>

          </div>
        </div>


        {/* ///////////// dernier div a laisser \\\\\\\\\\\\\\ */}

      </div>

    );
  }
}

export default App;
