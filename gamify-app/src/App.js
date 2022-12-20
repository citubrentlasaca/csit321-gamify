import './App.css';
import * as React from 'react';
import AddItems from './Components/Lasaca/AddItems.js'
import AnswerAssessment from './Components/Lasaca/AnswerAssessment.js';
import StudentResult from './Components/Pepito/StudentResult';
import StudentReview from './Components/Pepito/StudentReview';
import TeacherResult from './Components/Pepito/TeacherResult';
import TeacherDownloadResult from './Components/Pepito/TeacherDownloadResult';
import Price from './Components/Pepito/Price';
import AboutUs from './Components/Pepito/AboutUs';
import FAQ from './Components/Pepito/FAQ';
import {Stack} from "@mui/material";

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
