import { Formik } from "formik";
import { Input, Flex, Text, Button } from "@chakra-ui/react";
import { validateEmail } from "../../utils/validate";
import { ArrowForwardIcon } from "@chakra-ui/icons";
interface Props {
  handleChange: (s: string) => void;
  hidden: boolean
}

const EmailInput = ({ handleChange, hidden }: Props) => {
  return (
    <Formik
      initialValues={{ email: "" }}
      onSubmit={(values, { setSubmitting, setErrors }) => {
        setTimeout(() => {
          console.log("Submitting");
          console.log(values)
          const error = validateEmail(values.email);
            console.log("errors", error)
          if (error) {
            setErrors({ email: "Enter a valid email address" });
          } else {
            handleChange(values.email);
          }
          setSubmitting(false);
        }, 1000);
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
          justifyContent={"flex-start"}
        >
          <Text variant="hero">Love is in Air</Text>
          <Text variant="bodyWhite" mt={4}>
            This is the subheader section where you describe the basic benefits
            of your product This is the subheader section where you describe the
            basic benefits of your pro This is the subheader section where you
            describe the basic benefits of your pro
          </Text>
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
          />
          <Button
            variant="submit"
            isLoading={isSubmitting}
            loadingText={"Cheking email"}
            rightIcon={<ArrowForwardIcon />}
            onClick={() => handleSubmit()}
          >
            Proceed to Next
          </Button>
        </Flex>
      )}
    </Formik>
  );
};

export default EmailInput;
