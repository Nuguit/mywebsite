import React from 'react'
import perfil from "../SobreMi/perfil.png"
import SwitchImage from './SwitchImage'




const SobreMi = () => {
    return (
        <div style={{marginTop:"100px"}}>
            <div style={{justifyContent:"center"}}><h3 className='mainbox' style={{ fontSize: "50px", fontStyle: "italic", color: "#F39F5A", display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>"El arte de la comunicación es el lenguaje del liderazgo"</h3>
            <h4 className='mainbox' style={{ fontSize: "20px", color: "#F39F5A", display: 'flex', flexDirection: 'column', textAlign: "right", paddingRight: "500px", marginBottom:"10px" }}>James Humes</h4></div>
            
            <div style={{ display: 'flex', marginRight: "150px", marginLeft:"150px", justifyContent:"center", alignItems:"center" }}>
      <SwitchImage width="450" height="500" src={perfil} alt="Perfil" style={{ marginRight: '60px', alignItems:"center" }} />
      <div>
        <p className='text' style={{ fontSize: "25px", color: "white", textAlign: "center" }}>
          Humes no se equivocaba al afirmarlo. Sólo a través de una comunicación efectiva y honesta podemos llegar a alcanzar nuestros objetivos, tanto en la vida personal como en la profesional.
        </p>
        
        <p className='text' style={{ fontSize: "25px", color: "#F39F5A", textAlign: "center" }}>
          He desarrollado esta vocación durante más de una década, compaginando experiencias laborales con formación. Disfruto diseñando estrategias de comunicación, sus elementos visuales y todo lo relacionado con transmitir la identidad de una marca. El valor de una empresa no está en los números, sino en las emociones que generamos.
        </p>
        
        <p className='text' style={{ fontSize: "25px", color: "white", textAlign: "center" }}>
          Tras llevar más de diez años dedicados en exclusiva a la comunicación empresarial, decidí ampliar mis horizontes profesionales y sumar otra rama a mis conocimientos: el desarrollo web. Trabajando con lenguajes de front y back end, la experiencia comunicacional que puedo ofrecer ahora es completa: partiendo de cero, podemos crear toda la imagen corporativa, diseñar la estrategia y llevarla a cabo.
        </p>
        
                    
                </div>
            </div>
           
        </div>
    )
}

export default SobreMi