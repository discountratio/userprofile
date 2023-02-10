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
const buttonType = 'Edit?' // setLanguageData(JSON.parse(window.localStorage.getItem("languageArray")));
  // console.log(languageData);

  const [languageLevel, setLanguageLevel] = useState(1);

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
      <Button onClick={onOpen} 
           bg='green.300'
           color='gray.800'
           size='xl'
           fontSize='xl'
           h='12'
           w='20'
            m='4'

           _hover={{ bg: "green.200", color: "orange.500" }}
           _active={{ bg: "gray.200" }}
      
      >Edit</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Languages</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
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
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
