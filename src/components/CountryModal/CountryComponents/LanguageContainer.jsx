import { AddIcon, CheckIcon, DeleteIcon } from "@chakra-ui/icons";
import { Flex, Button, Heading } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { Checkbox, CheckboxGroup, Box, Text } from "@chakra-ui/react";
import LanguageSlider from "./LanguageSlider";

export default function LanguageContainer(props) {
  const language = props.language;
  const [languageLevel, setLanguageLevel] = useState(props.level);
  const [languageCheckbox, setLanguageCheckbox] = useState(false);
  const [languageAdded, setLanguageAdded] = useState(false);


      
  //Handlers
  const handleLanguageCheckbox = (e) => {
    setLanguageCheckbox(e.target.checked);
  };

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
      (language) =>
        language.language === languageObject.language &&
        language.country === languageObject.country
    );
    console.log(languageArray[languageIndex]);
    if (languageIndex !== -1) {
      languageArray[languageIndex].level = languageObject.level;
    } else {
      languageArray.push(languageObject);
    }

    //set language array in local storage
    setLanguageAdded(true);
    props.setRefreshLanguages(true);
    window.localStorage.setItem("languageArray", JSON.stringify(languageArray));
  };

  return (
    <Flex
      className='language-input-container'
      flexDirection='column'
      h='auto'
      bg='gray.200'
      border='2px'>
      <Heading
        as='h3'
        fontSize='md'
        bg='gray.800'
        color='gray.100'
        display='flex'
        alignContent='center'
        h='8'>
        <Checkbox
          checked={languageCheckbox}
          onChange={handleLanguageCheckbox}
          colorScheme='green'
          size='lg'
          mx='1'
        />
        {props.type === "edit"
          ? `${language}  -  ${props.countryName} `
          : language}
      </Heading>

      <Flex
        className='language-title'
        w='100%'
        justifyContent='space-between'
        alignContent='center'
        h='fit-content'>
        {languageCheckbox ? (
          <Flex p='4' flexDirection='row' w='100%'>
            <LanguageSlider
              setLanguageLevel={setLanguageLevel}
              languageLevel={languageLevel}
              language = {language}
            />
            <Button
              onClick={handleAddButton}
              bg='transparent'
              color='black'
              _hover={{ bg: "green.200" }}>
              <AddIcon />
            </Button>
          </Flex>
        ) : null}
      </Flex>
    </Flex>
  );
}
