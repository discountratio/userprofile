import React from "react";
import countryData from "../country-codes";
import countries from '../country-codes2'

export default function CountrySelection(props) {
  const handleCountryChange = (e) => {
    // props.setCountryCode(e.target.value);
  };

  const handleLoadCountry = () => {
    const selectionValue = document.getElementById("country").value;
    console.log('clickkkk')
    props.setCountryCode(selectionValue);
  };
  return (
    <div>
      <select name='country' id='country' onChange={handleCountryChange}>
        <option value=''>Select a country</option>
        {countries.map((country) => (
          <option key={countries.code2} value={countries.code2}>
            {country.Country}
          </option>
        ))}

      </select>
      <button onClick={handleLoadCountry}>Load Country</button>
    </div>
  );
}
