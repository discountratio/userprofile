import React from "react";
import { useState, useEffect, useRef } from "react";
import { Heading, Link, Text, Flex, Box } from "@chakra-ui/react";
import UserLanguages from "./UserLanguages/UserLanguages";

export default function UserInformation(props) {
  const userLanguages = props.UserLanguages;
  const userProfile = props.userProfile;

  return (
    <Flex
      flexWrap='wrap'
      alignItems='center'
      // justifyContent='center'
      flexDirection='column'
      className='user-information'>
      <Heading as='h2' size='2x1' mb='2'>
        User Information
      </Heading>

      <img
        src='/src/assets/images/user.jpg'
        alt='user headshot'
        style={{ maxWidth: 440 }}
      />
      <Text fontSize='xl'>UserFirstName UserLastName</Text>
      <Text fontSize='l' m='2'>
        UserDescription Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Ducimus facere nesciunt quod eaque qui dolorum debitis illum quis atque
        itaque suscipit, mollitia cum nisi iusto architecto esse fuga ad saepe
        asperiores nam a voluptates fugiat voluptatibus. Tempora quisquam
        perspiciatis rerum minima sapiente nisi placeat distinctio! Sapiente
        culpa aliquid reprehenderit dignissimos!
      </Text>

      <UserLanguages />
    </Flex>
  );
}
