import React from 'react'
import { motion } from 'framer-motion';
import "../../src/index.css"
import Pixelart from "../Pages/pixelart.png"
import { Link } from 'react-router-dom';


const MainPage = () => {
  return (
    <div style={{alignItems:"center"}}>
    <div style={{  display: 'flex',flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color:"#F39F5A", fontSize:"50px" }}>
      <motion.h1 className='name'
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 2}}
      >
        Nuria Guevara Fuentes
      </motion.h1>
      
      <motion.h2 className='name' style={{fontSize:"40px", marginTop:"10px"}}
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 4, delay: 1}}
      >
        Desarrolladora Web FullStack, periodista y especialista en comunicación empresarial.
      </motion.h2>
    <div className='name'    
        style={{ width: '600px', height: '200px', color: '#AE445A', textAlign: 'center', lineHeight: '50px', fontSize:'30px' }}>
      
        Creativa y curiosa por naturaleza. <br></br> Apasionada por la tecnología y la comunicación.
     
      
      
      <p className='handwrite' style={{fontSize: '30px', textAlign: 'center', justifyContent: 'center', color: "white"}}>No existe el "no sé", existe el "busquemos cómo".</p>
    </div>
    <Link to="/about">
      <img src={Pixelart} alt="Pixelart" />
    </Link>
    
    
    </div></div>
  );
};
export default MainPage