import React from "react";
import countries from '../country-codes2'
import {Select} from '@chakra-ui/react'
export default function CountrySelection(props) {

  const handleCountryChange = () => {
    const selectionValue = document.getElementById("country").value;
    props.setCountryCode(selectionValue);
    props.fetchCountryDataFromCode();
    props.setCountryStates();
  };



  return (
    <div>
      <Select bg='teal.400' color='black'  name='country' id='country' onChange={handleCountryChange}>
        <option value=''>Select a country</option>
        {countries.map((country, index) => (
          <option key={index} value={countries.code3}>
            {country.Country}
          </option>
        ))}

      </Select>
    </div>
  );
}
