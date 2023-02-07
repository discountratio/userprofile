import React, { useState, useEffect } from "react";

import "./LanguageContainer.scss";

export default function LanguageContainer(props) {
  const language = props.language;
  const [languageLevel, setLanguageLevel] = useState(50);
  const [languageCheckbox, setLanguageCheckbox] = useState(false);

  //Use Effects
  //change checkbox value
  useEffect(() => {
    console.log(languageCheckbox);
  }, [languageCheckbox]);

  //change range value
  useEffect(() => {
    console.log(languageLevel);
  }, [languageLevel]);

  //reset on new language
  useEffect(() => {
    setLanguageCheckbox(false);
    setLanguageLevel(50);
  }, [language]);

  //Handlers
  const handleLanguageCheckbox = (e) => {
    setLanguageCheckbox(e.target.checked);
  };

  const handleLanguageRange = (e) => {
    setLanguageLevel(e.target.value);
  };

  //Adds language and level to local storage, if language already exists, it updates the leves
  const handleAddButton = (e) => {
    e.preventDefault();

    //get array from local storage
    const temp = window.localStorage.getItem("languageArray");

    //if array doesn't exist, create it
    if (!temp) {
      window.localStorage.setItem(
        "languageArray",
        JSON.stringify(languageArray)
      );
    }

    //parse array from local storage
    const languageArray = temp ? JSON.parse(temp) : [];

    //create language object
    const languageObject = {
      language: language,
      level: languageLevel,
    };

    //check if language already exists in array, if it does, update level
    for (let lang in languageArray) {
      console.log("lang: ", lang);
      if (languageObject.language === languageArray[lang].language) {
        languageArray[lang].level = languageObject.level;
        window.localStorage.setItem(
          "languageArray",
          JSON.stringify(languageArray)
        );
        return;
      }
    }
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
