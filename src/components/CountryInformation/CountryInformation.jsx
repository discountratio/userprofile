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
  const [countryNameOffical, setCountryNameOffical] = useState("");
  const [countryNameCommon, setCountryNameCommon] = useState("");
  const [countryCapital, setCountryCapital] = useState("");
  const [countryPopulation, setCountryPopulation] = useState("");
  const [countryRegion, setCountryRegion] = useState("");
  const [countrySubregion, setCountrySubregion] = useState("");
  const [countryFlagIcon, setCountryFlagIcon] = useState("");
  const [countryFlagSVG, setCountryFlagSVG] = useState("");
  const [countryFlagAlt, setCountryFlagAlt] = useState("");
  const [countryCoatOfArms, setCountryCoatOfArms] = useState("");

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

  const consoleLogCountryData = () => {
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
      setCountryNameOffical(countryData.name.official);
      setCountryNameCommon(countryData.name.common);
      setCountryCapital(countryData.capital);
      setCountryPopulation(countryData.population);
      setCountryRegion(countryData.region);
      setCountrySubregion(countryData.subregion);
      setCountryFlagIcon(countryData.flag);
      setCountryFlagSVG(countryData.flags.svg);
      setCountryFlagAlt(countryData.flags.alt);
      setCountryCoatOfArms(countryData.coatOfArms.svg);
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
    }
  }, [countryCode]);

  useEffect(() => {
    if (countryData) {
      setCountryStates();
      saveCountryDataToLocalStorage();
    }
  }, [countryData]);

  useEffect(() => {
    consoleLogCountryData();
  }, [countryData]);

  return (
    <>
      <Flex flexDirection='column' className='country-info'>
        <Heading as='h2'>Add A Language</Heading>
        <CountrySelection
          setCountryCode={setCountryCode}
          fetchCountryDataFromCode={fetchCountryDataFromCode}
          setCountryStates={setCountryStates}
        />
        <div className='country-info__container'>
          <Flex>
            <Box>
              <Image
                src={countryFlagSVG ? countryFlagSVG : countryFlagIcon}
                alt={
                  countryFlagAlt
                    ? countryFlagAlt
                    : `flag of ${countryNameCommon}`
                }
              />
            </Box>
            <Box>
              <Image
                src={countryCoatOfArms ? countryCoatOfArms : countryFlagIcon}
                alt={
                  countryCoatOfArms
                    ? `The ${countryNameCommon} Coat of Arms`
                    : "No coat of arms here."
                }
              />
            </Box>
          </Flex>
          <div className='country-info__container__info__languages'>
            {countryLanguages
              ? countryLanguages.map((language, index) => {
                  return (
                    <LanguageContainer
                      key={index}
                      language={language}
                      countryName={countryNameCommon}
                      countryFlag={countryFlagSVG}
                    />
                  );
                })
              : null}
          </div>

          <Text>
            <strong>Official</strong>: {countryNameOffical}
          </Text>

          <Text>
            <strong>Common</strong>: {countryNameCommon}
          </Text>
          <Text>
            <strong>Capital</strong>: {countryCapital}
          </Text>
          <Text>
            <strong>Region</strong>: {countryRegion}
          </Text>
          <Text>
            <strong>Sub-Region</strong>: {countrySubregion}
          </Text>

          <Text>
            <strong>Population</strong>: {countryPopulation}
          </Text>
        </div>
      </Flex>
    </>
  );
}
