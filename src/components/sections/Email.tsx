import { Formik } from "formik";
import { Input, Flex, Text, Button, Box, InputGroup, InputRightElement } from "@chakra-ui/react";
import { validateEmail } from "../../utils/validate";
import { ArrowForwardIcon, CloseIcon } from "@chakra-ui/icons";
import { useEffect, useState } from "react";
import signIn, { signUpWithEP } from "../../utils/auth";
import { useRouter } from "next/router";

interface Props {
  handleChange: (uid: string) => void;
  hidden: boolean;
}

const EmailInput = ({ handleChange, hidden }: Props) => {
  const router = useRouter();
  const [showPassInp, setPassInp] = useState<boolean>(false);
  const [showEmailInp, setEmailInp] = useState<boolean>(true);

  useEffect(() => {}, [showEmailInp, showPassInp]);

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={async (values, { setSubmitting, setErrors }) => {
        const error = validateEmail(values.email);
        console.log("errors", error);
        if (error) {
          setErrors({ email: "Enter a valid email address" });
          setEmailInp(true);
          setPassInp(false);
        } else {
          // if i am able to login at this point then its ok otherwise continue;
          const {error, user} = await signIn(values.email, values.password);
          if (error) {
            var uid = user?.uid;
            console.log(error)
            if (error.code === "auth/user-not-found"){
              var { uid : suid } = await signUpWithEP(values.email, values.password);
              uid = suid;
            }else if(error.code === "auth/wrong-password"){
              console.log("here")
              setErrors({password : "Wrong Password"});
              setEmailInp(false);
              setPassInp(true);
              setSubmitting(false);
              return;
            }
            if (!uid) {
              alert("Internal server error please try again later");
            } else {
              handleChange(uid);
            }
            //handleChange(values.email, values.password);
          } else {
            router.push({ pathname: "/survey" });
          }
        }
        setSubmitting(false);
      }}
    >
      {({ values, handleChange, handleSubmit, errors, isSubmitting }) => (
        <Flex
          pos="absolute"
          hidden={hidden}
          height={"100%"}
          width={"100%"}
          background="primary.900"
          zIndex={999}
          p={[4, 8]}
          flexDirection={"column"}
          borderRadius={8}
          justifyContent={"space-between"}
        >
          <Box>
            <Text variant="hero">Love is in Air</Text>
            <Text variant="bodyWhite" mt={4}>
              This is the subheader section where you describe the basic
              benefits of your product This is the subheader section where you
              describe the basic benefits of your pro This is the subheader
              section where you describe the basic benefits of your pro
            </Text>
          </Box>
          <Box>
            <InputGroup>
            <Input
              mt={10}
              variant="flushed"
              onChange={handleChange("email")}
              value={values.email}
              placeholder="email@mail.com"
              color="white"
              _placeholder={{
                color: "gray.200",
              }}
              focusBorderColor="white"
              isInvalid={errors && errors.email ? true : false}
              errorBorderColor={"red"}
              hidden={!showEmailInp}
            />
            <InputRightElement top={"auto"} bottom={0} children={errors && errors.email ? <CloseIcon color="white" /> : ""} />
            </InputGroup>
            <InputGroup>
            <Input
              mt={10}
              variant="flushed"
              onChange={handleChange("password")}
              value={values.password}
              placeholder="password"
              color="white"
              _placeholder={{
                color: "gray.200",
              }}
              focusBorderColor="white"
              isInvalid={errors && errors.password ? true : false}
              errorBorderColor={"red"}
              hidden={!showPassInp}
            />
            <InputRightElement top={"auto"} bottom={0} children={errors && errors.password ? <CloseIcon color="white" /> : ""} />
            </InputGroup>
            <Button
              variant="submit"
              background="primary.200"
              color="black"
              isLoading={isSubmitting}
              loadingText={"Cheking email"}
              rightIcon={<ArrowForwardIcon />}
              onClick={() => {
                if (showPassInp && values.password.length > 5) {
                  handleSubmit();
                } else {
                  setEmailInp(false);
                  setPassInp(true);
                }
              }}
            >
              Proceed to Next
            </Button>
          </Box>
        </Flex>
      )}
    </Formik>
  );
};

export default EmailInput;
