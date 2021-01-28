import { Flex, Image } from "@chakra-ui/react";

export default function Loading() {
  return (
    <Flex justify="center" alignItems="center">
      <Image maxHeight={"100vh"} src="/valentine.gif" />
    </Flex>
      );
}
