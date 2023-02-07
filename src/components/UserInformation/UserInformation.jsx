import React from "react";
import { useState, useEffect, useRef } from "react";

import CountryInfo from "../CountryInfo/CountryInfo";
import CountrySelection from "../CountrySelection/CountrySelection";
import "./UserInformation.scss";
export default function UserInformation() {
  const [countryCode, setCountryCode] = useState("");

  return (
    <div className="user-information">
      <h2>Select a country</h2>
      <CountrySelection setCountryCode={setCountryCode} />
      <CountryInfo countryCode={countryCode}/>
    </div>
  );
}
