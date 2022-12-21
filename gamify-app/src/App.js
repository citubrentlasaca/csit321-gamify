import './App.css';
import * as React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
/**import AddItems from './Components/Lasaca/AddItems.js'**/
import AddAssessmentDetails from './Components/Clamor/AddAssessmentDetails.js';
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
import {Stack} from "@mui/material";

function App() {
  return(
    <Routes>
      <Route path="" element={<AddAssessmentDetails />}></Route>
      <Route path="/contact-us-page" element={<ContactUsPage />}></Route>
      <Route path="/subjects" element={<Subjects />}></Route>

      <Route path="/appdev/assessments" element={<AssessmentPageOne />}></Route>
      <Route path="/automata/assessments" element={<AssessmentPageTwo />}></Route>
      <Route path="/industryelective/assessments" element={<AssessmentPageThree />}></Route>
      <Route path="/intelligentsystems/assessments" element={<AssessmentPageFour />}></Route>

      <Route path="/appdev/assessments/week7-synch-springboot-seatwork" element={<AssessmentOne/>}></Route>
      <Route path="/appdev/assessments/week7-uml-long-quiz" element={<AssessmentTwo/>}></Route>
      <Route path="/appdev/assessments/week8-synch-seatwork-crud" element={<AssessmentThree/>}></Route>

      <Route path="/automata/assessments/regular-expression-quiz" element={<AssessmentFour/>}></Route>
      <Route path="/automata/assessments/cfg-long-quiz" element={<AssessmentFive />}></Route>
      <Route path="/automata/assessments/nfa-quiz" element={<AssessmentSix />}></Route>

      <Route path="/industryelective/assessments/quiz-oop-and-solid" element={<AssessmentSeven />}></Route>
      <Route path="/industryelective/assessments/quiz-design-patterns" element={<AssessmentEight />}></Route>
      <Route path="/industryelective/assessments/quiz-unit-test" element={<AssessmentNine />}></Route>

      <Route path="/intelligentsystems/assessments/robotics-quiz" element={<AssessmentTen />}></Route>
      <Route path="/intelligentsystems/assessments/problems-using-search-quiz" element={<AssessmentEleven />}></Route>
      <Route path="/intelligentsystems/assessments/dip-long-quiz" element={<AssessmentTwelve />}></Route>

      <Route path="*" element={<Navigate to="/" replace />}/>
    </Routes>
  )
}

export default App;