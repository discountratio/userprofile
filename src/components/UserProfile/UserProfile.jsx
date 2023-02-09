import React from "react";
import { useState, useEffect, useRef } from "react";
import {
  Heading,
  Link,
  Text,
  Flex,
  Box,
  Image,
  Button,
} from "@chakra-ui/react";
import { AtSignIcon } from "@chakra-ui/icons";
import UserLanguages from "./UserLanguages/UserLanguages";

export default function UserInformation(props) {
  const userLanguages = props.UserLanguages;
  const userProfile = props.userProfile;

  return (
    <Flex flexDirection='column'>
      <Heading
        as='h1'
        size='4x2'
        w='100%'
        h='10'
        fontSize='2xl'
        backgroundColor='gray.900'
        color='gray.100'
        textAlign='center'>
        User Information
      </Heading>

      <Flex
        className='user-information-container'
        flexWrap='wrap'
        bg='gray.800'
        color='gray.100'
        alignItems='center'
        // justifyContent='center'
        flexDirection='column'>
        <Box className='user-image-flag-container' position='relative'>
          <Image
            className='user-image'
            borderRadius='full'
            width='sm'
            mt='2'
            src='/src/assets/images/user.jpg'
            alt='user headshot'
          />
          <Image
            className='user-flag'
            h='100'
            position='absolute'
            bottom='0'
            right='0'
            src='/src/assets/images/dutch.png'
            alt='flaaag'
          />
        </Box>

        <Box
          className='user-name-location-container'
          justifyContent='left'
          textAlign='left'
          w='100%'
          >
          <Text
            className='user-name'
            casing='capitalize'
            fontSize={["md", "lg", "xl", "2xl"]}
            w='100%'
            background='green'
            textAlign='left'
            fontWeight='bold'>
            Firstly Lastnamed
          </Text>
          <Box className='user-location'>
            <AtSignIcon /> Netherlands
          </Box>
        </Box>

        <Flex gap='4' justifyContent='center'>
          <Button
            colorScheme='teal'
            variant='outline'
            borderRadius='100'
            w='sm'
            maxW='30%'>
            <Link
              href='mailto:
        '>
              <AtSignIcon />
              Email
            </Link>
          </Button>

          <Button
            colorScheme='teal'
            variant='outline'
            borderRadius='100'
            w='sm'
            maxW='30%'>
            <Link
              href='https://www.linkedin.com/in/firstly-lastnamed-123456789/'
              isExternal>
              LinkedIn
            </Link>
          </Button>
        </Flex>

        <Text
          fontSize={["sm", "md", "lg", "xl"]}
          w={["100%", "80%", "60%", "40%"]}>
          UserDescription Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Ducimus facere nesciunt quod eaque qui dolorum debitis illum
          quis atque itaque suscipit, mollitia cum nisi iusto architecto esse
          fuga ad saepe asperiores nam a voluptates fugiat voluptatibus. Tempora
          quisquam perspiciatis rerum minima sapiente nisi placeat distinctio!
          Sapiente culpa aliquid reprehenderit dignissimos!
        </Text>

        <UserLanguages />
      </Flex>
    </Flex>
  );
}
