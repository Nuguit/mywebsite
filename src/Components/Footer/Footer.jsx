import React from 'react';
import { Flex } from '@chakra-ui/react';
import github from "../../Pages/SobreMi/github.svg";

const Footer = () => {
  return (
    <Flex
      padding="15px 10px"
      backgroundColor="#662549"
      color="white"
      flexWrap="wrap"
      justifyContent="space-between"
      alignItems="center"
      textAlign="center"
      width="calc(100% - 20px)"
      margin="0 10px"
    >
      <a href="https://github.com/Nuguit" style={{ marginBottom: "10px" }}>
        <img src={github} title="GitHub" alt="GitHub" width="80" height="80" />
      </a>

      <div className='name' style={{ color: "#F39F5A", fontSize: "1.2rem", marginRight: "50px" }}>
        Contacto: <a href="mailto:nuria@nuriaguevarafuentes.com" style={{ color: 'inherit', transition: 'color 0.3s' }}>nuria@nuriaguevarafuentes.com</a>
      </div>
    </Flex>
  );
}

export default Footer;

