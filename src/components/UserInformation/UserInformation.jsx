import React from "react";
import { useState, useEffect, useRef } from "react";

import CountryInfo from "./CountryInfo/CountryInfo";
import CountrySelection from "./CountrySelection/CountrySelection";
import UserLanguages from "./UserLanguages/UserLanguages";
import "./UserInformation.scss";
export default function UserInformation() {
  const [countryCode, setCountryCode] = useState("");
  const [countryName, setCountryName] = useState("");
  const [countryFlag, setCountryFlag] = useState("");

 


  return (
    <div className="user-information">

      <h1>User Information</h1>
      <UserLanguages  />

      <h2>Select a country</h2>
      <CountrySelection setCountryCode={setCountryCode}  />
      <CountryInfo countryCode={countryCode} setCountryName={countryName} setCountryFlag={countryFlag}/>
    </div>
  );
}
