import React from "react";
import LanguageContainer from "./LanguageContainer";


function EditLanguages(props) {
  const languageArray = JSON.parse(
    window.localStorage.getItem("languageArray")
  );

  const renderLanguages = (array) => {
    if (!array) {
      return <div>No languages added</div>;
    } else {
      return array.map((language, index) => {
        return (
          <LanguageContainer
            key={index}
            type='edit'
            language={language.language}
            level={language.level}
            countryName={language.country}
            countryFlag={language.flag}
            setLanguageLevel = {props.setLanguageLevel}
            setRefreshLanguages = {props.setRefreshLanguages}
          />
        );
      });
    }
  };

  return (
    <div>
      {renderLanguages(languageArray)}
    </div>
  );
}

export default EditLanguages;
