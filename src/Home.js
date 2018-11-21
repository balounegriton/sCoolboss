import React, { Component } from 'react';
import './App.css';


import { Link } from 'react-router-dom'
import $ from 'jquery'

import image1 from './image/1.jpg'
import image2 from './image/2.jpg'
import image3 from './image/3.jpg'
import image4 from './image/4.jpg'
import image5 from './image/5.jpg'
import image6 from './image/6.png'
import image7 from './image/7.jpg'
import image8 from './image/8.jpg'
import image9 from './image/9.jpg'
import image10 from './image/10.jpg'

import ProjectBus from './project/ProjectBus'






class Home extends Component {
  constructor() {
    super();

    this.state = {
      bus: true,
      project: true,
      series: true,
      imgSrc: ["image0", image1, image2, image3, image4, image5, image6, image7, image8, image9, image10],
      busClass: ["image ", "content"],
      projectClass: ["image ", "content"],
      seriesClass: ["image ", "content"],


    };


    ////////////////// Jquery /////////////////////////////


    $.fn.moveIt = function () {
      var $window = $(window);
      var instances = [];

      $(this).each(function () {
        instances.push(new moveItItem($(this)));
      });

      window.onscroll = function () {
        var scrollTop = $window.scrollTop();
        instances.forEach(function (inst) {
          inst.update(scrollTop);
        });
      }
    }

    var moveItItem = function (el) {
      this.el = $(el);
      this.speed = parseInt(this.el.attr('data-scroll-speed'),10);
    };

    moveItItem.prototype.update = function (scrollTop) {
      this.el.css('transform', 'translateY(' + -(scrollTop / this.speed) + 'vh)');
    };

    // Initialization
    $(function () {
      $('[data-scroll-speed]').moveIt();
    });


    ////////////////// end of Jquery /////////////////////////////
  }
  /////////////////////// 


  componentDidMount() {
    this.setState({
      series: true,
      seriesClass: ["image ", "content"],
      project: true,
      projectClass: ["image ", "content"],
      bus: true,
      busClass: ["image ", "content"]
    })
    document.body.style.overflow = "unset"
    }

  //////////////////// La function pour le navBar \\\\\\\\\\\\\\\\\\\\\\

  busNav = () => {

    if (this.state.project === false && this.state.series === false && this.state.bus === true) {
      this.setState({
        series: true,
        seriesClass: ["image ", "content"],
        project: true,
        projectClass: ["image ", "content"],
        bus: true,
        busClass: ["image ", "content"]
      })
      document.getElementById("project").className = "texte "
      document.getElementById("series").className = "texte "
      document.getElementById("bus").className = "texte "
    }
    else if (this.state.project === true && this.state.series === true && this.state.bus === true) {
      this.setState({
        series: false,
        seriesClass: ["image projectNotSelected", "content noPointer"],
        project: false,
        projectClass: ["image projectNotSelected", "content noPointer"]

      })
      document.getElementById("project").className = "texteColor "
      document.getElementById("series").className = "texteColor "


    }
    else if (this.state.bus === false) {
      this.setState({
        series: false,
        seriesClass: ["image projectNotSelected", "content noPointer"],
        project: false,
        projectClass: ["image projectNotSelected", "content noPointer"],
        bus: true,
        busClass: ["image ", "content"]

      })
      document.getElementById("project").className = "texteColor "
      document.getElementById("series").className = "texteColor "
      document.getElementById("bus").className = "texte "




    }




  }


  projectNav = () => {

    if (this.state.project === true && this.state.series === false && this.state.bus === false) {
      this.setState({
        series: true,
        seriesClass: ["image ", "content"],
        project: true,
        projectClass: ["image ", "content"],
        bus: true,
        busClass: ["image ", "content"]
      })
      document.getElementById("project").className = "texte "
      document.getElementById("series").className = "texte "
      document.getElementById("bus").className = "texte  "
    }
    else if (this.state.project === true && this.state.series === true && this.state.bus === true) {
      this.setState({
        series: false,
        seriesClass: ["image projectNotSelected", "content noPointer"],
        bus: false,
        busClass: ["image projectNotSelected", "content noPointer"]
      })
      document.getElementById("bus").className = "texteColor "
      document.getElementById("series").className = "texteColor "
    }
    else if (this.state.project === false) {
      this.setState({
        series: false,
        seriesClass: ["image projectNotSelected", "content noPointer"],
        project: true,
        projectClass: ["image ", "content"],
        bus: false,
        busClass: ["image projectNotSelected", "content noPointer"]
      })
      document.getElementById("bus").className = "texteColor "
      document.getElementById("series").className = "texteColor "
      document.getElementById("project").className = "texte "




    }


  }

