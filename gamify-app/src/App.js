import './App.css';
import * as React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
/**import AddItems from './Components/Lasaca/AddItems.js'**/
import AddAssessmentDetails from './Components/Clamor/AddAssessmentDetails.js';
import AnswerAssessment from './Components/Lasaca/AnswerAssessment';
import Subjects from './Components/Clamor/Subjects.js'
import AssessmentOne from './Components/Clamor/AssessmentOne.js'
import AssessmentTwo from './Components/Clamor/AssessmentTwo.js'
import AssessmentThree from './Components/Clamor/AssessmentThree.js'
import AssessmentFour from './Components/Clamor/AssessmentFour.js'
import AssessmentFive from './Components/Clamor/AssessmentFive.js'
import AssessmentSix from './Components/Clamor/AssessmentSix.js'
import AssessmentSeven from './Components/Clamor/AssessmentSeven.js'
import AssessmentEight from './Components/Clamor/AssessmentEight.js'
import AssessmentNine from './Components/Clamor/AssessmentNine.js'
import AssessmentTen from './Components/Clamor/AssessmentTen.js'
import AssessmentEleven from './Components/Clamor/AssessmentEleven.js'
import AssessmentTwelve from './Components/Clamor/AssessmentTwelve.js'
import AssessmentPageOne from './Components/Clamor/AssessmentPageOne.js'
import AssessmentPageTwo from './Components/Clamor/AssessmentPageTwo.js'
import AssessmentPageThree from './Components/Clamor/AssessmentPageThree.js'
import AssessmentPageFour from './Components/Clamor/AssessmentPageFour.js'
import ContactUsPage from './Components/Clamor/ContactUsPage.js'
/**import {Stack} from "@mui/material";**/
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
import AddItems from './Components/Lasaca/AddItems';
import StudentActivityResult from './Components/ginalyn/StudentResult';

import HomepageTeacher from './Components/Cahutay/HomepageTeacher';
function App() {
  return (
    <Routes>
      <Route path="" element={<Landing />}></Route>
      <Route path="register" element={<CahutayChooseAccount />}></Route>
      <Route path="register-student" element={<RegistrationFormStudent />}></Route>
      <Route path="register-teacher" element={<RegistrationFormTeacher />}></Route>
      <Route path="register-choose-student-avatar" element={<ChooseAvatar />}></Route>
      <Route path="register-setup-student-account" element={<SetUpAccount />}></Route>
      <Route path="register-setup-teacher-account" element={<CahutaySetUpAccount />}></Route>
      <Route path="register-choose-teacher-avatar" element={<CahutayChooseAvatar />}></Route>
      <Route path="about-us" element={<AboutUs />}></Route>
      <Route path="plans-and-pricing" element={<Price />}></Route>
      <Route path="faq" element={<FAQ />}></Route>
      <Route path="login-teacher" element={<CahutayLoginAccountForm />}></Route>
      <Route path="login-student" element={<LoginStudent />}></Route>
      <Route path="student-homepage" element={<Homepage />}></Route>
      <Route path="student-profile" element={<StudentProfile />}></Route>
      <Route path="teacher-profile" element={<CahutayTeachersProfile />}></Route>
      <Route path="student-manage-account-page-one" element={<ManageStudentProfilePage1 />}></Route>
      <Route path="student-manage-account-page-two" element={<ManageStudentProfilePage2 />}></Route>
      <Route path="teacher-manage-account-page-one" element={<CahutayManageTeachersProfilePage1 />}></Route>
      <Route path="teacher-manage-account-page-two" element={<CahutayManageTeachersProfilePage2 />}></Route>
      <Route path="student-deactivate-account" element={<DeactivateStudentAccount />}></Route>
      <Route path="student-deactivate-account-confirmation" element={<DeactivateStudentAccountConfirmation />}></Route>
      <Route path="teacher-deactivate-account" element={<CahutayDeactivateTeacherAccount />}></Route>
      <Route path="teacher-deactivate-account-confirmation" element={<CahutayDeactivateTeacherAccountConfirmation />}></Route>
      <Route path="teacher-homepage" element={<HomepageTeacher />}></Route>
      <Route path="/contact-us-page" element={<ContactUsPage />}></Route>
      <Route path="/contact-us" element={<ContactUsPage />}></Route>
      <Route path="assessments" element={<Subjects />}></Route>
      <Route path="answer-assessment" element={<AnswerAssessment />}></Route>
      <Route path="add-assessment-details" element={<AddAssessmentDetails />}></Route>
      <Route path="add-items" element={<AddItems />}></Route>
      <Route path="student-activity" element={<ActivityStudent />}></Route>
      <Route path="teacher-assessments" element={<TeacherResult />}></Route>
      <Route path="teacher-view-assessment-results" element={<TeacherDownloadResult />}></Route>
      <Route path="student-activity-result" element={<StudentActivityResult />}></Route>
      <Route path="student-review-assessment-result" element={<StudentReview />}></Route>
      <Route path="student-result" element={<StudentResult/>}></Route>

      <Route path="/appdev/assessments" element={<AssessmentPageOne />}></Route>
      <Route path="/automata/assessments" element={<AssessmentPageTwo />}></Route>
      <Route path="/industryelective/assessments" element={<AssessmentPageThree />}></Route>
      <Route path="/intelligentsystems/assessments" element={<AssessmentPageFour />}></Route>

      <Route path="/appdev/assessments/week7-synch-springboot-seatwork" element={<AssessmentOne/>}></Route>
      <Route path="/appdev/assessments/week7-uml-long-quiz" element={<AssessmentTwo/>}></Route>
      <Route path="/appdev/assessments/week8-synch-seatwork-crud" element={<AssessmentThree/>}></Route>

      <Route path="/automata/assessments/regular-expression-quiz" element={<AssessmentFour/>}></Route>
      <Route path="/automata/assessments/nfa-quiz" element={<AssessmentFive />}></Route>
      <Route path="/automata/assessments/cfg-long-quiz" element={<AssessmentSix />}></Route>

      <Route path="/industryelective/assessments/quiz-oop-and-solid" element={<AssessmentSeven />}></Route>
      <Route path="/industryelective/assessments/quiz-design-patterns" element={<AssessmentEight />}></Route>
      <Route path="/industryelective/assessments/quiz-unit-test" element={<AssessmentNine />}></Route>

      <Route path="/intelligentsystems/assessments/robotics-quiz" element={<AssessmentTen />}></Route>
      <Route path="/intelligentsystems/assessments/problems-using-search-quiz" element={<AssessmentEleven />}></Route>
      <Route path="/intelligentsystems/assessments/dip-long-quiz" element={<AssessmentTwelve />}></Route>
      <Route path="*" element={<Navigate to="/" replace />}/>
    </Routes>
  );
}

export default App;