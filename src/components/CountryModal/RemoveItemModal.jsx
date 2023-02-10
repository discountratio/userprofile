import React, { useState, useEffect } from "react";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Box,
  Text,
  Flex,
} from "@chakra-ui/react";
import LanguageContainer from './CountryComponents/LanguageContainer'
export default function RemoveItemModal(props) {
  const [languageData, setLanguageData] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
const buttonType ='remove'  // setLanguageData(JSON.parse(window.localStorage.getItem("languageArray")));
  // console.log(languageData);

  const renderLanguageData = () => {
    if (languageData) {
      return languageData.map((language, index) => (
        // <SkillBar
        //   key={index}
        //   language={language.language}
        //   level={language.level}
        //   country={language.country}
        //   flag={language.flag}
        // />

        <Box
          key={index}
          w='100%'
          h='100%'
          bg='gray.100'
          borderRadius='lg'
          p={4}
          m={2}>

          <LanguageContainer
            language={language.language}
            level={language.level}
            country={language.country}
            flag={language.flag}
            buttonType={buttonType}
          />

        </Box>
      ));
    }
  };

  useEffect(() => {
    setLanguageData(JSON.parse(window.localStorage.getItem("languageArray")));
  }, []);

  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Remove Language</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>Are you sure you want to remove this language?</Text>
            <Flex
              flexWrap='wrap'
              alignItems='center'
              justifyContent='center'
              id='user-languages'>
              {renderLanguageData()}
            </Flex>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant='ghost'>Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
