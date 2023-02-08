import React from "react";
import { Heading, Link, Text, Flex, Box } from "@chakra-ui/react";

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
  const language = props.language;
  const level = props.level;
  const country = props.country;
  const flag = props.flag;

  return (
    <Box
      m='4'
      p='2'
      border='2px solid black'
      maxWidth='600px'
      rounded='lg'
      flexBasis={["100%", "30%"]}
      className='skill-container'>
      <Heading as='h3' size='md' className='skill-name'>
        {language} - {country}
      </Heading>

      <div className='skill-bar-container'>
        <div className='skill-bar'>
          <Text fontSize='xl' className='skill-bar-text'>
            {level}%
          </Text>
        </div>


        <div className='skill-flag-container'>
          <img
            className='skill-flag'
            src={flag}
            alt={`flag of ${country}`}
            style={{
              width: 200,
              aspectRatio: 2 / 1,
              objectFit: "contain",
            }}
          />
        </div>
      </div>
    </Box>
  );
}
