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

import { useState, useEffect } from "react";

function LoginModal(props) {
  const setUserIsLoggedIn = props.setUserIsLoggedIn;

  const [currentModal, setCurrentModal] = React.useState("welcome");

  const handleLogin = () => {
    setCurrentModal("login");
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    console.log(name, value);
  };

  return (
    <>
      <Modal isOpen={true}>
        <ModalHeader>current: {currentModal}</ModalHeader>
        <ModalContent>
          <Button onClick={() => setCurrentModal("welcome")}>Welcome</Button>
          <Button onClick={() => setCurrentModal("login")}>login</Button>
          <Button onClick={() => setCurrentModal("signup")}>signup</Button>
          <Button onClick={() => setCurrentModal("adduserinfo")}>
            adduserinfo
          </Button>

          {currentModal === "welcome" && (
            <ModalBody>
              <Heading>Welcome to Language Exchange!</Heading>
              <Text>
                Language Exchange is a place to connect with people from around
                the world to practice your language skills.
              </Text>

              <Button onClick={handleLogin}>Login</Button>
              <Button onClick={() => setCurrentModal("signup")}>signup</Button>

            </ModalBody>
          )}

          {currentModal === "login" && (
            <ModalBody bg='green.200'>
              <Heading>Login</Heading>
              <Text>
                Login to your account to start connecting with people from
                around the world.
              </Text>

              <Button onClick={() => setCurrentModal("welcome")}>Back</Button>
              <Input
                placeholder='Email'
                type='email'
                name='email'
                onChange={handleInputChange}></Input>

              <Input
                placeholder='Password'
                type='password'
                name='password'
                onChange={handleInputChange}></Input>

              <Button onClick={() => setCurrentModal("welcome")}>Login</Button>
            </ModalBody>
          )}

          {currentModal === "signup" && (
            <ModalBody bg='blue.200'>
              <Heading>Signup</Heading>
              <Text>
                Signup for a new account to start connecting with people from
                around the world.
              </Text>
              <Input
                placeholder='Email'
                type='email'
                name='email'
                onChange={handleInputChange}></Input>
              <Input
                placeholder='Password'
                type='password'
                name='password'
                onChange={handleInputChange}></Input>
              <Input
                placeholder='Confirm Password'
                type='password'
                name='password'
                onChange={handleInputChange}></Input>
              <Button onClick={() => setCurrentModal("welcome")}>Back</Button>
              <Button onClick={() => setCurrentModal("adduserinfo")}>
confirm              </Button>
            </ModalBody>
          )}

          {currentModal === "adduserinfo" && (
            <ModalBody bg='yellow.200'>
              <Heading>Add User Info</Heading>
              <Text>
                Signup for a new account to start connecting with people from
                around the world.
              </Text>
              <Input
                placeholder='First Name'
                type='text'
                name='firstName'
                onChange={handleInputChange}></Input>
              <Input
                placeholder='Last Name'
                type='text'
                name='lastName'
                onChange={handleInputChange}></Input>
              <Input
                placeholder='Country'
                type='text'
                name='country'
                onChange={handleInputChange}></Input>
              <Input
                placeholder='Native Language'
                type='text'
                name='nativeLanguage'
                onChange={handleInputChange}></Input>
              <Input
                placeholder='Learning Language'
                type='text'
                name='learningLanguage'
                onChange={handleInputChange}></Input>
              <Button onClick={() => setCurrentModal("welcome")}>Back</Button>
              <Button onClick={() => setUserIsLoggedIn(true)}>confirm</Button>
            </ModalBody>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

export default LoginModal;
