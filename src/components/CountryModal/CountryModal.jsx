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
        bg='green.300'
        color='gray.800'
        size='xl'
        fontSize='xl'
        h='12'
        w='20'
        _hover={{ bg: "green.200", color: "orange.500" }}
        _active={{ bg: "gray.200" }}>
        {props.text}
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{props.header}</ModalHeader>
          <ModalCloseButton />
          <Box w='100%' h='1px' bg='gray.600' border='none'></Box>
          <ModalBody>
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
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
