import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import "../Pages/mainPage.css"

import Pixelart from "../Pages/pixelart.png";

const MainPage = () => {
  return (
    <div className="main-container">
      <div className="content-container">
        <motion.h1
          className='name'
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 2}}
        >
          Nuria Guevara Fuentes
        </motion.h1>
        
        <motion.h2
          className='name'
          style={{fontSize:"40px", marginTop:"10px"}}
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 4, delay: 1}}
        >
          Desarrolladora Web FullStack, periodista y especialista en comunicación empresarial.
        </motion.h2>
        
        <div className='description'>
          <p>
            Creativa y curiosa por naturaleza.
          </p>
          <p>
            Apasionada por la tecnología y la comunicación.
          </p>
        </div>
        
        <p className='quote'>No existe el "no sé", existe el "busquemos cómo".</p>
        
        <Link to="/about">
          <img src={Pixelart} alt="Pixelart" className="pixelart-img" />
        </Link>
      </div>
    </div>
  );
};

export default MainPage;
