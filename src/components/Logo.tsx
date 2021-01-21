import { Flex, Icon, Text } from "@chakra-ui/react";
import Link from "next/link"

const Logo = (props: any) => {
  return (
    <Link href="/" >
      <Flex flexDirection="row" alignItems="center" {...props}>
        <Icon viewBox="0 0 69 59" width="50px" height={["20px","25px"]} fill="none">
          <path
            d="M62.0881 6.03921C60.4913 4.44164 58.5953 3.17432 56.5086 2.30968C54.4218 1.44503 52.1852 1 49.9264 1C47.6676 1 45.431 1.44503 43.3442 2.30968C41.2575 3.17432 39.3615 4.44164 37.7647 6.03921L34.4507 9.3532L31.1367 6.03921C27.9112 2.81373 23.5366 1.00167 18.975 1.00167C14.4135 1.00167 10.0388 2.81373 6.81333 6.03921C3.58785 9.2647 1.77579 13.6394 1.77579 18.2009C1.77579 22.7624 3.58785 27.1371 6.81333 30.3626L10.1273 33.6766L34.4507 58L58.7741 33.6766L62.0881 30.3626C63.6857 28.7658 64.953 26.8698 65.8176 24.7831C66.6823 22.6964 67.1273 20.4597 67.1273 18.2009C67.1273 15.9421 66.6823 13.7055 65.8176 11.6187C64.953 9.53198 63.6857 7.63604 62.0881 6.03921Z"
            fill="#F43E4F"
            stroke="#F43E4F"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <line
            x1="4.06043"
            y1="33.8569"
            x2="35.8496"
            y2="2.81061"
            stroke="white"
            strokeWidth="5"
          />
        </Icon>
        <Text fontWeight="bold" fontSize={["24px","34px"]} color="primary.900">
          Valentine.
        </Text>
        <Text fontWeight="bold" fontSize={["24px","34px"]} color="primary.400">
          me
        </Text>
      </Flex>
    </Link>
  );
};

export default Logo;
