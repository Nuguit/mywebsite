import React from 'react'
import { Flex } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Flex
  padding={"40px 10px"}
  backgroundColor={"#662549"}
  color={"white"}
  flexWrap={"wrap"}
  justifyContent={"flex-end"}
  >
  <div className='name' style={{ color: "#F39F5A", fontSize: "30px", marginRight:"50px" }}>
    Contacto:<a href="mailto:nuria@nuriaguevarafuentes.com" style={{ textDecoration: 'none', color: 'inherit' }}>nuria@nuriaguevarafuentes.com</a> 
  </div>
</Flex>

  )
}

export default Footer