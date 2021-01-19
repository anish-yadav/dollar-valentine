import { Formik } from "formik";
import Layout from "../../components/layouts/Layout";
import { Question2 } from "../../components/sections/Question";
import Head from "next/head";
import { Flex, Button } from "@chakra-ui/react";
import { useState } from "react";
import questions from "../../constants/questions";

export default function Survey() {
  const [currIndex, changeIndex] = useState<number>(0);

  const nextQuestion = () => {
    if (currIndex < questions.length - 1) changeIndex((i) => i + 1);
  };

  const previousQuestion = () => {
    if (currIndex > 0) changeIndex((i) => i - 1);
  };

  return (
    <Layout>
      <Head>
        <title>Survey2</title>
      </Head>
      <Formik
        initialValues={{ questions: [] }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            console.log(values);
            setSubmitting(false);
          }, 2000);
        }}
        validate={(values) => {
          console.log(values)
        }}
      >
        {({ handleChange, isSubmitting, submitForm,values }) => (
          <Flex
            padding={"10px"}
            flexDirection="column"
            alignItems="center"
            justifyContent="space-between"
          >
            <Question2
              index={currIndex}
              isLast={currIndex == questions.length - 1}
              question={questions[currIndex]}
              handleChange={handleChange(`questions[${currIndex}]`)}
              currValue={values.questions[currIndex]}
              name={`questions[${currIndex}]`}
            />

            <Button
              onClick={previousQuestion}
              disabled={currIndex == 0}
              variant="normal"
              mt="20"
            >
              Previous
            </Button>

            <Button
              onClick={nextQuestion}
              variant="primary"
              mt="20"
              hidden={currIndex == questions.length - 1}
            >
              Next
            </Button>

            <Button
              isLoading={isSubmitting}
              loadingText={"Submitting"}
              type="submit"
              variant="primary"
              onClick={submitForm}
              mt="20"
              hidden={currIndex != questions.length - 1}
            >
              Submit
            </Button>
          </Flex>
        )}
      </Formik>
    </Layout>
  );
}
