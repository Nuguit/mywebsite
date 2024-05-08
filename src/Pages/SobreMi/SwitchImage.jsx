import React from 'react'
import { useState } from 'react'
import { motion } from 'framer-motion'
import perfil from "../SobreMi/perfil.png"
import pixelart from "../pixelart.png"

const SwitchImage = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div style={{ width: '450px', height: '400px', position: 'relative' }}>
          <motion.img
            src={isHovered ? pixelart : perfil}
            alt="Imagen"
            style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}
            whileHover={{ scale: 1.1, transition: { duration: 0.5 } }} 
            animate={{ opacity: 1, scale: 1 }} 
            initial={{ opacity: 1, scale: 1 }} 
            exit={{ opacity: 0, scale: 0.5 }} 
            transition={{ duration: 0.5 }} 
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          />
        </div>
      );
    }

export default SwitchImage