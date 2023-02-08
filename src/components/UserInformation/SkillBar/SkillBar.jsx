import React from "react";

/*
    skill-container
    |-- skill-name -- props.language
    |--skill-bar-container
        |--skill-bar -- props.level // for width
        |--skill-bar-percent -- props.level
    |--skill-flag-container
        |--skill-flag -- props.flag, props.country    
*/

export default function SkillBar(props) {
  return (
    <div class='skill-container'>
      <h3 class='skill-name'>{props.language}</h3>

      <div className='skill-bar-container'>
        <div
          className='skill-bar'
          style={{ width: props.level, height: "100%" }}>
          <span className='skill-bar-text'>{props.level}</span>
        </div>

        <div className='skill-flag-container'>
          <img
            class='skill-flag'
            src={props.flag}
            alt={`flag of ${props.country}`}
          />
        </div>
      </div>
    </div>
  );
}
