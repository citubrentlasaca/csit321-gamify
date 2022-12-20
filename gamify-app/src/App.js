import './App.css';
import * as React from 'react';
import AddItems from './Components/Lasaca/AddItems.js'
import AnswerAssessment from './Components/Lasaca/AnswerAssessment.js';
import Landing from './Components/ginalyn/Landing.js';
import SetUpAccount from './Components/ginalyn/SetUpAccount.js';
import RegistrationFormStudent from './Components/ginalyn/RegistrationFormStudent.js';
import ChooseAvatar from './Components/ginalyn/ChooseAvatar.js';
import Homepage from './Components/ginalyn/Homepage.js';
import ActivityStudent from './Components/ginalyn/ActivityStudent.js';
import {Stack} from "@mui/material";
import { Route, Routes, Navigate } from 'react-router-dom';

function App() {
  return(
    <Routes>
      <Route path="" element={<Landing />}></Route>
      <Route path="register" element={<SetUpAccount />}></Route>
      <Route path="register-student" element={<RegistrationFormStudent />}></Route>
      <Route path="register-choose-avatar" element={<ChooseAvatar />}></Route>
      <Route path="*" element={<Navigate to="/" replace />}/>
    </Routes>
    /*<div>
      <Landing></Landing>
      <SetUpAccount></SetUpAccount>
      <RegistrationFormStudent></RegistrationFormStudent>
      <ChooseAvatar></ChooseAvatar>
      <Homepage></Homepage>
    </div>
    <div classname="App">
      <header className="App-header2-gc">
        <Landing></Landing>
        {/*<SetUpAccount></SetUpAccount>
        <RegistrationFormStudent></RegistrationFormStudent>
        <ChooseAvatar></ChooseAvatar>
        <Homepage></Homepage>
        <ActivityStudent></ActivityStudent>
        <ReadStudents></ReadStudents>
      </header>
    </div>
    <Stack>
        <AddItems/>
        <AnswerAssessment/>
    </Stack>*/
  );
}

export default App;