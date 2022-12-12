import './App.css';
import * as React from 'react';
import AddItems from './Components/Lasaca/AddItems.js'
import AnswerAssessment from './Components/Lasaca/AnswerAssessment.js';
import {Stack} from "@mui/material";

function App() {
  return(
    <Stack>
        <AddItems/>
        {/* <AnswerAssessment/> */}
    </Stack>
  )
}

export default App;
