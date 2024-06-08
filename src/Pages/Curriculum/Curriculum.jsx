import React from 'react';
import comic1 from "../Curriculum/comic1.png";
import comic2 from "../Curriculum/comic2.png";
import html from "../SobreMi/html.svg";
import css from "../SobreMi/css.svg";
import javascript from "../SobreMi/javascript.svg";
import mongodb from "../SobreMi/mongodb.svg";
import react from "../SobreMi/react.svg";
import mysql from "../SobreMi/mysql.svg";
import nodejs from "../SobreMi/nodejs.svg";
import bootstrap from "../SobreMi/bootstrap.svg";
import framermotion from "../SobreMi/framermotion.svg";
import python from "../SobreMi/python.svg";
import postman from "../SobreMi/postman.svg";
import github from "../SobreMi/github.svg";
import mailchimp from "../SobreMi/mailchimp.png";
import photoshop from "../SobreMi/photoshop.png";
import picmonkey from "../SobreMi/picmonkey.png";
import office from "../SobreMi/office.png";
import adobe from "../SobreMi/adobe.png";
import canva from "../SobreMi/canva.png";
import semrush from "../SobreMi/semrush.png";
import metricool from "../SobreMi/metricool.png";
import analytics from "../SobreMi/analytics.png";
import adwords from "../SobreMi/adwords.png";
import hubspot from "../SobreMi/hubspot.svg";
import filmora from "../SobreMi/filmora.png";
import imovie from "../SobreMi/imovie.png";
import premiere from "../SobreMi/premiere.png";
import quark from "../SobreMi/quark.png";

const Curriculum = () => {
  return (
    <div style={{ justifyContent: "center", alignItems: "center", padding: "20px", boxSizing: "border-box" }}>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: "30px", flexDirection: "column", alignItems: "center" }}>
        <img src={comic1} alt="Comic 1" style={{ width: '100%', maxWidth: '900px', height: 'auto', margin: '0 10px' }} />
        <img src={comic2} alt="Comic 2" style={{ width: '100%', maxWidth: '900px', height: 'auto', margin: '0 10px', marginBottom: "10px" }} />
      </div>
      <div style={{ textAlign: 'center', margin: "10px auto", maxWidth: "1200px", width: "100%" }}>
        <h3 className='name' style={{ color: "#F39F5A", fontSize: "2rem", marginBottom: "20px" }}>🛠 Lenguajes y herramientas:</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          <img src={html} title="HTML" alt="HTML" style={{ margin: "10px", width: "80px", height: "80px" }} />
          <img src={css} title="CSS" alt="CSS" style={{ margin: "10px", width: "80px", height: "80px" }} />
          <img src={javascript} title="JavaScript" alt="JavaScript" style={{ margin: "10px", width: "80px", height: "80px" }} />
          <img src={mongodb} title="MongoDB" alt="MongoDB" style={{ margin: "10px", width: "80px", height: "80px" }} />
          <img src={react} title="React" alt="React" style={{ margin: "10px", width: "80px", height: "80px" }} />
          <img src={mysql} title="MySQL" alt="MySQL" style={{ margin: "10px", width: "80px", height: "80px" }} />
          <img src={nodejs} title="Node.js" alt="Node.js" style={{ margin: "10px", width: "80px", height: "80px" }} />
          <img src={bootstrap} title="Bootstrap" alt="Bootstrap" style={{ margin: "10px", width: "80px", height: "80px" }} />
          <img src={framermotion} title="Framer Motion" alt="Framer Motion" style={{ margin: "10px", width: "80px", height: "80px" }} />
          <img src={python} title="Python" alt="Python" style={{ margin: "10px", width: "80px", height: "80px" }} />
          <img src={postman} title="Postman" alt="Postman" style={{ margin: "10px", width: "80px", height: "80px" }} />
          <img src={github} title="GitHub" alt="GitHub" style={{ margin: "10px", width: "80px", height: "80px" }} />
          <img src="https://goncy.netlify.app/static/d52f717f79aca102bdd13af15e455879/69755/banner.jpg" title="Chakra" alt="Chakra" style={{ margin: "10px", width: "80px", height: "80px" }} />
        </div>
        <h3 className='name' style={{ color: "#F39F5A", fontSize: "2rem", marginTop: "50px", marginBottom: "20px" }}>💻Programas de edición y medición:</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          <img src={mailchimp} title="Mailchimp" alt="Mailchimp" style={{ margin: "10px", width: "130px", height: "70px" }} />
          <img src={picmonkey} title="PicMonkey" alt="PicMonkey" style={{ margin: "10px", width: "80px", height: "80px" }} />
          <img src={photoshop} title="Photoshop" alt="Photoshop" style={{ margin: "10px", width: "80px", height: "80px" }} />
          <img src={office} title="Office" alt="Office" style={{ margin: "10px", width: "140px", height: "70px" }} />
          <img src={adobe} title="Adobe" alt="Adobe" style={{ margin: "10px", width: "80px", height: "80px" }} />
          <img src={canva} title="Canva" alt="Canva" style={{ margin: "10px", width: "80px", height: "80px" }} />
          <img src={semrush} title="SEMrush" alt="SEMrush" style={{ margin: "10px", width: "80px", height: "80px" }} />
          <img src={metricool} title="Metricool" alt="Metricool" style={{ margin: "10px", width: "80px", height: "80px" }} />
          <img src={analytics} title="Google Analytics" alt="Google Analytics" style={{ margin: "10px", width: "80px", height: "80px" }} />
          <img src={adwords} title="Google AdWords" alt="Google AdWords" style={{ margin: "10px", width: "80px", height: "80px" }} />
          <img src={hubspot} title="HubSpot" alt="HubSpot" style={{ margin: "10px", width: "80px", height: "80px" }} />
          <img src={filmora} title="Filmora" alt="Filmora" style={{ margin: "10px", width: "80px", height: "80px" }} />
          <img src={imovie} title="iMovie" alt="iMovie" style={{ margin: "10px", width: "80px", height: "80px" }} />
          <img src={premiere} title="Premiere" alt="Premiere" style={{ margin: "10px", width: "120px", height: "80px" }} />
          <img src={quark} title="Quark" alt="Quark" style={{ margin: "10px", width: "110px", height: "70px" }} />
        </div>
      </div>
    </div>
  );
};

export default Curriculum;
