import React, { useState, useEffect } from "react";

import "./LanguageContainer.scss";

export default function LanguageContainer(props) {
  const language = props.language;


  const [languageLevel, setLanguageLevel] = useState(50);
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

  //Handlers
  const handleLanguageCheckbox = (e) => {
    setLanguageCheckbox(e.target.checked);
  };

  const handleLanguageRange = (e) => {
    setLanguageLevel(e.target.value);
  };

  const handleLanguageCountry = (e) => {
    setLanguageCountry(e.target.value);
  };

  const handleLanguageFlag = (e) => {
    setLanguageFlag(e.target.value);
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
    window.localStorage.setItem("languageArray", JSON.stringify(languageArray));
  };


  return (
    <div className='language-input-container'>
      <label className='language-title'>
        {language}

        <input
          type='checkbox'
          name='language-checkbox'
          className='language-checkbox'
          checked={languageCheckbox}
          onChange={handleLanguageCheckbox}
        />
      </label>

      {languageCheckbox ? (
        <>
          <label>
            Skill Level:
            <input
              type='range'
              name='language-range'
              className='language-range'
              onChange={handleLanguageRange}
            />
            <span className='language-range-text'>{languageLevel}%</span>
          </label>

          <button onClick={handleAddButton}>Add Language</button>
        </>
      ) : null}
    </div>
  );
}
