import React from 'react';
import perfil from "../SobreMi/perfil.png";
import SwitchImage from './SwitchImage';

const SobreMi = () => {
  return (
    <div style={{ marginTop: "100px", padding: "0 100px", boxSizing: "border-box", width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
      <h3 className='mainbox' style={{ fontSize: "2rem", fontStyle: "italic", color: "#F39F5A", textAlign: "center", marginBottom: "10px" }}>"El arte de la comunicación es el lenguaje del liderazgo"</h3>
      <h4 className='mainbox' style={{ fontSize: "1rem", color: "#F39F5A", textAlign: "right", marginBottom: "20px" }}>James Humes</h4>

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', maxWidth: "100%" }}>
        <SwitchImage width="450" height="auto" src={perfil} alt="Perfil" style={{ maxWidth: "100%" }} />
        <div style={{ flex: 1, padding: "0 20px" }}>
          <p className='text' style={{ fontSize: "1.2rem", color: "white", textAlign: "justify" }}>
            Humes no se equivocaba al afirmarlo. Sólo a través de una comunicación efectiva y honesta podemos llegar a alcanzar nuestros objetivos, tanto en la vida personal como en la profesional.
          </p>
          
          <p className='text' style={{ fontSize: "1.2rem", color: "#F39F5A", textAlign: "justify", marginBottom: "20px" }}>
            He desarrollado esta vocación durante más de una década, compaginando experiencias laborales con formación. Disfruto diseñando estrategias de comunicación, sus elementos visuales y todo lo relacionado con transmitir la identidad de una marca. El valor de una empresa no está en los números, sino en las emociones que generamos.
          </p>
          
          <p className='text' style={{ fontSize: "1.2rem", color: "white", textAlign: "justify" }}>
            Tras llevar más de diez años dedicados en exclusiva a la comunicación empresarial, decidí ampliar mis horizontes profesionales y sumar otra rama a mis conocimientos: el desarrollo web. Trabajando con lenguajes de front y back end, la experiencia comunicacional que puedo ofrecer ahora es completa: partiendo de cero, podemos crear toda la imagen corporativa, diseñar la estrategia y llevarla a cabo.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SobreMi;



