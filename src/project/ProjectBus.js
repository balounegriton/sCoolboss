import React, { Component } from 'react';
import './Project.css';
import image1 from '../image/1.jpg'
import titre from '/Users/noeprovost/Desktop/ETINCELLE/src/txtBold.png'



class ProjectBus extends Component {
  

  render() {
    return (
      <div >
        {/* //////////////overlay 1 //////////////// */}
        <div className="flex">

          <div className="overlay" onClick={this.props.action}>
          </div>

          <div className="overlay2">



      <div className="page" >
    


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

          </div>



        </div>
      </div>

    );
  }
}

export default ProjectBus;
