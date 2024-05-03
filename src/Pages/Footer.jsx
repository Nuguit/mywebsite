import React from 'react'

const Footer = () => {
  return (
    <Flex
    className="navbar"
      direction={{ base: "column", md: "row" }}
      padding={{ base: "20px", md: "34px 80px" }}
      backgroundColor={"#40A8C4"}
      alignItems="center"
      justifyContent="space-between"
      paddingLeft={"50px"}
    ></Flex>
  )
}

export default Footer