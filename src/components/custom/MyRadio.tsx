import { useRadio, Box, RadioProps } from "@chakra-ui/react";

interface Props extends RadioProps {
  curr: string;
}

export default function MyRadio(props: Props) {
  const { getInputProps, getCheckboxProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Box as="label">
      <input checked={props.curr === props.children} {...input} />
      <Box
        dataChecked={props.curr === props.children}
        {...checkbox}
        cursor="pointer"
        borderWidth="1px"
        borderRadius="md"
        boxShadow="md"
        _checked={{
          bg: "teal.600",
          color: "white",
          borderColor: "teal.600",
        }}
        _focus={{
          boxShadow: "outline",
        }}
        px={5}
        py={3}
      >
        {props.children}
      </Box>
    </Box>
  );
}

interface MyProp {
  handleChange: (s: string) => void;
  children: string;
  isChecked: boolean
}
export const RadioCard = ({ isChecked, children, handleChange }: MyProp) => {
  return (
    <Box
      data-checked={isChecked ? "": undefined}
      onClick={() => handleChange(children)}
      cursor="pointer"
      borderWidth="3px"
      borderRadius="md"
      borderColor="white"
      boxShadow="md"
      color="black"
      fontSize="18px"
      fontWeight="400"
      _checked={{
        bg: "primary.200",
        borderColor: "primary.900"
      }}
      _focus={{
        boxShadow: "outline",
      }}
      px={9}
      py={3}
      my={3}
      mx={2}
      minWidth="150px"
      textAlign="center"
    >
      {children}
    </Box>
  );
};
