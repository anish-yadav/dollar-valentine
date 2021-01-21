import { InputGroup, Input, InputRightElement, Button } from "@chakra-ui/react"
import { ChangeEvent, useState } from "react"


interface Props { 
    handleChange : (s:string) => void
}

export function PasswordInput({handleChange}: Props) {
  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)

  const changeInput = (e:ChangeEvent<HTMLInputElement>) => {
      handleChange(e.target.value)
  }
  return (
    <InputGroup size="md">
      <Input
        pr="4.5rem"
        type={show ? "text" : "password"}
        placeholder="Enter password"
        onChange={changeInput}
        variant="flushed"
        />
      <InputRightElement width="4.5rem">
        <Button h="1.75rem" size="sm" onClick={handleClick}>
          {show ? "Hide" : "Show"}
        </Button>
      </InputRightElement>
    </InputGroup>
  )
}