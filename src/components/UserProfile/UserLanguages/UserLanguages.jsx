import React, { useEffect, useState } from "react";
import SkillBar from "./SkillBar";
import { Heading, Link, Text, Flex, Box } from "@chakra-ui/react";

export default function UserLanguages(props) {
  const [languageData, setLanguageData] = useState([]);

  const UserLanguages = props.UserLanguages;
  const setUserLanguages = props.setUserLanguages;
  const refreshLanguages = props.refreshLanguages;
  const setRefreshLanguages = props.setRefreshLanguages;
  const languageAdded = props.languageAdded;
  const setLanguageAdded = props.setLanguageAdded;

  const renderLanguageData = () => {
    if (languageData) {
      return languageData.map((language, index) => (
        <SkillBar
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
    props.setLanguageAdded(true);
  }, [refreshLanguages]);

  return (
    <Flex
      flexWrap='wrap'
      alignItems='center'
      justifyContent='center'
      id='user-languages'
      px={[8, 12, 16, 24]}>
      {renderLanguageData()}
    </Flex>
  );
}
