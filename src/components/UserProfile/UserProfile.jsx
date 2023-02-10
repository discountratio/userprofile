import React from "react";
import { Heading, Flex, Box } from "@chakra-ui/react";
import CountryModal from "../CountryModal/CountryModal";
import RemoveItemModal from "../CountryModal/RemoveItemModal";
import UserLanguages from "./UserLanguages/UserLanguages";
import UserInformation from "./UserInformation";

export default function UserProfile(props) {
  return (
    <Flex
      className='user-profile-ccontainer'
      flexDirection='column'
      px={[8, 12, 24, 32]}
      w='full'
      h='auto'
      _after={{
        position: "absolute",
        left: "0",
        zIndex: "-1",
        content: '""',
        w: "full",
        h: "240",
        bgGradient: "linear(to-r, blue.100, white 80%)",
      }}>
      <UserInformation />
      <Flex
        className='user-modal-heading'
        justifyContent='space-between'
        fontSize='2xl'
        alignItems='center'
        px={[8, 12, 24, 32]}
        >
        <Heading as='h2' fontSize='2xl'>My Languages</Heading>
        <Flex
          className='modal-container'
          flexDirection={["column", "column", "row"]}
          alignItems='center'
          justifyContent='center'
          
          >
          <CountryModal
            countryData={props.countryData}
            setCountryCode={props.setCountryCode}
            countryLanguages={props.countryLanguages}
            setRefreshLanguages={props.setRefreshLanguages}
          />
          <RemoveItemModal />
        </Flex>
      </Flex>

      <UserLanguages 
    
        />
    </Flex>
  );
}
