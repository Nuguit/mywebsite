import React from 'react'
import { useState } from 'react'
import { motion } from 'framer-motion'
import perfil from "../SobreMi/perfil.png"
import pixelart from "../pixelart.png"

const SwitchImage = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div style={{ width: '300px', height: '300px', position: 'relative', overflow: 'hidden' }}>
      <motion.img
        src={isHovered ? pixelart : perfil}
        alt="Nuria Guevara"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          position: 'absolute',
          top: 0,
          left: 0,
          display: 'block',
        }}
        whileHover={{ scale: 1.04 }}
        transition={{ duration: 0.4 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      />
    </div>
  );
}

export default SwitchImage
