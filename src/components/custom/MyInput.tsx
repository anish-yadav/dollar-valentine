import { InputGroup, Input, InputRightElement, Button, InputProps } from "@chakra-ui/react"
import { ChangeEvent, useState } from "react"


interface Props extends InputProps { 
    handleChange : (s:string) => void
    hidden: boolean
}

export function PasswordInput({handleChange, hidden, ...rest}: Props) {
  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)

  const changeInput = (e:ChangeEvent<HTMLInputElement>) => {
      handleChange(e.target.value)
  }
  return (
    <InputGroup size="md" hidden={hidden}>
      <Input
        pr="4.5rem"
        type={show ? "text" : "password"}
        placeholder="Enter password"
        onChange={changeInput}
        variant="flushed"
        {...rest}
        />
      <InputRightElement width="4.5rem">
        <Button h="1.75rem" size="sm" onClick={handleClick}>
          {show ? "Hide" : "Show"}
        </Button>
      </InputRightElement>
    </InputGroup>
  )
}