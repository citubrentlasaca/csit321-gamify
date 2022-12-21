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
import StudentResult from './Components/Pepito/StudentResult';
import StudentReview from './Components/Pepito/StudentReview';
import TeacherResult from './Components/Pepito/TeacherResult';
import TeacherDownloadResult from './Components/Pepito/TeacherDownloadResult';
import Price from './Components/Pepito/Price';
import AboutUs from './Components/Pepito/AboutUs';
import FAQ from './Components/Pepito/FAQ';
import {Stack} from "@mui/material";
import { Route, Routes, Navigate } from 'react-router-dom';
import CahutayChooseAccount from './Components/Cahutay/CahutayChooseAccount';
import CahutayLoginAccountForm from './Components/Cahutay/CahutayLoginAccountForm';
import CahutayTeachersProfile from './Components/Cahutay/CahutayTeachersProfile';
import CahutayManageTeachersProfilePage1 from './Components/Cahutay/CahutayManageTeachersProfilePage1';
import CahutayManageTeachersProfilePage2 from './Components/Cahutay/CahutayManageTeachersProfilePage2';
import CahutayDeactivateTeacherAccount from './Components/Cahutay/CahutayDeactivateTeacherAccount';
import CahutayDeactivateTeacherAccountConfirmation from './Components/Cahutay/CahutayDeactivateTeacherAccountConfirmation';
import CahutaySetUpAccount from './Components/Cahutay/SetupAccount';
import RegistrationFormTeacher from './Components/Cahutay/RegistrationFormTeacher';
import CahutayChooseAvatar from './Components/Cahutay/ChooseAvatar';
function App() {
  return (
    <div>
        <AboutUs></AboutUs>
        <Price></Price>
        <FAQ></FAQ>
        <StudentResult></StudentResult>
        <StudentReview></StudentReview>
        <TeacherResult></TeacherResult>
        <TeacherDownloadResult></TeacherDownloadResult>
    </div>

    /* 
        <Stack>
          <AddItems/>
          <AnswerAssessment/> 
        </Stack>
    */
  );
}

export default App;