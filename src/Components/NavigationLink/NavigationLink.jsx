import React from "react"
import CustomLink from "../CustomLink/CustomLink"
import { Text } from "@chakra-ui/react"

const NavigationLink = ({ children, ...props }) => {
  return (
    <CustomLink {...props}>
      <Text as={"span"} fontSize={"24px"} color={"#F39F5A"} _hover={{ color: "#FFC93C" }}>
        {children}
      </Text>
    </CustomLink>
  )
}

export default NavigationLink
