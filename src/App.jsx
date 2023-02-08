import { useState, useForm, useEffect } from "react";
import "./App.scss";
import UserInformation from "./components/UserProfile/UserProfile";
import CountryInformation from "./components/CountryInformation/CountryInformation";

function App() {
  const [userData, setUserData] = useState({});
  const [countryData, setCountryData] = useState({});
  const [countryCode, setCountryCode] = useState("");
  const userLoading = () => {
    if (!userData) {
      return <h2>Loading...</h2>;
    }
  }

    const countryLoading = () => {
      if (!countryData) {
        return <h2>Loading...</h2>;
      }
    };

    return (
      <div className='App'>
        <h2>Language Profile App</h2>
        {/* <UserInformation userData={userData} setUserData={setUserData} /> */}
        <CountryInformation
          countryData={countryData}
          setCountryData={setCountryData}
          countryCode={countryCode}
          setCountryCode={setCountryCode}
        />
      </div>
    );
  };

export default App;
