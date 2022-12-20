import './App.css';
import * as React from 'react';
import AddItems from './Components/Lasaca/AddItems.js'
import AnswerAssessment from './Components/Lasaca/AnswerAssessment.js';
import {Stack} from "@mui/material";
import CahutayChooseAccount from './Components/Cahutay/CahutayChooseAccount';
import CahutayLoginAccountForm from './Components/Cahutay/CahutayLoginAccountForm';
import CahutayTeachersProfile from './Components/Cahutay/CahutayTeachersProfile';
import CahutayManageTeachersProfilePage1 from './Components/Cahutay/CahutayManageTeachersProfilePage1';
import CahutayManageTeachersProfilePage2 from './Components/Cahutay/CahutayManageTeachersProfilePage2';
import CahutayDeactivateTeacherAccount from './Components/Cahutay/CahutayDeactivateTeacherAccount';
import CahutayDeactivateTeacherAccountConfirmation from './Components/Cahutay/CahutayDeactivateTeacherAccountConfirmation';
import SetUpAccount from './Components/Cahutay/SetupAccount';
import RegistrationFormTeacher from './Components/Cahutay/RegistrationFormTeacher';
import ChooseAvatar from './Components/Cahutay/ChooseAvatar';
function App() {
  return(
    <div classname="App">
    <header className="App-header2-gc">
        <CahutayChooseAccount></CahutayChooseAccount>
        <CahutayLoginAccountForm></CahutayLoginAccountForm>
        <CahutayTeachersProfile></CahutayTeachersProfile>
        <CahutayManageTeachersProfilePage1></CahutayManageTeachersProfilePage1>
        <CahutayManageTeachersProfilePage2></CahutayManageTeachersProfilePage2>
        <CahutayDeactivateTeacherAccount></CahutayDeactivateTeacherAccount>
        <CahutayDeactivateTeacherAccountConfirmation></CahutayDeactivateTeacherAccountConfirmation>
        <SetUpAccount></SetUpAccount>
        <RegistrationFormTeacher></RegistrationFormTeacher>
        <ChooseAvatar></ChooseAvatar>
      </header>
    </div>
   /* <Stack>
       <AddItems/>
        
         <AnswerAssessment/>
    </Stack> */
  )
}

export default App;
