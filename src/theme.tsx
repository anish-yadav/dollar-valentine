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
      },
    },
    Text,
  },
  styles,
});

export default theme;
