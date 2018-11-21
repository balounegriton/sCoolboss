import React, { Component } from 'react';
import './Project.css';
import $ from 'jquery'
import image1 from '../image/1.jpg'
import titre from '/Users/noeprovost/Desktop/ETINCELLE/src/txtBold.png'


class Project1 extends Component {
  constructor() {
    super();

    this.state = {


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
      this.speed = parseInt(this.el.attr('data-scroll-speed'), 10);
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

  render() {
    return (






      <div className="page" >
        <div className="logoContent">
          <a className="texteLogoBlack"   > A l'art U </a>
        </div>


        <div className="navbarProjet">





            <div className="exitProjet" > X </div>



        </div>





        <div className="content float">
          <div className="wrapper ">
            <div className="box " data-scroll-speed="20">

              <div className="container texteTitreProjet ">
                <img id="projecttexte" src={titre} className="imageSize" alt="" />
              </div>
            </div>
          </div>
        </div>


        <img id="projectImage1" src={image1} className="imageProjectIntro" alt="" />

        <div className="textProjet">

          <div>
            <div className="texte">
              pour  une collaboration
    au projet
    ou pour n’importe
    quelle question.
    Pour nous donner
    des conseils,
    du temps, des
    matériaux ou
    nous financer
          </div>


        <img id="projectImage1" src={image1} className="imagetexte01" alt="" />
          
          </div>
        </div>



        {/* ///////////// dernier div a laisser \\\\\\\\\\\\\\ */}
      </div>


    );
  }
}

export default Project1;
