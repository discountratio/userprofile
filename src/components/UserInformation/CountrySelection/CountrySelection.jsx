import React from "react";

import countryData from "../../../assets/data/country-codes";

export default function CountrySelection(props) {
  const handleCountryChange = (e) => {
    props.setCountryCode(e.target.value);
    console.log(props.countryCode);
  };

  return (
    <div>
      <select name='country' id='country' onChange={handleCountryChange}>
        <option value=''>Select a country</option>
        {countryData.map((country) => (
          <option key={country.Code} value={country.Code}>
            {country.Name}
          </option>
        ))}
      </select>
    </div>
  );
}
