import React, { Component } from 'react';
import './about.css';
import { Link, withRouter } from 'react-router-dom'
import Manifest from './component/Manifest.js'
import Contact from './component/Contact.js'
import LienUtile from './component/LienUtile.js';
import LesAmis from './component/LesAmis.js';
import scrollToComponent from 'react-scroll-to-component';
import '../cssGrid.css';
import exitButton from '../imageButton/exitBlanc.png';


class About extends Component {



  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (

      <div className="about" >
        {/* //////////////Logo //////////////// */}


        <div className="logoAbout">
          <Link style={{ textDecoration: 'none' }} to='/'>
            <p className="texteLogo" > L’étincelle </p>
          </Link >
        </div>



        {/* ////////////// navbar //////////////// */}
        <div className="">
          <div className="navbarAbout ">
            <div className="displayFlex"><div className="texteNav" onClick={() => { scrollToComponent(this.LesAmis, { offset: -160, align: 'top', duration: 1500 }); }}> Les amiEs de l’art U </div>    </div>
            <div className="displayFlex"><div className="ligneBlancheCote"></div></div>
            <div className="displayFlex"><div className="texteNav" onClick={() => { scrollToComponent(this.LienUtile, { offset: -160, align: 'top', duration: 1500 }); }}> Liens utils  </div> </div>
            <div className="displayFlex"><div className="ligneBlancheCote"></div></div>
            <div className="displayFlex"><div className="texteNav" onClick={() => { scrollToComponent(this.Contact, { offset: -160, align: 'top', duration: 1500 }); }}> Contacts  </div> </div>
            <div className="displayFlex"><div className="ligneBlancheCote"></div></div>
            <div className="displayFlex"><div className="texteNav" onClick={() => { scrollToComponent(this.Manifest, { offset: -160, align: 'top', duration: 1500 }); }}> Manifeste</div> </div>




            <Link style={{ textDecoration: 'none' }} to='/'>
              <div className="displayFlex">

                <img id="exit" src={exitButton} className="exit" alt="" />


              </div>


            </Link>



          </div>
        </div>


        {/* ////////////// email //////////////// */}

              <div className="row">
              <div className="col-12 "> l'étincelle étin celle qui nuit</div>
              <div className="texteEmail col-10" >
          <div>
          qui suit ta route,
quand ton muffler
traine à terre
          
          </div>

        </div>
              
              
              </div>



        {/* ////////////// manifeste //////////////// */}
        <Manifest ref={(section) => { this.Manifest = section; }} />



        {/* ////////////// contact  //////////////// */}
        <Contact ref={(section) => { this.Contact = section; }} />
        {/* ////////////// lien Utile //////////////// */}

        <LienUtile ref={(section) => { this.LienUtile = section; }} />

        {/* ////////////// email //////////////// */}

        <LesAmis ref={(section) => { this.LesAmis = section; }} />

        <div className="row" >

          <div class="col-3 menu">
            s
        </div>
          <div class="col-3 menu">
            s
        </div>
          <div class="col-3 menu">
            s
        </div>
          <div class="col-3 menu">
            s
        </div>
        </div>


      </div>
    );


  }

}


export default withRouter(About)