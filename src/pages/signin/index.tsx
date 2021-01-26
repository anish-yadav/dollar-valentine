import {
  Box,
  Text,
  Flex,
  Input,
  Button,
  InputGroup,
  InputLeftAddon,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Formik } from "formik";
import { WithRouterProps } from "next/dist/client/with-router";
import { withRouter } from "next/router";
import { RadioCard } from "../../components/custom/MyRadio";
import Layout from "../../components/layouts/Layout";
import EmailInput from "../../components/sections/Email";
import { useEffect, useState } from "react";
import Head from "next/head";
import { signUp } from "../../utils/auth";

interface Props extends WithRouterProps {}

const Signin = (props: Props) => {
  // console.log(props.router);

  const [uid, setUid] = useState<string>("");


  useEffect(() => {
   console.log("UID in form",uid); 
  },[uid])
  return (
    <>
    <Head>
      <title>Sign In</title>
    </Head>
    <Layout>
      <Box maxWidth={450} width="calc(100% - 20px)" overflow="hidden" shadow="xl" rounded={5} pos="relative">
        <EmailInput hidden={uid != ""} handleChange={setUid} />
        <Box p={[4, 8]}>
          <Text variant="header" mb={2}>
            Tell us about you
          </Text>
          <Text variant="body" mb={8}>
            Please tell us a bit about you so that we can personalize your
            onboarding experience
          </Text>
          <Formik
            initialValues={{
              name: "",
              contact: "",
              genderLooking: "Male",
            }}
            onSubmit={async (values, { setErrors, setSubmitting }) => {
              
              console.log("UID here ",uid)
                const response = await signUp({ ...values, uid});
                if(response.user) {
                
                }
                setSubmitting(false);
              
            }}
          >
            {({ handleSubmit, handleChange, values, isSubmitting, errors }) => {
              return (
                <>
                  <Text variant="label">You are looking for</Text>
                  <Flex flexDirection="row">
                    <RadioCard
                      isChecked={values.genderLooking === "Male"}
                      handleChange={handleChange("genderLooking")}
                      shadow="none"
                      borderColor="gray.200"
                    >
                      Male
                    </RadioCard>
                    <RadioCard
                      isChecked={values.genderLooking === "Female"}
                      handleChange={handleChange("genderLooking")}
                      shadow="none"
                      borderColor="gray.200"
                    >
                      Female
                    </RadioCard>
                  </Flex>
                  <Flex flexDirection="column" mt={4}>
                    <Text variant="label" mb={2}>
                      Full name
                    </Text>
                    <Input
                      variant="flushed"
                      name="name"
                      placeholder="Avi Shekhar"
                      py={5}
                      paddingLeft={3}
                      isInvalid={errors && errors.name ? true : false}
                      onChange={handleChange("name")}
                      errorBorderColor="red.500"
                      focusBorderColor="gray.500"
                      value={values.name}
                    />
                  </Flex>
                  <Flex flexDirection="column" mt={4}>
                    <Text variant="label" mb={2}>
                      Phone Number (Not mandatory)
                    </Text>
                    <InputGroup>
                      <InputLeftAddon
                        background="none"
                        border="none"
                        children="+91"
                      />
                      <Input
                        variant={"flushed"}
                        type="tel"
                        name="contact"
                        placeholder="91248xxxxxx"
                        py={5}
                        paddingLeft={3}
                        isInvalid={errors && errors.contact ? true : false}
                        onChange={handleChange("contact")}
                        errorBorderColor="red.500"
                        focusBorderColor="gray.500"
                        value={values.contact}
                      />
                    </InputGroup>
                  </Flex>

                  <Button
                    variant="submit"
                    rightIcon={<ArrowForwardIcon />}
                    isLoading={isSubmitting}
                    loadingText={"Signing up please wait"}
                    onClick={() => handleSubmit()}
                  >
                    Sign Up
                  </Button>
                </>
              );
            }}
          </Formik>
        </Box>
      </Box>
    </Layout>
    </>
  );
};

export default withRouter(Signin);
