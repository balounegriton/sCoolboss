import React, { Component } from 'react';
import './about.css';
import ReactHover from 'react-hover'
import image1 from "../image/1.jpg"
import { Link, withRouter } from 'react-router-dom'

const optionsCursorTrueWithMargin = {
  followCursor: true,
  shiftX: 0,
  shiftY: 20
}


class About extends Component {



  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (

      <div className="about">
        {/* //////////////Logo et X //////////////// */}


        <div className="logoContent">
          <a className="texteLogo"  > A l'art U </a>
        </div>


        {/* //////////////Logo et X //////////////// */}
        <div className="">
          <div className="navbarAbout">
            <div className="texteNav"> Contact -</div>
            <div className="texteNav"> Manifest - </div>
            <div className="texteNav"> Blalala - </div>
            <div className="texteNav"> Contact -</div>
            <div className="texteNav"> Manifest - </div>
            <div className="texteNav"> Blalala - </div>
            <Link style={{ textDecoration: 'none' }} to='/'>
              <div className="exit" > X </div>
            </Link >
          </div>
        </div>



        <div className="texteEmail">
          <div>
            Pour être tenu.e.s<br />
            informé.e.s lors du<br />
            lancement du projet ;<br />
            Facebook / Instagram,<br />
            Fais nous suivre ton<br />
            adresse e-mail :<br />
            <input type="text" placeholder="ton calisse de email" className="inputEmail" />
          </div>

        </div>



        <div className="manifeste">
          <div className="sideName">
            ---------------------------------------- Manifest
          </div>

          <div className="petitTexteManifeste" >
            Pour une collaboration au projet
ou pour n’importe quelle question
Info alartu.lux Pour une collaboration
au projet ou pour n’importe
quellebb question Ino alartu.lux
Pour unb be clolbbollaboration au
projet ou pour n’importe quelle
question Infotralartu.lux Pour une
collaboration au projet ou une collaboration.
          </div>

          <div className="grosTexteManifeste">
            L’espace et les activités ne sont
  pas encore totalement définies bien
  que quelques axes sois déjà envisagés.
  Tout-d’abord l’espace dois être
  réfléchis de manière maximalement
  modulaire et simplifié pour permettre
  un fonctionnement efficace. les différentes
  fonctionnalisés projetés sont
  la création d’un espace d’atelier, permettant
  aux usaggraphie photographie,
  au long de leurs parcours et de
  pouvoir partager leurs passions pour
  permettre un fonctionnement efficace.
  les différentes fonctionnalisés
  projetés sont la création d’un espace
  d’atelier, permettant aux usaggraphie
  photographie, au long de leurs parcours
  et de pouvoir partager leurs.
          </div>

        </div>






        <div className="contact">
          <div className="sideName">
            ----------------------------------------- Contact
          </div>


          <div className="texteContactDerriere" > Info@alartu.lux </div>
          <div className="texteContactDerriere2" > Instagram/<br />Facebook
                                                       </div>
          <div className="texteContactDerriere3" > Gofoundme </div>


          <div className="texteContact">
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

        </div>



        <div className="lienUtile">
          <div className="sideName">
            ----------------------------------------- Liens utils
          </div>



          <div className="texteLineUtile">
            <a className="texteLienUtileTitre" >Projets existants</a><br /><br />

            <ReactHover options={optionsCursorTrueWithMargin}>
              <ReactHover.Trigger type='trigger'>
                <a className="texteLienUtileBody" > La boite à musique
</a>
              </ReactHover.Trigger>
              <ReactHover.Hover type='hover'>
                <div>
                  <img src={image1} style={{ width: '200px' }} alt="" />
                </div>
              </ReactHover.Hover>
            </ReactHover>
            /
            <ReactHover options={optionsCursorTrueWithMargin}>
              <ReactHover.Trigger type='trigger'>
                <a className="texteLienUtileBody" > La boite à musique
</a>
              </ReactHover.Trigger>
              <ReactHover.Hover type='hover'>
                <div>
                  <img src={image1} style={{ width: '200px' }} alt="" />
                </div>
              </ReactHover.Hover>
            </ReactHover>
            
/ La grand<br />
            voile / Vega Bon<br />
            / La boite à musique<br />
            / La grand<br />
            voile / Vega Bon<br />
            / La boite à musique<br />
            / La grand<br />
            voile / Vega Bon<br />
            / La boite à musique




          </div>

        </div>

      </div>

    );
  }
}

export default withRouter(About)
