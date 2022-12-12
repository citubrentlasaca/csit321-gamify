import './App.css';
import * as React from 'react';
import AddItems from './Components/AddItems.js'
import AnswerAssessment from './Components/AnswerAssessment.js';
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
