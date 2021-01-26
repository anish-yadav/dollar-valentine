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
    <Layout loggedin={true}>
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
          console.log(values);
        }}
      >
        {({ handleChange, isSubmitting, submitForm, values }) => (
          <Flex
            flex={0.8}
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
              nextQuestion={nextQuestion}
              currValue={values.questions[currIndex]}
              name={`questions[${currIndex}]`}
            />

            <Flex
              align="center"
              justify={["space-between", "flex-end", "flex-end"]}
              direction={[ "row", "row", "row"]}
              pt={[4, 4, 0, 0]}
            >
              <Button
                onClick={previousQuestion}
                disabled={currIndex == 0}
                variant="prev"
              >
                Previous
              </Button>

              <Button
                onClick={nextQuestion}
                variant="next"
                hidden={currIndex == questions.length - 1}
              >
                Next
              </Button>

              <Button
                isLoading={isSubmitting}
                loadingText={"Submitting"}
                type="submit"
                variant="next"
                onClick={submitForm}
                hidden={currIndex != questions.length - 1}
              >
                Submit
              </Button>
            </Flex>
          </Flex>
        )}
      </Formik>
    </Layout>
  );
}