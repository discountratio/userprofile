import {
  AddIcon,
  CheckIcon,
  DeleteIcon,
  CloseIcon,
  EditIcon,
} from "@chakra-ui/icons";
import { Flex, Button, Heading } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { Checkbox, CheckboxGroup, Box, Text } from "@chakra-ui/react";
import LanguageSlider from "./LanguageSlider";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
} from "@chakra-ui/react";

export default function LanguageContainer(props) {
  const language = props.language;
  const setRefreshLanguages = props.setRefreshLanguages;
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

    setLanguageAdded(true);
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

  const handleDeleteButton = (e) => {
    e.preventDefault();
    console.log("delete button");

    const languageObject = {
      language: language,
      country: props.countryName,
    };

    const deletePrompt = window.prompt(
      `Are you sure you want to delete ${language}? Type "yes" to confirm.`
    );

    if (deletePrompt === "yes") {
      const languageArray = JSON.parse(
        window.localStorage.getItem("languageArray")
      );
      const languageIndex = languageArray.findIndex(
        (language) =>
          language.language === languageObject.language &&
          language.country === languageObject.country
      );
      languageArray.splice(languageIndex, 1);
      window.localStorage.setItem(
        "languageArray",
        JSON.stringify(languageArray)
      );
      setLanguageAdded(false);
      props.setRefreshLanguages(true);
    }
  };

  return (
    <Flex
      className='language-input-container'
      flexDirection='column'
      h='auto'
      border='2px'
      borderRadius='16'
      borderColor='gray.400'
      m='2'
      overflow={"hidden"}>
      <Box
        display='flex'
        justifyContent='space-between'
        borderBottom='1px'
        borderColor='gray.400'
        alignContent={"center"}
        alignItems='center'
        h='8'>
        <Box fontSize='md' color='gray.800' display='flex' lineHeight={2} h='8'>
          <Checkbox
            checked={languageCheckbox}
            onChange={handleLanguageCheckbox}
            colorScheme='brand.400'
            iconColor='gray.800'
            borderColor='gray.400'
            borderRadius='48px'
            size='lg'
            mx='2'
          />
          {props.type === "edit"
            ? `${language}  -  ${props.countryName} `
            : language}
        </Box>

        {props.type === "edit" ? (
          <Button
            onClick={handleDeleteButton}
            color='black'
            bgColor='transparent'
            fontSize='10'
            lineHeight={2}
            padding='0'
            height='8'
            width='8'
            _hover={{ fontSize: "16" }}>
            <CloseIcon />
          </Button>
        ) : null}
      </Box>

      <Flex
        className='language-title'
        w='100%'
        justifyContent='space-between'
        alignContent='left'
        h='fit-content'>
        {languageCheckbox ? (
          <Flex p='4' flexDirection='row' w='100%'>
            <LanguageSlider
              setLanguageLevel={setLanguageLevel}
              languageLevel={languageLevel}
              language={language}
            />
            <Box
              onClick={handleAddButton}
              bg='transparent'
              color='black'
              _hover={{ color: "blue.500" }}
              >
              {languageAdded ? (
                <CheckIcon />
              ) : props.type === "edit" ? (
                <EditIcon />
              ) : (
                <AddIcon />
              )}
            </Box>
          </Flex>
        ) : null}
      </Flex>
    </Flex>
  );
}
