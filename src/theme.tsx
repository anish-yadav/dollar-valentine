import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

const fonts = { mono: `'Menlo', monospace` };

const breakpoints = createBreakpoints({
  sm: "40em",
  md: "52em",
  lg: "64em",
  xl: "80em",
});

const styles = {
  global: {
    body: {
      fontFamily: `'Nunito', sans-serif`,
    },
    '*' : {
      scrollbarWidth: "thin",
      scrollbarColor: "primary.900 primary.100"
    },
    "*::-webkit-scrollbar":{
      width:"10px"
    },
    "*::-webkit-scrollbar-track":{
      background:"primary.100",
    },
    "*::-webkit-scrollbar-thumb":{
      backgroundColor:"primary.900",
      borderRadius:"20px",
      border: "3px solid primary.100"
    },
    a: {
      _hover: {
        textDecoration: "none",
        pointer: "hand",
      },
    },
    button: {
      _focus: {
        boxShadow: "none !important",
      },
    },
  },
};

const Text = {
  variants: {
    questionNo: {
      fontWeight: "600",
      color: "black",
      marginRight: "8px",
    },
    question: {
      fontWeight: "400",
      color: "gray.700",
      fontSize:"24px",
      textAlign:"center"
    },
    header:{
      fontWeight: "600",
      color:"black",
      fontSize:"22px"
    },
    body:{
      color:"gray.500",
      fontWeight:"500"
    },
    label :{ 
      color:"gray.500",
      fontWeight:600
    },
    bodyWhite:{
      color:"gray.100"
    },
    hero:{
      fontSize:"54px",
      color:"white",
      fontWeight:"600",
      lineHeight: 1.2
    }
  },
};
const theme = extendTheme({
  colors: {
    black: "#2e364a",
    primary: {
      100: "#FBF5F6",
      200: "#fdebed",
      300: "#fcd8db",
      400: "#FCA1AB",
      500: "#f88b95",
      600: "#f77783",
      700: "#f66472",
      800: "#f55160",
      900: "#ff2c64",
    },
  },
  fonts,
  breakpoints,
  components: {
    Button: {
      variants: {
        primary: {
          bg: "primary.900",
          color: "white",
          fontWeight: "400",
        },
        prev: {
          bg: "white",
          color: "primary.900",
          padding: "10px 30px",
          boxShadow:"4px 2px 2px #FBF5F6",
          margin:"auto 20px"
        },
        next: {
          bg: "primary.900",
          color: "white",
          fontWeight: "400",
          padding:"10px 30px",
          margin:"auto 20px"
        },
        submit:{
          background:"primary.900",
          color:"white",
          width:"100%",
          marginTop:"20px",
          fontSize:"18px",
          fontWeight: "400"
        }
      },
    },
    Text,
  },
  styles,
});

export default theme;
