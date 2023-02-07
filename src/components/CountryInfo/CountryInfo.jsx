import React from "react";
import { useState, useEffect } from "react";
import countryCodes from "../../assets/data/country-codes";
import LanguageContainer from "../LanguageContainer/LanguageContainer";
import "./CountryInfo.scss";
/*
Takes in the countryCode prop and renders the infortmation from the fetch responses
*/
export default function CountryInfo(props) {
  const countryCode = props.countryCode;

  //set states
  const [countryName, setCountryName] = useState("");
  const [countryFlag, setCountryFlag] = useState("");
  const [countryCapital, setCountryCapital] = useState("");
  const [countryPopulation, setCountryPopulation] = useState("");
  const [countryRegion, setCountryRegion] = useState("");
  const [countryLanguages, setCountryLanguages] = useState([]);
  const [countryBorders, setCountryBorders] = useState([]);
  const restCountriesURL = "https://restcountries.com/v3.1/";

  //convert object to array
  function objectEntriesToArray(object) {
    const array = [];
    for (const [key, value] of Object.entries(object)) {
      array.push(value);
      // console.log(`${key}: ${value}`);
    }
    // console.log(array);
    return array;
  }

  //console log all the country states
  const consoleLogCountryInfo = () => {
    console.log(`
    code: ${countryCode}
    name: ${countryName}
    flag: ${countryFlag}
    capital: ${countryCapital}
    population: ${countryPopulation}
    region: ${countryRegion}
    languages: ${countryLanguages}
    borders: ${countryBorders}
    `);
  };

  //Fetch country data from restcountries.com, set all states
  const fetchCountry = async () => {
    const response = await fetch(restCountriesURL + "name/" + countryCode);
    const data = await response.json();
    const country = data[0] ? data[0] : data;

    console.log(country);

    setCountryName(country.name.official);
    setCountryFlag(country.flags.png);
    setCountryCapital(country.capital[0]);
    setCountryPopulation(country.population);
    setCountryRegion(country.region);

    //Array states call the helper function to convert the object to an array
    setCountryLanguages(
      country.languages ? objectEntriesToArray(country.languages) : []
    );

    setCountryBorders(
      country.borders ? objectEntriesToArray(country.borders) : []
    );
  };

  //useEffect to fetch country data and console log the country states everytime the countryCode changes
  useEffect(() => {
    fetchCountry();
    consoleLogCountryInfo();
  }, [countryCode]);
  return (
    <div className='country-info'>
      <div className='language-container'>
        <div className='country-languages'>
          <h2>Languages</h2>
          {countryLanguages.map((language) => {
            return <LanguageContainer language={language} />;
          })}
        </div>
      </div>

      <div className='country-info-container'>
        <div className='country-info-text'>
          <div className='country-name'>
            <h2>{countryName}</h2>
          </div>

          <div className='country-capital'>
            <p>
              <strong> Capital:</strong> <span>{countryCapital}</span>
            </p>
          </div>

          <div className='country-population'>
            <p>
              <strong>Population:</strong> <span>{countryPopulation}</span>
            </p>
          </div>

          <div className='country-region'>
            <p>
              <strong>Region:</strong> <span>{countryRegion}</span>
            </p>
          </div>

        </div>

        <div className='country-flag-container'>
          <img className='country-flag' src={countryFlag} alt={countryName} />
        </div>

      </div>
          
      {/* <div className='country-borders'>
        <h2>Borders</h2>
        {!countryBorders ? (
          <p>None</p>
        ) : (
          countryBorders.map((border) => {
            return (
              <div>{countryCodes.filter((code) => code.code === border)}</div>
            );
          })
        )}
      </div> */}
    </div>
  );
}
