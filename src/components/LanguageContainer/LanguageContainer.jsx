import React, { useState, useEffect } from "react";

export default function LanguageContainer(props) {
  const language = props.language;
  const [languageLevel, setLanguageLevel] = useState(50);
  const [languageCheckbox, setLanguageCheckbox] = useState(false);

  const handleLanguageCheckbox = (e) => {
    setLanguageCheckbox(e.target.checked);
  };

  const handleLanguageRange = (e) => {
    setLanguageLevel(e.target.value);
  };

  useEffect(() => {
    console.log(languageCheckbox);
  }, [languageCheckbox]);

  useEffect(() => {
    console.log(languageLevel);
  }, [languageLevel]);

  useEffect(() => {
    setLanguageCheckbox(false);
    setLanguageLevel(50);
  }, [language]);

  const handleAddButton = (e) => {
    e.preventDefault();
    const temp = window.localStorage.getItem("languageArray");
    const languageArray = temp ? JSON.parse(temp) : [];

    const languageObject = {
      language: language,
      level: languageLevel,
    };

    if (!temp) {
      window.localStorage.setItem(
        "languageArray",
        JSON.stringify(languageArray)
      );
    }

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
    <div>
      <label htmlFor={`${language}-checkbox`}>{language}</label>
      <input
        type='checkbox'
        name='language-checkbox'
        id={`${language}-checkbox`}
        checked={languageCheckbox}
        onChange={handleLanguageCheckbox}
      />

      {languageCheckbox ? (
        <label htmlFor='language-range'>
          <input
            type='range'
            name='language-range'
            id={`${language}-range`}
            onChange={handleLanguageRange}
          />
          <span>{languageLevel}%</span>
        </label>
      ) : null}

      {languageCheckbox ? (
        <button onClick={handleAddButton}>Add Language</button>
      ) : null}
    </div>
  );
}
