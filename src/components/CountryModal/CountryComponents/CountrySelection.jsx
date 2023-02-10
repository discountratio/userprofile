import React from "react";
import countries from "../country-codes";
import { Select } from "@chakra-ui/react";

export default function CountrySelection(props) {

  const handleCountryChange = (e) => {
    const selectionValue = e.target.value;
    props.setCountryCode(selectionValue)
    console.log(`Country code: ${selectionValue}`);
  };

  return (
    <Select
      px='2'
      mb='4'
      color='black'
      border='1px'
      borderColor='gray.600'
      
      onChange={handleCountryChange}>
      <option value=''>Select a country</option>
      {countries.map((country, index) => (
        <option key={index} value={countries.code3}>
          {country.Country}
        </option>
      ))}
    </Select>
  );
}
