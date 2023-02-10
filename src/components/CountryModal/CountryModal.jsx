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

export default function CountryModal(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        onClick={onOpen}
        bg='transparent'
        color='gray.800'
        size='xl'
        _hover={{ bg: "gray.100", color: "orange.500" }}
        _active={{ bg: "gray.200" }}
        _focus={{ boxShadow: "none" }}>
        <AddIcon />
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />

        <ModalContent>
          <ModalHeader>Add a Language</ModalHeader>

          <ModalCloseButton />
          <Box w='100%' h='1px' bg='gray.600' border='none'></Box>

          <ModalBody>
            <CountryInformation
              countryData={props.countryData}
              setCountryCode={props.setCountryCode}
              countryLanguages={props.countryLanguages}
            />
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
