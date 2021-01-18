
import { Box, Flex, Text, Button, Link, TextProps, FlexProps } from "@chakra-ui/react";
import { useState } from "react";
import Logo from "./Logo";

interface MenuProps extends TextProps { 
    children: React.ReactNode;
    isLast?: boolean;
    active?: boolean;
    to: String;
}

const MenuItem = ({ children, isLast,active, to = "/", ...rest }: MenuProps) => {
  return (
    <Text
      mb={{ base: isLast ? 0 : 8, sm: 0 }}
      mr={{ base: 0, sm: isLast ? 0 : 8 }}
      display="block"
      color={active ? "primary.900" : "gray.500"}
      {...rest}
    >
      <Link 
        to={to}
        _hover={{ textDecoration: "none"}}
        >{children}</Link>
    </Text>
  );
};

const CloseIcon = () => (
  <svg width="24" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
    <title>Close</title>
    <path
      fill="black"
      d="M9.00023 7.58599L13.9502 2.63599L15.3642 4.04999L10.4142 8.99999L15.3642 13.95L13.9502 15.364L9.00023 10.414L4.05023 15.364L2.63623 13.95L7.58623 8.99999L2.63623 4.04999L4.05023 2.63599L9.00023 7.58599Z"
    />
  </svg>
);

const MenuIcon = () => (
  <svg
    width="24px"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    fill="black"
  >
    <title>Menu</title>
    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
  </svg>
);

const Header = (props:FlexProps) => {
  const [show, setShow] = useState(false);
  const toggleMenu = () => setShow(!show);

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={8}
      padding="20px 10px"
      bg={"transparent"}
      color={["white", "white", "primary.700", "primary.700"]}
      {...props}
    >
      <Flex align="center">
        <Logo
          w="250px"
          color={["white", "white", "primary.500", "primary.500"]}
        />
      </Flex>

      <Box display={{ base: "block", md: "none" }} onClick={toggleMenu}>
        {show ? <CloseIcon /> : <MenuIcon />}
      </Box>

      <Box
        display={{ base: show ? "block" : "none", md: "block" }}
        flexBasis={{ base: "100%", md: "auto" }}
      >
        <Flex
          align="center"
          justify={["center", "space-between", "flex-end", "flex-end"]}
          direction={["column", "row", "row", "row"]}
          pt={[4, 4, 0, 0]}
        >
          <MenuItem to="/" active={true}>Home</MenuItem>
          <MenuItem to="/how">How It works </MenuItem>
          <MenuItem to="/faetures">Developer </MenuItem>
          <MenuItem to="/signup" isLast>
            <Button
              variant="primary"
              _hover={{
                bg: ["primary.100", "primary.100", "primary.900", "primary.900"]
              }}
            >
              Sign Up
            </Button>
          </MenuItem>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Header;