import React from 'react'
import { useState } from 'react'
import { motion } from 'framer-motion'
import perfil from "../SobreMi/perfil.png"
import pixelart from "../pixelart.png"

const SwitchImage = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div style={{ width: '550px', height: '200px', position: 'relative' }}>
          <motion.img
            src={isHovered ? pixelart : perfil}
            alt="Imagen"
            style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}
            whileHover={{ scale: 1.1, transition: { duration: 0.5 } }} // Aumenta la escala al hacer hover
            animate={{ opacity: 1, scale: 1 }} // Imagen inicial
            initial={{ opacity: 1, scale: 1 }} // Imagen inicial
            exit={{ opacity: 0, scale: 0.5 }} // Imagen al salir
            transition={{ duration: 0.5 }} // Duración de la transición
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          />
        </div>
      );
    }

export default SwitchImage