  seriesNav = () => {

    if (this.state.project === false && this.state.series === true && this.state.bus === false) {
      this.setState({
        series: true,
        seriesClass: ["image ", "content"],
        project: true,
        projectClass: ["image ", "content"],
        bus: true,
        busClass: ["image ", "content"]
      })
      document.getElementById("project").className = "texte "
      document.getElementById("series").className = "texte "
      document.getElementById("bus").className = "texte "
    }
    else if (this.state.project === true && this.state.series === true && this.state.bus === true) {
      this.setState({
        bus: false,
        project: false,
        projectClass: ["image projectNotSelected", "content noPointer"],
        busClass: ["image projectNotSelected", "content noPointer"]

      })
      document.getElementById("project").className = "texteColor "
      document.getElementById("bus").className = "texteColor "


    }
    else if (this.state.series === false) {
      this.setState({
        series: true,
        seriesClass: ["image ", "content"],
        project: false,
        projectClass: ["image projectNotSelected", "content noPointer"],
        bus: false,
        busClass: ["image projectNotSelected", "content noPointer"]

      })
      document.getElementById("bus").className = "texteColor "
      document.getElementById("project").className = "texteColor "
      document.getElementById("series").className = "texte "




    }


  }




  closeOver = () => {
    this.setState({
      project1: false,
      projectOff: false 
    })

    document.body.style.overflow = "unset"
    document.getElementById("navabar").style.display = " flex"
  }

  ////////////////////  function pour ouvrir les over de projet /\\\\\\\\\\\\\\\\\\\\\\

  openOver = () => {
    this.setState({
      project1: true,
      projectOff: true 
    })
    document.body.style.overflow = "hidden"
    document.getElementById("navabar").style.display = " none"
  }





