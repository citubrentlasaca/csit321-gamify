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

function App() {
  return(
    <div classname="App">
        <header className="App-header2">
          <Landing></Landing>
          <SetUpAccount></SetUpAccount>
          <RegistrationFormStudent></RegistrationFormStudent>
          <ChooseAvatar></ChooseAvatar>
          <Homepage></Homepage>
          <ActivityStudent></ActivityStudent>
          {/*<ReadStudents></ReadStudents>*/}
        </header>
    </div>
    /*<Stack>
         <AddItems/> 
        <AnswerAssessment/>
    </Stack>*/
  );
}

export default App;