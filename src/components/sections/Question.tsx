import {
  Flex,
  HStack,
  InputProps,
  Radio,
  RadioGroup,
  Stack,
  Text,
} from "@chakra-ui/react";
import { ChangeEvent, useEffect, useState } from "react";
import { QuestionType } from "../../constants/questions";
import { RadioCard } from "../custom/MyRadio";

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
  currValue: string;
  nextQuestion: () => void;
}
export const Question2 = ({
  index,
  question,
  handleChange,
  currValue,
  nextQuestion,
}: Props2) => {
  const [, setValue] = useState<string>(" ");

  const inputChanged = (s: string) => {
    handleChange(s);
    setTimeout(() => {
      nextQuestion();
    }, 500);
    setValue(s);
  };
  const options = question.answers;

  useEffect(() => {
    setValue(currValue);
  }, [currValue, index]);

  return (
    <Flex flex={1} flexDirection="column">
      <Flex flex={1} flexDirection="row">
        <Flex
          direction="column"
          alignItems="center"
          justifyContent="space-evenly"
        >
          <Text variant="question">{question.text}</Text>
          <Flex
            align="center"
            justify={["center", "space-between", "flex-end", "flex-end"]}
            direction={["column", "row", "row", "row"]}
            pt={[4, 4, 0, 0]}
          >
            {options.map((v, i) => {
              return (
                <RadioCard
                  handleChange={inputChanged}
                  isChecked={currValue === v}
                  key={i}
                >
                  {v}
                </RadioCard>
              );
            })}
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
