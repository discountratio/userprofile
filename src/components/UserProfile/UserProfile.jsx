import React from "react";
import { useState, useEffect, useRef } from "react";
import { Heading, Link, Text, Flex, Box, Image } from "@chakra-ui/react";
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
        flexWrap='wrap'
        bg='gray.800'
        color='gray.100'
        alignItems='center'
        // justifyContent='center'
        flexDirection='column'
        className='user-information'>
        <Image
          borderRadius='full'
          width='sm'
          mt='2'
          src='/src/assets/images/user.jpg'
          alt='user headshot'
        />
        <Text
          casing='capitalize'
          fontSize={["md", "lg", "xl", "2xl"]}
          w={["100%", "80%", "60%", "40%"]}
          textAlign='center'
          >
          UserFirstName UserLastName
        </Text>
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
