import { AddIcon, CheckIcon } from "@chakra-ui/icons";
import { Flex, Button, Heading } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { Checkbox, CheckboxGroup, Box, Text } from "@chakra-ui/react";
import LanguageSlider from "./LanguageSlider";

export default function LanguageContainer(props) {
  const language = props.language;

  const [languageLevel, setLanguageLevel] = useState(1);
  const [languageCheckbox, setLanguageCheckbox] = useState(false);
  const [languageAdded, setLanguageAdded] = useState(false);

  //reset on new language
  useEffect(() => {
    setLanguageCheckbox(false);
    setLanguageLevel(1);
  }, [language]);

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
      (language) => language.language === languageObject.language
    );

    if (languageIndex !== -1) {
      languageArray[languageIndex].level = languageObject.level;
    } else {
      languageArray.push(languageObject);
    }

    //set language array in local storage
    setLanguageAdded(true);
    window.localStorage.setItem("languageArray", JSON.stringify(languageArray));
  };

  return (
    <Flex
      className='language-input-container'
      flexDirection='column'
      h='100px'
      bg='gray.200'
      border='2px'>
      <Heading
        as='h3'
        fontSize='md'
        bg='gray.800'
        color='gray.100'
        display='flex'
        alignContent='center'

        px='1'
        h='8'
        
        >
        <Checkbox
          checked='false'
          onChange={handleLanguageCheckbox}
          colorScheme='green'
          size='lg'
          mx='1'
          
        />
        {language}
      </Heading>
      <Flex className='language-title' w='100%' justifyContent='space-between'>
        {languageCheckbox ? (
          <Flex p='4' flexDirection='row' w='100%'>
            <LanguageSlider setLanguageLevel={setLanguageLevel} />

            <Button onClick={handleAddButton}
              bg='transparent'
              color='black'
              _hover = {{bg: 'green.200'}} 
            >
              {!languageAdded ? <Text color='black'>{props.buttonType}</Text> : <CheckIcon boxSize='4' />}
            </Button>
          </Flex>
        ) : null}
      </Flex>
    </Flex>
  );
}
