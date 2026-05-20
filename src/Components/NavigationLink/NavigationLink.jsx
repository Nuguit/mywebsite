import React from "react"
import CustomLink from "../CustomLink/CustomLink"
import { Text } from "@chakra-ui/react"

const NavigationLink = ({ children, ...props }) => {
  return (
    <CustomLink {...props}>
      <Text
        as={"span"}
        fontSize={"13px"}
        fontFamily="'Space Mono', monospace"
        letterSpacing="1.5px"
        textTransform="uppercase"
        color={"#8892b0"}
        _hover={{ color: "#00e5a0" }}
        transition="color 0.2s ease"
      >
        {children}
      </Text>
    </CustomLink>
  )
}

export default NavigationLink
