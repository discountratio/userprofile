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
} from "@chakra-ui/react";

import CountryInformation from "../CountryInformation";

export default function CountryModal(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const countryCode = props.countryCode;
  const setCountryCode = props.setCountryCode;
  const countryData = props.countryData;
  const setCountryData = props.setCountryData;

  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        
        <ModalContent>
        <ModalHeader>Modal Title</ModalHeader>
          
          <CountryInformation
            countryData={props.countryData}
            setCountryData={props.setCountryData}
            countryCode={props.countryCode}
            setCountryCode={props.setCountryCode}
          />


          <ModalCloseButton />
          <ModalBody></ModalBody>

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
