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
import { useRouter } from "next/router";
import { NextPageContext, NextApiRequest } from "next";
import { parseCookies } from "nookies";
import { VERIFYCOOKIE } from "../../types";
import verifyCookie from "../../utils/verifyCookie";
interface Props extends WithRouterProps {}

export async function getServerSideProps(
  context:
    | Pick<NextPageContext, "req">
    | { req: NextApiRequest }
    | { req: any }
    | null
    | undefined
) {
  var propsObject: VERIFYCOOKIE = {
    authenticated: false,
    usermail: "",
    uid: null,
  };
  const cookies = parseCookies(context);
  if (cookies.user) {
    const authentication = await verifyCookie(cookies.user);
    propsObject.authenticated = authentication
      ? authentication.authenticated
      : false;
    propsObject.usermail = authentication ? authentication.usermail : "";
  }

  return {
    props: propsObject,
  };
}

const Signin = ({ authenticated }: Props & VERIFYCOOKIE) => {
  // console.log(props.router);
  const router = useRouter();

  const [uid, setUid] = useState<string>("");

  useEffect(() => {}, [uid]);
  return (
    <>
      <Head>
        <title>Sign In</title>
      </Head>
      <Layout loggedin={authenticated}>
        <Box
          maxWidth={450}
          width="calc(100% - 20px)"
          overflow="hidden"
          shadow="xl"
          rounded={5}
          pos="relative"
        >
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
              onSubmit={async (values, { setSubmitting }) => {
                console.log("UID here ", uid);
                const response = await signUp({ ...values, uid });
                if (response.user) {
                  router.push({
                    pathname: router.query.redirect
                      ? (router.query.redirect as string)
                      : "/",
                  });
                }
                setSubmitting(false);
              }}
            >
              {({
                handleSubmit,
                handleChange,
                values,
                isSubmitting,
                errors,
              }) => {
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
