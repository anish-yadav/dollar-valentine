import {
  Flex,
  HStack,
  InputProps,
  Radio,
  RadioGroup,
  Stack,
  Text,
  useRadioGroup,
} from "@chakra-ui/react";
import { ChangeEvent, useEffect, useState } from "react";
import { QuestionType } from "../../constants/questions";
import MyRadio,{ RadioCard } from "../custom/MyRadio"



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

interface Props2 {
  question: QuestionType;
  handleChange: (e: string) => void;
  index: number;
  name: string;
  isLast: boolean;
  currValue: string
}
export const Question2 = ({ index, question, handleChange, name, currValue }: Props2) => {
  const [_, setValue] = useState<string>(" ");

  const inputChanged = (s: string) => {
    handleChange(s);
    setValue(s);
  };
  const options = question.answers;

  const { getRootProps , getRadioProps } = useRadioGroup({
    name,
    defaultValue: "",
    onChange: inputChanged,
  });

  const group = getRootProps();

  useEffect(() => {
    setValue(currValue)
  },[currValue,index])
  

  return (
    <Flex flex={1} flexDirection="column">
      <Flex flex={1} flexDirection="row">
        <Text variant="questionNo">Q{index + 1})</Text>
        <Flex direction="column">
          <Text variant="question">{question.text}</Text>
          <HStack >
            {options.map((v,i) => {
              return (
                <RadioCard handleChange={handleChange} isChecked={currValue === v} key={i} >
                  {v}
                </RadioCard>
              );
            })}
          </HStack>
        </Flex>
      </Flex>
    </Flex>
  );
};
