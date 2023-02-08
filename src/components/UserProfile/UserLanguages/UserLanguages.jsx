import React, { useEffect, useState } from "react";
import SkillBar from "../SkillBar/SkillBar";
import { Heading, Link, Text, Flex, Box } from "@chakra-ui/react";

export default function UserLanguages(props) {
  const [languageData, setLanguageData] = useState([]);

  // setLanguageData(JSON.parse(window.localStorage.getItem("languageArray")));
  // console.log(languageData);

  const renderLanguageData = () => {
    if (languageData) {
      return languageData.map((language, index) => (
        <SkillBar
          boxShadow='lg'
          bg='gray.100'
          color='gray.800'
          key={index}
          language={language.language}
          level={language.level}
          country={language.country}
          flag={language.flag}
        />
      ));
    }
  };

  useEffect(() => {
    setLanguageData(JSON.parse(window.localStorage.getItem("languageArray")));
  }, []);


  return (
    <Flex
      flexWrap='wrap'
      alignItems='center'
      justifyContent='center'
      bg='gray.300'
      id='user-languages'>
      {renderLanguageData()}
    </Flex>
  );
}
