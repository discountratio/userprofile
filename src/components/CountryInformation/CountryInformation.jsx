import React from "react";
import { useState, useEffect, useRef } from "react";
import LanguageContainer from "./LanguageContainer/LanguageContainer";
import CountrySelection from "./CountrySelection/CountrySelection";
import {
  Heading,
  Link,
  Text,
  Flex,
  Box,
  Image,
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

//Takes in the countryCode prop and renders the infortmation from the fetch responses

export default function CountryInformation(props) {
  const countryCode = props.countryCode;
  const setCountryCode = props.setCountryCode;
  const countryData = props.countryData;
  const setCountryData = props.setCountryData;

  const { isOpen, onOpen, onClose } = useDisclosure();

  //set states
  const [countryLanguages, setCountryLanguages] = useState([]);
  // const [countryNameOffical, setCountryNameOffical] = useState("");
  // const [countryNameCommon, setCountryNameCommon] = useState("");
  // const [countryCapital, setCountryCapital] = useState("");
  // const [countryPopulation, setCountryPopulation] = useState("");
  // const [countryRegion, setCountryRegion] = useState("");
  // const [countrySubregion, setCountrySubregion] = useState("");
  // const [countryFlagIcon, setCountryFlagIcon] = useState("");
  // const [countryFlagSVG, setCountryFlagSVG] = useState("");
  // const [countryFlagAlt, setCountryFlagAlt] = useState("");
  // const [countryCoatOfArms, setCountryCoatOfArms] = useState("");

  const restCountriesURL = "https://restcountries.com/v3.1/";

  //convert object to array
  function objectEntriesToArray(object) {
    if (object) {
      const array = [];
      for (const [key, value] of Object.entries(object)) {
        array.push(value);
        // console.log(`${key}: ${value}`);
      }
      // console.log(array);
      return array;
    }
    return null;
  }

  const displayCountryData = () => {
    if (countryData) {
      console.log(`
   ___________________Country Data____________________
   |Input Code:  ${countryCode}
   |ResponseCode:${countryData.cca2}
   |Official:    ${countryData.name.official}
   |Common:      ${countryData.name.common}
   |Capital:     ${countryData.capital}
   |Population:  ${countryData.population}
   |Region:      ${countryData.region}
   |Subregion:   ${countryData.subregion}
   |Languages:   ${objectEntriesToArray(countryData.languages)}
   |CoatOfArms:  ${countryData.coatOfArms.svg}
   |Flag:        ${countryData.flag}
   |FlagSrc:     ${countryData.flags.svg}
   |FlagAlt:     ${countryData.flags.alt}
   _________________________________________________
    `);
    }
  };

  const setCountryStates = () => {
    if (countryData) {
      setCountryLanguages(objectEntriesToArray(countryData.languages));
    }
  };

  const saveCountryDataToLocalStorage = () => {
    window.localStorage.setItem("countryData", JSON.stringify(countryData));
  };

  const fetchCountryDataFromCode = async () => {
    const code = countryCode;
    const response = await fetch(restCountriesURL + "name/" + code);
    const data = await response.json();
    const country = JSON.parse(JSON.stringify(data[0]));
    setCountryData(country);
    saveCountryDataToLocalStorage();
    return country;
  };

  useEffect(() => {
    if (countryCode) {
      fetchCountryDataFromCode();
      displayCountryData();
    }
  }, [countryCode]);

  useEffect(() => {
    if (countryData) {
      setCountryStates();
      saveCountryDataToLocalStorage();
    }
  }, [countryData]);

  // useEffect(() => {
  //   displayCountryData();
  // }, [countryData]);

  return (
    <>
      <Flex flexDirection='column' className='country-info' mt='4'>
        <CountrySelection
          setCountryCode={setCountryCode}
          fetchCountryDataFromCode={fetchCountryDataFromCode}
          setCountryStates={setCountryStates}
        />

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
          />
          <Image
            w='100px'
            h='200px'
            objectFit={"contain"}
            src={countryData.coatOfArms.svg}
            fallbackSrc='https://via.placeholder.com/200x200'
            alt={countryData.flags.alt || `flag of ${countryData.name.common}`}
          />
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
                  />
                );
              })
            : null}
        </Flex>

        <Box className='country-info-text'>
          <Text>
            <strong>Official</strong>: {countryData.name.official}
          </Text>

          <Text>
            <strong>Common</strong>: {countryData.name.common}
          </Text>
          <Text>
            <strong>Capital</strong>: {countryData.capital}
          </Text>
          <Text>
            <strong>Region</strong>: {countryData.region}
          </Text>
          <Text>
            <strong>Sub-Region</strong>: {countryData.subregion}
          </Text>

          <Text>
            <strong>Population</strong>: {countryData.population}
          </Text>
        </Box>
      </Flex>
    </>
  );
}
