import React from "react";
import LanguageContainer from "./LanguageContainer";
import CountrySelection from "./CountrySelection";
import { Flex, Image } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

//Takes in the countryCode prop and renders the infortmation from the fetch responses

export default function CountryInformation(props) {
  const countryData = props.countryData;
  const countryLanguages = props.countryLanguages;
  const buttonType = "Add";
  return (
    <>
      <Flex flexDirection='column' className='country-info' mt='4'>
        <CountrySelection setCountryCode={props.setCountryCode} />

        <Flex
          className='country-info-flag'
          justifyContent='center'
          alignItems='center'
          gap='4'>
          <Image
            w='300px'
            h='200px'
            objectFit={"contain"}
            src={countryData.flags.svg}
            fallbackSrc='https://via.placeholder.com/300x200'
            alt={countryData.flags.alt || `flag of ${countryData.name.common}`}
            transition='transform 200ms ease-in-out'
            _hover={{
              transform: "scale(1.1)",
            }}
  
          />
          {/* <Image
            w='40px'
            h='80px'
            objectFit={"contain"}
            src={countryData.coatOfArms.svg}
            fallbackSrc='https://via.placeholder.com/40x80'
            alt={countryData.flags.alt || `flag of ${countryData.name.common}`}
            transition='transform 200ms ease-in-out'
            _hover={{
              transform: "scale(1.1)",
            }}
            _active={{
              zIndex: 100,
              position: "fixed",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              w: "600px",
              h: "auto",
            }}
          /> */}
        </Flex>

        <Flex
          flexDirection='column'
          mt='4'
          gap='2'
          p='2'
          className='country-info-languages'>
          {countryLanguages
            ? countryLanguages.map((language, index) => {
                return (
                  <LanguageContainer
                    key={index}
                    language={language}
                    countryName={countryData.name.common}
                    countryFlag={countryData.flags.svg}
                    buttonType={buttonType}
                    setRefreshLanguages ={props.setRefreshLanguages }
                  />
                );
              })
            : null}
        </Flex>
      </Flex>
    </>
  );
}
