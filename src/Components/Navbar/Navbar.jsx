import { Flex, Text } from "@chakra-ui/layout"
import NavigationLink from "../NavigationLink/NavigationLink"




const Navbar = () => {
  const NAVIGATION_LINK = [
    {
      link: "/aboutme",
      text: "Sobre mí",

    },
    { link: "/portfolio", text: "Portfolio" },
    
  ]

  return (

    <Flex
      direction={{ base: "column", md: "row" }}
      padding={{ base: "20px", md: "34px 80px" }}
      backgroundColor={"#DB8AD3"}
      color={"white"}
      alignItems="center"
      justifyContent="space-between"
    >
      <Flex gap={"34px"}>
        {NAVIGATION_LINK.map(({ link, text }) => {
          const isActiveLink = window.location.pathname === link
          return (
            <NavigationLink
              to={link}
              key={text}
              textDecoration={isActiveLink ? "underline" : "none"}

            >
              <Text>{text}</Text>
            </NavigationLink>
          )
        })}
      </Flex>
      </Flex>


  )
}




export default Navbar