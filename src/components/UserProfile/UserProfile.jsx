import React from "react";
import { useState, useEffect, useRef } from "react";

import UserLanguages from "./UserLanguages/UserLanguages";
import "./UserProfile.scss";


export default function UserInformation(props) {
  const userLanguages = props.UserLanguages;
  const userProfile = props.userProfile;

  return (
    <div className='user-information'>
      <h1>User Information</h1>
      <UserLanguages />
    </div>
  );
}
