import {
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  ModalHeader,
  ModalFooter,
  ModalCloseButton,
  Heading,
  Button,
  Text,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  useDisclosure,
  useToast,
  Box,
  Flex,
  Stack,
  Link,
} from "@chakra-ui/react";
import React from "react";

import { useForm } from "react-hook-form";

import { useEffect } from "react";

function LoginModal(props) {
  const setUserLogin = props.setUserLogin;

  const [currentModal, setCurrentModal] = React.useState("welcome");
  const [refreshScreen, setRefreshScreen] = React.useState(false);
  useEffect(() => {}, [refreshScreen]);

  const handleLogin = () => {
    setCurrentModal("login");
  };

  const form = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
    errors: {},
    
  });

  const formValidation = {
    username: {
      required: {
        value: true,
        message: "Username is required",
      },
    },
    password: {
      required: {
        value: true,
        message: "Password is required",
      },
    },
    confirmPassword: {
      required: {
        value: true,
        message: "Confirm Password is required",
      },
    },
  };

  return (
    <>
      <Modal isOpen={true}>
        <ModalHeader>current: {currentModal}</ModalHeader>

        {currentModal === "welcome" ? (
          <ModalContent bg='gray.100' p='4' color='blue.300' fontWeight='bold'>
            <Text>
              Welcome to Lingo - a social netword for language learners.{" "}
            </Text>
            <Text> Please login or signup to continue. </Text>
            <Button
              borderRadius='full'
              color='gray.100'
              bg='blue.400'
              m='1'
              w='32'
              onClick={() => setCurrentModal("login")}>
              Login
            </Button>
            <Button
              borderRadius='full'
              color='gray.100'
              bg='blue.400'
              m='1'
              w='32                                                                                                                                                                                                                                                                                                                                                                                                                                   '
              onClick={() => setCurrentModal("signup")}>
              Sign Up
            </Button>
          </ModalContent>
        ) : null}

        {currentModal === "login" ? (
          <ModalContent>
            <Heading as='h2'>LOGIN SCREEN</Heading>
            <form onSubmit={form.handleSubmit((data) => console.log(data))}>
              <FormControl id='username' isRequired>
                <FormLabel>Username</FormLabel>
                <Input
                  type='text'
                  placeholder='Username'
                  {...form.register("username", formValidation.username)}
                />
                <FormHelperText>{form.errors.username?.message}</FormHelperText>
              </FormControl>
              <FormControl id='password' isRequired>
                <FormLabel>Password</FormLabel>
                <Input
                  type='password'
                  placeholder='Password'
                  {...form.register("password", formValidation.password)}
                />
                <FormHelperText>{form.errors.password?.message}</FormHelperText>
              </FormControl>
              <Button type='submit'>Login</Button>
            </form>
          </ModalContent>
        ) : null}

        {currentModal === "signup" ? (
          <ModalContent>
            <Heading as='h2'>LOGIN SCREEN</Heading>
            <input type='text' placeholder='Username' />
            <input type='password' placeholder='Password' />
            <input type='password' placeholder='Confirm Password' />
            <button onClick={() => setUserLogin(true)}>Signup</button>
          </ModalContent>
        ) : null}

        {currentModal === "addUserInfo" ? (
          <ModalContent>
            <Heading as='h2'>LOGIN SCREEN</Heading>
            <input type='text' placeholder='Username' />
            <input type='text' placeholder='Image Location' />
            <input type='text' placeholder='About' />
            <input type='text' placeholder='Country' />
            <input type='password' placeholder='Password' />
            <button onClick={() => setUserLogin(true)}>Signup</button>
          </ModalContent>
        ) : null}
      </Modal>
    </>
  );
}

export default LoginModal;
