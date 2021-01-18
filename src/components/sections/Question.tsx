import {
  Flex,
  Input,
  InputProps,
  Radio,
  RadioGroup,
  Stack,
  Text,
} from "@chakra-ui/react";
import { ChangeEvent, useState } from "react";

interface Props extends InputProps {
  handleChange: (e: string | ChangeEvent<any>) => void;
}

export const Question = (props: Props) => {
  const [value, setValue] = useState<string>(" ");

  const inputChanged = (s: string) => {
    props.handleChange(s);
    setValue(s);
  };

  return (
    <Flex flex={1} flexDirection="column">
      <Flex flex={1} flexDirection="row">
        <Text variant="questionNo">Q1) </Text>
        <Flex direction="column">
          <Text variant="question">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            laboriosam iste suscipit ut dolor, laborum corporis ad sit quis
            porro nulla inventore nobis vel assumenda quo! Blanditiis tempora
            voluptatum quo.?
          </Text>
          <RadioGroup name={props.name} onChange={inputChanged} value={value}>
            <Stack>
              <Radio value="One">One</Radio>
              <Radio value="Two">Two</Radio>
              <Radio value="Three">Three</Radio>
              <Radio value="Four">Four</Radio>
            </Stack>
          </RadioGroup>
        </Flex>
      </Flex>
    </Flex>
  );
};
