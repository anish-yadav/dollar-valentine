import { Formik } from "formik";
import Layout from "../../components/layouts/Layout";
import { Question } from "../../components/sections/Question";
import Head from "next/head";
import { Flex, Button } from "@chakra-ui/react";

export default function Survey() {
  return (
    <Layout>
      <Head>
        <title>Survey</title>
      </Head>
      <Formik
        initialValues={{ questions:[]}}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            console.log(values);
            setSubmitting(false);
          }, 2000);
        }}
      >
        {({ handleChange, isSubmitting, submitForm }) => (
          <Flex padding={"10px"} flexDirection="column" alignItems="center" justifyContent="space-between">
            <Question type="radio" handleChange={handleChange("questions[0]")} name="questions[0]" />
            <Button
              isLoading={isSubmitting}
              loadingText={"Submitting"}
              type="submit"
              variant="primary"
              onClick={submitForm}
              mt="20"
            >
              Submit
            </Button>
          </Flex>
        )}
      </Formik>
    </Layout>
  );
}
