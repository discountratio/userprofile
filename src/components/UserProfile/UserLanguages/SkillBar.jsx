import React from "react";
import { Heading, Link, Text, Flex, Box, Progress } from "@chakra-ui/react";

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
    <Flex
      flexDirection='column'
      alignItems='center'
      color='gray.800'
      bg='gray.200'
      border='2px'
      borderColor='gray.200'
      p='4'
      h='300px'
      w='240px'
      m='4'
      position='relative'
      top='4px'
      left='4px'
      boxShadow='2px 2px 4px 0px #444'
      transition='box-shadow 200ms ease-in-out, top 200ms ease-in-out, left 200ms ease-in-out'
      
    _hover={{
      top:'-4px',
      left:'-4px',
      boxShadow: "12px 12px 8px 0px #444",
    }}



      className='skill-container'>
      <Box className='skill-flag-container' boxShadow='lg' w='auto'>
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
      </Box>

      <Heading as='h4' size='sm' className='skill-name'>
        {language}
      </Heading>
      <Text size='sm'>{country}</Text>
      <Flex
        w='100%'
        h='100%'
        alignItems='center'
        gap='2'
        p='2'
  
        className='skill-bar-container'>
        {level}%
        <Progress
          className='skill-bar'
          height='20px'
          width='100%'
          bg='gray.100'
          colorScheme='blue'
          borderRadius='20'
          boxShadow='xl'
        

          value={level}></Progress>
      </Flex>
    </Flex>
  );
}
