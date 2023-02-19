import React from "react";
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
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import CountryInformation from "./CountryComponents/CountryInformation";
import EditLanguages from "./CountryComponents/EditLanguages";

/*
  Renders modal with two possible contents:
  1. Country information
  2. Edit languages

*/
export default function CountryModal(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      {/* Modal Button */}
      <Button
        onClick={onOpen}
        bg='transparent'
        color='gray.800'
        size='xl'
        fontSize='2xl'
        fontWeight='bold'
        h='12'
        w='20'
        
        _hover={{ bg: "green.200", color: "orange.500" }}
        _active={{ bg: "gray.200" }}>
        {props.text}
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
        borderRadius='32'
        >
          <ModalHeader>{props.header}</ModalHeader>
          <ModalCloseButton />
          <Box w='100%' h='1px' bg='gray.600' border='none'></Box> 
          <ModalBody
            display='flex'
            flexDirection='column'
            justifyContent='center'
            h='auto'
          >
            {props.text === "Add" ? (
              <CountryInformation
                countryData={props.countryData}
                setCountryCode={props.setCountryCode}
                countryLanguages={props.countryLanguages}
                setRefreshLanguages={props.setRefreshLanguages}
              />
            ) : (
              <EditLanguages 
              countryData={props.countryData}
              setCountryCode={props.setCountryCode}
              countryLanguages={props.countryLanguages}
              setRefreshLanguages={props.setRefreshLanguages}
              />
            )}


          </ModalBody>
          <ModalFooter>
            <Button 
            colorScheme='blue' 
            mr={3}
            bgColor='blue.400'
            borderRadius='full' 
            px='8'
            py='4'
            onClick={onClose}
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
