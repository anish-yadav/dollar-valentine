import {
  Box,
  Button,
  Flex,
  Image,
  Heading,
  Stack,
  FlexProps,
} from "@chakra-ui/react";
import Link from "next/link";

interface Props extends FlexProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
}

export default function Hero({
  title,
  subtitle,
  ctaLink,
  ctaText,
  ...rest
}: Props) {
  return (
    <Flex
      align="center"
      justify={{ base: "center", md: "space-around", xl: "space-between" }}
      direction={{ base: "column-reverse", md: "row" }}
      wrap="nowrap"
      minH="70vh"
      px={8}
      mb={16}
      {...rest}
    >
      <Stack
        spacing={4}
        w={{ base: "80%", md: "40%" }}
        align={["center", "center", "flex-start", "flex-start"]}
      >
        <Heading
          as="h1"
          fontSize="48px"
          fontWeight="bold"
          color="black"
          textAlign={["center", "center", "left", "left"]}
        >
          {title}
        </Heading>
        <Heading
          as="h6"
          fontSize="18px"
          color="#2e364a"
          opacity="0.8"
          fontWeight="normal"
          lineHeight={1.5}
          textAlign={["center", "center", "left", "left"]}
        >
          {subtitle}
        </Heading>
        <Link href={ctaLink} >
          <Button
            variant="primary"
            padding="20px 20px"
              _hover={{
                bg: ["primary.100", "primary.100", "primary.900", "primary.900"]
              }}
              _focus={{boxShadow:"none"}}
          >
            {ctaText}
          </Button>
        </Link>
      </Stack>
      <Box w={{ base: "80%", sm: "60%", md: "50%" }} mb={{ base: 12, md: 0 }}>
        {/* TODO: Make this change every X secs */}
        <Image src="/hero.png" size="100%"/>
      </Box>
    </Flex>
  );
}
