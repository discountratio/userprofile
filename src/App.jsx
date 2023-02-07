import { useState, useForm } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import InputForm from './components/InputForm/InputForm'
import UserInformation from './components/UserInformation/UserInformation'
function App() {

  return (
    <div className="App">
     
      {/* <InputForm/> */}
      <UserInformation />
    </div>
  )
}

export default App
