import React from 'react'
import { useState } from 'react'
import { motion } from 'framer-motion'
import perfil from "../SobreMi/perfil.png"
import perfilWebpSmall from "../SobreMi/perfil-480w.webp"
import pixelart from "../pixelart.png"
import pixelartWebpSmall from "../pixelart-480w.webp"

const SwitchImage = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div style={{ width: '300px', height: '300px', position: 'relative', overflow: 'hidden' }}>
      <picture>
        <source srcSet={isHovered ? pixelartWebpSmall : perfilWebpSmall} type="image/webp" />
        <motion.img
          src={isHovered ? pixelart : perfil}
          alt="Retrato de Nuria Guevara, desarrolladora web full-stack"
          width="300"
          height="300"
          loading="eager"
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
      </picture>
    </div>
  );
}

export default SwitchImage
