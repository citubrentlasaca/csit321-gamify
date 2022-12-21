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
import LoginStudent from './Components/ginalyn/LoginStudent';
import CahutayTeachersProfile from './Components/Cahutay/CahutayTeachersProfile';
import CahutayManageTeachersProfilePage1 from './Components/Cahutay/CahutayManageTeachersProfilePage1';
import CahutayManageTeachersProfilePage2 from './Components/Cahutay/CahutayManageTeachersProfilePage2';
import CahutayDeactivateTeacherAccount from './Components/Cahutay/CahutayDeactivateTeacherAccount';
import CahutayDeactivateTeacherAccountConfirmation from './Components/Cahutay/CahutayDeactivateTeacherAccountConfirmation';
import CahutaySetUpAccount from './Components/Cahutay/SetupAccount';
import RegistrationFormTeacher from './Components/Cahutay/RegistrationFormTeacher';
import CahutayChooseAvatar from './Components/Cahutay/ChooseAvatar';
import StudentProfile from './Components/ginalyn/StudentProfile';
import ManageStudentProfilePage1 from './Components/ginalyn/ManageStudentProfilePage1';
import ManageStudentProfilePage2 from './Components/ginalyn/ManageStudentProfilePage2';
import DeactivateStudentAccount from './Components/ginalyn/DeactivateStudentAccount';
import DeactivateStudentAccountConfirmation from './Components/ginalyn/DeactivateStudentAccountConfirmation';

function App() {
  return (
    <Routes>
      <Route path="" element={<Landing />}></Route>
      <Route path="register" element={<CahutayChooseAccount />}></Route>
      <Route path="register-student" element={<RegistrationFormStudent />}></Route>
      <Route path="register-choose-student-avatar" element={<ChooseAvatar />}></Route>
      <Route path="register-setup-student-account" element={<SetUpAccount />}></Route>
      <Route path="register-setup-teacher-account" element={<CahutaySetUpAccount />}></Route>
      <Route path="register-choose-student-avatar" element={<CahutayChooseAvatar />}></Route>
      <Route path="about-us" element={<AboutUs />}></Route>
      <Route path="plans-and-pricing" element={<Price />}></Route>
      <Route path="faq" element={<FAQ />}></Route>
      <Route path="login-teacher" element={<CahutayLoginAccountForm />}></Route>
      <Route path="login-student" element={<LoginStudent />}></Route>
      <Route path="student-homepage" element={<Homepage />}></Route>
      <Route path="student-profile" element={<StudentProfile />}></Route>
      <Route path="student-manage-account-page-one" element={<ManageStudentProfilePage1 />}></Route>
      <Route path="student-manage-account-page-two" element={<ManageStudentProfilePage2 />}></Route>
      <Route path="student-deactivate-account" element={<DeactivateStudentAccount />}></Route>
      <Route path="student-deactivate-account-confirmation" element={<DeactivateStudentAccountConfirmation />}></Route>
      <Route path="*" element={<Navigate to="/" replace />}/>
    </Routes>
    /*<div>
        <AboutUs></AboutUs>
        <Price></Price>
        <FAQ></FAQ>
        <StudentResult></StudentResult>
        <StudentReview></StudentReview>
        <TeacherResult></TeacherResult>
        <TeacherDownloadResult></TeacherDownloadResult>
    </div>

     
        <Stack>
          <AddItems/>
          <AnswerAssessment/> 
        </Stack>
    */
  );
}

export default App;