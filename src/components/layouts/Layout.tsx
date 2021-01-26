import { Flex } from "@chakra-ui/react";
import Header from "../Header";

interface Props {
    children : React.ReactNode;
    loggedin: boolean
}

export default function Layout(props:Props) {
  return (
    <Flex
      direction="column"
      align="center"
      maxW={{ xl: "1200px" }}
      m="0 auto"
      minH="100vh"
    >
      <Header loggedin={props.loggedin} />
      {props.children}
    </Flex>
  );
}