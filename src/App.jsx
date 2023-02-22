import { useState, useForm, useEffect } from "react";

import "./App.scss";
import LoginModal from "./components/LoginModal/LoginModal";                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
import UserProfile from "./components/UserProfile/UserProfile";

function App() {
  const [userLogin, setUserLogin] = useState(false);
  const [userData, setUserData] = useState("");
  const [countryData, setCountryData] = useState({});
  const [countryCode, setCountryCode] = useState("CA");
  const [countryLanguages, setCountryLanguages] = useState([]);
  const [refreshLanguages, setRefreshLanguages] = useState(false);
  const [languageAdded, setLanguageAdded] = useState(false);

  const saveCountryDataToLocalStorage = (storageData) => {
    window.localStorage.setItem("countryData", JSON.stringify(storageData));
  };

  const getCountryDataFromLocalStorage = () => {
    const data = JSON.parse(window.localStorage.getItem("countryData"));
    return data;
  };

  async function fetchCountryDataFromCode(code) {
    const restCountriesURL = "https://restcountries.com/v3.1/";
    const response = await fetch(restCountriesURL + "name/" + code);
    const data = await response.json();
    const fetchedData = data[0];
    return fetchedData;
  }

  function objectEntriesToArray(object) {
    if (object) {
      const array = [];
      for (const [key, value] of Object.entries(object)) {
        array.push(value);
        // console.log(`${key}: ${value}`);
      }
      // console.log(array);
      return array;
    }
    return null;
  }

  useEffect(() => {
    const data = getCountryDataFromLocalStorage();
    if (data) {
      setCountryData(data);
    }
  }, []);

  useEffect(() => {
    if (countryData) {
      setCountryLanguages(objectEntriesToArray(countryData.languages));
      saveCountryDataToLocalStorage(countryData);
    }
  }, [countryData]);

  useEffect(() => {
    if (countryCode) {
      fetchCountryDataFromCode(countryCode).then((data) => {
        setCountryData(data);
      });
    }
  }, [countryCode]);

  useEffect(() => {
    setCountryLanguages(objectEntriesToArray(countryData.languages));
    setRefreshLanguages(false);
    setLanguageAdded(false);
  }, [refreshLanguages]);

  return (
    <div className='App'>
      {!userLogin ? (
        <LoginModal setUserLogin={setUserLogin} />
      ) : (
        <UserProfile
          userData={userData}
          setUserData={setUserData}
          countryData={countryData}
          setCountryData={setCountryData}
          countryCode={countryCode}
          setCountryCode={setCountryCode}
          countryLanguages={countryLanguages}
          setCountryLanguages={setCountryLanguages}
          objectEntriesToArray={objectEntriesToArray}
          refreshLanguages={refreshLanguages}
          setRefreshLanguages={setRefreshLanguages}
          languageAdded={languageAdded}
          setLanguageAdded={setLanguageAdded}
        />
      )}
    </div>
  );
}

export default App;
