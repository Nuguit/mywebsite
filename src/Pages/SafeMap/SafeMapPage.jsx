import React from 'react';
import safemap from "../SafeMap/safemap.png"


const SafeMapPage = () => {
    return (
        <div style={{ textAlign: "center", margin: "20px 50px" }}>
            <p className='text' style={{ fontSize: "2rem", color: "white", textAlign: "center" }}>SafeMap es mi proyecto de fin de Bootcamp.</p>
            <p className='text' style={{ fontSize: "1.6rem", color: "#F39F5A", textAlign: "center" }}>Hoy en día viajar y conocer mundo es algo habitual. Las distancias se hacen cortas y el mundo interconectado en el que vivimos nos permite conocer lugares con los que, hasta hace no mucho, solo se podía soñar.</p>
            <p className='text' style={{ fontSize: "1.6rem", color: "white", textAlign: "center" }}>Pero...¿y una vez que estamos allí? Podemos visitar las zonas más turísticas, claro...Pero ¿sabemos cómo llegar allí? ¿Y cómo volver a nuestro alojamiento sin encontrarnos con impedimentos de accesibilidad o zonas peligrosas?</p>
            <p className='text' style={{ fontSize: "1.6rem", color: "#F39F5A", textAlign: "center" }}>De esa idea surge SafeMap: un mapa donde poder colocar "banderas rojas" en espacios o calles públicos y advertir a otros usuarios de la aplicación.</p>
            <p className='text' style={{ fontSize: "1.6rem", color: "white", textAlign: "center" }}>¿Quieres verlo? Pincha en la siguiente imagen:</p>
           <a href='https://finalproject-front-seven.vercel.app/'>
            <img style={{width: "60%", height: "auto"}} src={safemap}></img>
           </a>
                
                
        </div>
    )

}

export default SafeMapPage