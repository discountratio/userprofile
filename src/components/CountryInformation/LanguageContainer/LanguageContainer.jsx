import { AddIcon, CheckIcon } from "@chakra-ui/icons";
import { Flex } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { Checkbox, CheckboxGroup, Box, Text } from "@chakra-ui/react";
import LanguageSlider from "./LanguageSlider/LanguageSlider";

export default function LanguageContainer(props) {
  const language = props.language;

  const [languageLevel, setLanguageLevel] = useState("None");
  const [languageCheckbox, setLanguageCheckbox] = useState(false);
  const [languageCountry, setLanguageCountry] = useState("");
  const [languageFlag, setLanguageFlag] = useState("");

  //reset on new language
  useEffect(() => {
    setLanguageCheckbox(false);
    setLanguageLevel(50);
    setLanguageCountry("");
    setLanguageFlag("");
  }, [language]);

  const languageLevels = {
    0: "None",
    1: "Beginner",
    2: "Working",
    3: "Professional",
    4: "Fluent",
    5: "Native",
  };

  //Handlers
  const handleLanguageCheckbox = (e) => {
    setLanguageCheckbox(e.target.checked);
  };

  const handleLanguageRange = (e) => {
    setLanguageLevel(e.target.value);
  };

  // const handleLanguageCountry = (e) => {
  //   setLanguageCountry(e.target.value);
  // };

  // const handleLanguageFlag = (e) => {
  //   setLanguageFlag(e.target.value);
  // };

  //Adds language and level to local storage, if language already exists, it updates the leves
  const handleAddButton = (e) => {
    e.preventDefault();

    //get language array from local storage
    const temp = window.localStorage.getItem("languageArray");
    const languageArray = temp ? JSON.parse(temp) : [];
    const country = props.countryName;
    const flag = props.countryFlag;

    //create language object
    const languageObject = {
      language: language,
      level: languageLevel,
      country: country,
      flag: flag,
    };

    //check if language already exists in array, if it does, update level
    const languageIndex = languageArray.findIndex(
      (language) => language.language === languageObject.language
    );

    if (languageIndex !== -1) {
      languageArray[languageIndex].level = languageObject.level;
    } else {
      languageArray.push(languageObject);
    }

    //set language array in local storage
    window.localStorage.setItem("languageArray", JSON.stringify(languageArray));
  };

  return (
    <Flex className='language-input-container'
    bg='purple.300'
    color='gray.100'
    alignItems='center'
    >
      <Flex
        className='language-title'
        alignContent='center'
        px='2'
        py='1'
        lineHeight='1.5'
        w='140px'
        
        >
        <Checkbox
          size='lg'
          iconSize='2rem'
          border='3px'
          borderRadius='md'
          borderColor='gray.400'
          colorScheme='green'
          bg='yellow'
          checked={languageCheckbox}
          onChange={handleLanguageCheckbox}
        />
        <Text w='120px'>{language}</Text>
      </Flex>

      {languageCheckbox ? (
        <>
          <Flex
            flexDirection='column'
            width='300px'
            alignItems='center'
            justifyContent='center'>
            <LanguageSlider />
          </Flex>

          <button onClick={handleAddButton}>
            <AddIcon />
          </button>
        </>
      ) : null}
    </Flex>
  );
}
