import '../../App.css';
import {Stack, Button} from "@mui/material";
import * as React from 'react';
import Timer from './Timer.js';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: "#ffffff"
    }
  },
});

function AnswerAssessment(){

  
  
  return (
    <Stack direction="column">
        <br/><br/>
        <Timer/>
        <Stack alignItems="center" color="white">
            <h1>What is my name?</h1>
        </Stack>
        <br/><br/>
        <Stack direction="row" justifyContent="space-evenly">
            <ThemeProvider theme={theme}>
                <Button variant="contained" size="large" color="primary" 
                sx={{maxWidth: '300px', maxHeight: '200px', minWidth: '300px', minHeight: '200px'}}>Brandon Lasaca</Button>
                <Button variant="contained" size="large" color="primary" 
                sx={{maxWidth: '300px', maxHeight: '200px', minWidth: '300px', minHeight: '200px'}}>Brent Lasaca</Button>
                <Button variant="contained" size="large" color="primary" 
                sx={{maxWidth: '300px', maxHeight: '200px', minWidth: '300px', minHeight: '200px'}}>Brant Lasaca</Button>
                <Button variant="contained" size="large" color="primary" 
                sx={{maxWidth: '300px', maxHeight: '200px', minWidth: '300px', minHeight: '200px'}}>Brent Lacasa</Button>
            </ThemeProvider>
        </Stack>
    </Stack>
  );
}

export default AnswerAssessment;