  render() {

    return (

      <div id="theBody">
        {/* ////////////// Project overlay //////////////// */}
        {this.state.project1 && <ProjectBus action={this.closeOver} />}

        <div className="logoContent" >
          <Link style={{ textDecoration: 'none' }} to='/About'>
            <p className="texteLogoBlack" > A l'art U </p>
          </Link >
        </div>
        {/* ////////////// navBar //////////////// */}
         <div id="navabar" className="navbar">
          <a id="bus" className="texte" onClick={this.busNav} >bus</a>
          <a id="project" className="texte" onClick={this.projectNav} >project</a>
          <a id="series" className="texte" onClick={this.seriesNav} >series</a>

          <Link style={{ textDecoration: 'none' }} to='/About'>
            <div className="texte cursorDefault"> + </div>
          </Link >

        </div>


        <div  >

          {/* ////////// Background animation */}

          {/* <div  className="background "> <Background /> </div> */}


          {/* ////////// image 1 Landing page */}
          <div className={this.state.busClass[1]}>
            <div className="wrapper ">
              <div className="box  imgHoverIndex" data-scroll-speed="100">


                <div className="container image1 ">
                  <div className="overlayProject red">
                    <div className="textHover">Hello World</div>
                  </div>
                  <img id="img1" src={this.state.imgSrc[1]} className={this.state.busClass[0]} alt="" onClick={this.openOver} />
                </div>
              </div>
            </div>
          </div>
          {/* ////////// image 2 projet */}
          <div className={this.state.seriesClass[1]}>
            <div className="wrapper ">
              <div className="box  imgHoverIndex z-indexImg2" data-scroll-speed="10">


                <div className="container image2 ">
                  <div className="overlayProject red">
                    <div className="textHover">Hello World</div>
                  </div>
                  <img id="img2" src={this.state.imgSrc[2]} className={this.state.seriesClass[0]} alt="" onClick={this.openOver} />
                </div>
              </div>
            </div>
          </div>


          {/* ////////// image 3 projet */}
          <div className={this.state.projectClass[1]}>
            <div className="wrapper  ">
              <div className="box imgHoverIndex z-indexImg3" data-scroll-speed="10000000">

                <div className="container image3 ">
                  <div className="overlayProject red">
                    <div className="textHover">Hello World</div>
                  </div>
                  <img id="img3" src={this.state.imgSrc[3]} className={this.state.projectClass[0]} alt="" />
                </div>



              </div>
            </div>
          </div>



          {/* ////////// image 4 projet */}
          <div className={this.state.busClass[1]}>
            <div className="wrapper ">
              <div className="box imgHoverIndex" data-scroll-speed="5">


                <div className="container image4">

                  <div className="overlayProject red">
                    <div className="textHover">Hello World</div>
                  </div>
                  <img id="img4" src={this.state.imgSrc[4]} className={this.state.busClass[0]} alt="" />


                </div>

              </div>
            </div>
          </div>

          {/* ////////// image 5 projet */}
          <div className={this.state.busClass[1]}>
            <div className="wrapper ">
              <div className="box imgHoverIndex z-indexImg5" data-scroll-speed="130">

                <div className="container image5 ">
                  <div className="overlayProject red">
                    <div className="textHover">Hello World</div>
                  </div>
                  <img id="img5" src={this.state.imgSrc[5]} className={this.state.busClass[0]} alt="" />
                </div>

              </div>
            </div>
          </div>


          {/* ////////// image 6 projet */}
          <div className={this.state.projectClass[1]}>
            <div className="wrapper ">
              <div className="box imgHoverIndex" data-scroll-speed="500000">


                <div className="container image6 ">
                  <div className="overlayProject red">
                    <div className="textHover">Hello World</div>
                  </div>
                  <img id="img6" src={this.state.imgSrc[6]} className={this.state.projectClass[0]} alt="" />
                </div>

              </div>
            </div>
          </div>


          {/* ////////// image 7 projet */}
          <div className={this.state.seriesClass[1]}>
            <div className="wrapper ">
              <div className="box imgHoverIndex" data-scroll-speed="5">

                <div className="container image7 ">
                  <div className="overlayProject bleu">
                    <div className="textHover">Hello World</div>
                  </div>
                  <img id="img7" src={this.state.imgSrc[7]} className={this.state.seriesClass[0]} alt="" />
                </div>

              </div>
            </div>
          </div>

          {/* ////////// image 8 projet */}
          <div className={this.state.busClass[1]}>
            <div className="wrapper ">
              <div className="box imgHoverIndex" data-scroll-speed="500000 ">

                <div className="container image8 ">
                  <div className="overlayProject red">
                    <div className="textHover">Hello World</div>
                  </div>
                  <img id="img8" src={this.state.imgSrc[8]} className={this.state.busClass[0]} alt="" />
                </div>

              </div>
            </div>
          </div>


          {/* ////////// image 9 projet */}
          <div className={this.state.seriesClass[1]}>
            <div className="wrapper ">
              <div className="box imgHoverIndex" data-scroll-speed="20">

                <div className="container image9 ">
                  <div className="overlayProject bleu">
                    <div className="textHover">Hello World</div>
                  </div>
                  <img id="img9" src={this.state.imgSrc[9]} className={this.state.seriesClass[0]} alt="" />
                </div>

              </div>
            </div>
          </div>


          {/* ////////// image 10 projet */}
          <div className={this.state.projectClass[1]}>
            <div className="wrapper ">
              <div className="box imgHoverIndex" data-scroll-speed="1">

                <div className="container image10 ">
                  <div className="overlayProject bleu">
                    <div className="textHover">Hello World</div>
                  </div>
                  <img id="img10" src={this.state.imgSrc[10]} className={this.state.projectClass[0]} alt="" />
                </div>

              </div>
            </div>
          </div>


          {/* ///////////// dernier div a laisser \\\\\\\\\\\\\\ */}
        </div>
      </div>

    );
  }
}

export default Home;
