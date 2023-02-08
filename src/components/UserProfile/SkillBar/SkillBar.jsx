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
      boxShadow='8px 8px black'
      bg='gray.100'
      color='gray.800'
      position='relative'
      top='0'
      left='0'
      
        _hover={{
        bg: "gray.200",
        color: "gray.900",
        top: "4px",
        left: "4px",
        boxShadow: "2px 2px black",
        transition: "all 0.2s ease-in-out",
    
        }}
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
