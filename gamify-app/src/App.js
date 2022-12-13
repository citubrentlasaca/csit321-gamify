import './App.css';
import * as React from 'react';
import AddItems from './Components/Lasaca/AddItems.js'
import AnswerAssessment from './Components/Lasaca/AnswerAssessment.js';
import AboutUs from './Components/Pepito/AboutUs.js';
import {Stack} from "@mui/material";

function App() {
  return (
    <div>
        <AboutUs></AboutUs>
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
