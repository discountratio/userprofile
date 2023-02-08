import React, { useState } from "react";
import SkillBar from "../SkillBar/SkillBar";

export default function UserLanguages() {
  const [showLanguages, setShowLanguages] = useState(false);

  function renderLanguages() {
    const temp = window.localStorage.getItem("languageArray");
    const languages = temp ? JSON.parse(temp) : [];
    return languages.map((language) => {
      console.log(language);
      return (
        <p>
          <span>{language.language}</span>
          <span>{language.level}</span>
        </p>
      );
    });
  }

  //Adds language and level to local storage, if language already exists, it updates the leves
  const handleShowButton = (e) => {
    e.preventDefault();
    setShowLanguages(true);
  };

  return (
    <div id='user-languages'>
      <h2>User Languages</h2>
      {showLanguages ? renderLanguages() : null}

      <button onClick={handleShowButton}>Show Languages</button>
    </div>
  );
}
