import { Flex, Text } from "@chakra-ui/layout"
import NavigationLink from "../NavigationLink/NavigationLink"




const Navbar = () => {
  const NAVIGATION_LINK = [
    {
      link: "/about",
      text: "Sobre mí",

    },
    { link: "/curriculum", text: "Curriculum" },

    { link: "/safemap", text: "SafeMap" }
    
  ]

  return (

    <Flex
    className="name"
      direction={{ base: "column", md: "row" }}
      padding={{ base: "20px", md: "34px 80px" }}
      backgroundColor={"#662549"}
      alignItems="center"
      justifyContent="space-between"
      paddingLeft={"50px"}
    >
      <Flex gap={"54px"}>
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