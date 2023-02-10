import React from "react";
import LanguageContainer from "./LanguageContainer";
import CountrySelection from "./CountrySelection";
import {
  Flex,
  Image,
} from "@chakra-ui/react";
import {AddIcon} from "@chakra-ui/icons";

//Takes in the countryCode prop and renders the infortmation from the fetch responses

export default function CountryInformation(props) {
  const countryData = props.countryData;
  const countryLanguages = props.countryLanguages;
  const buttonType ='Add'
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
                    buttonType={buttonType}
                  />
                );
              })
            : null}
        </Flex>


        {/* <Box className='country-info-text'>
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
        </Box> */}
      </Flex>
    </>
  );
}
