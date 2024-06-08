import React from 'react';
import safemap from "../SafeMap/safemap.png";

const SafeMapPage = () => {
  return (
    <div style={{ textAlign: "center", margin: "20px", padding: "0 10px", boxSizing: "border-box" }}>
      <p className='text' style={{ fontSize: "2rem", color: "white", textAlign: "center", marginBottom: "20px" }}>
        SafeMap es mi proyecto de fin de Bootcamp.
      </p>
      <p className='text' style={{ fontSize: "1.6rem", color: "#F39F5A", textAlign: "center", marginBottom: "20px" }}>
        Hoy en día viajar y conocer mundo es algo habitual. Las distancias se hacen cortas y el mundo interconectado en el que vivimos nos permite conocer lugares con los que, hasta hace no mucho, solo se podía soñar.
      </p>
      <p className='text' style={{ fontSize: "1.6rem", color: "white", textAlign: "center", marginBottom: "20px" }}>
        Pero...¿y una vez que estamos allí? Podemos visitar las zonas más turísticas, claro...Pero ¿sabemos cómo llegar allí? ¿Y cómo volver a nuestro alojamiento sin encontrarnos con impedimentos de accesibilidad o zonas peligrosas?
      </p>
      <p className='text' style={{ fontSize: "1.6rem", color: "#F39F5A", textAlign: "center", marginBottom: "20px" }}>
        De esa idea surge SafeMap: un mapa donde poder colocar "banderas rojas" en espacios o calles públicos y advertir a otros usuarios de la aplicación.
      </p>
      <p className='text' style={{ fontSize: "1.6rem", color: "white", textAlign: "center", marginBottom: "20px" }}>
        ¿Quieres verlo? Pincha en la siguiente imagen:
      </p>
      <a href='https://finalproject-front-seven.vercel.app/'>
        <img style={{ width: "100%", maxWidth: "600px", height: "auto", marginBottom: "20px" }} src={safemap} alt="SafeMap" />
      </a>
    </div>
  );
};

export default SafeMapPage;
