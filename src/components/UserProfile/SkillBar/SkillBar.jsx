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
      m='4'
      p='4'
      flexDir={["column"]}
      alignItems='center'
      rounded='lg'
      flexBasis={["100%", "30%"]}
      bg='gray.200'
      color='gray.800'
      position='relative'
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
