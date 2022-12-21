import '../../App.css';
import {Stack, Button} from "@mui/material";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    white: {
      main: "#FFFFFF"
    },
    green: {
      main: "#00FF00"
    },
    red: {
      main: "#FF0000"
    },
  },
});
const useColor = (initialColor) => {
  const [color, setColor] = React.useState(initialColor);

  return [color, setColor];
}

function AnswerAssessment(){
  const [timer, setTimer] = useState();
  const [question, setQuestion] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [choiceOne, setchoiceOne] = useState("");
  const [choiceTwo, setchoiceTwo] = useState("");
  const [choiceThree, setchoiceThree] = useState("");
  const [correctColor, setCorrectColor] = useColor('white');
  const [choiceOneColor, setChoiceOneColor] = useColor('white');
  const [choiceTwoColor, setChoiceTwoColor] = useColor('white');
  const [choiceThreeColor, setChoiceThreeColor] = useColor('white');

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(`http://localhost:8080/item/getTimerByItemid?itemid=${1}`);
      setTimer(response.data);
    }
    fetchData();
  }, []);
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(`http://localhost:8080/item/getQuestionByItemid?itemid=${1}`);
      setQuestion(response.data);
    }
    fetchData();
  }, []);
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(`http://localhost:8080/item/getAnswerByItemid?itemid=${1}`);
      setCorrectAnswer(response.data);
    }
    fetchData();
  }, []);
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(`http://localhost:8080/item/getChoiceoneByItemid?itemid=${1}`);
      setchoiceOne(response.data);
    }
    fetchData();
  }, []);
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(`http://localhost:8080/item/getChoicetwoByItemid?itemid=${1}`);
      setchoiceTwo(response.data);
    }
    fetchData();
  }, []);
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(`http://localhost:8080/item/getChoicethreeByItemid?itemid=${1}`);
      setchoiceThree(response.data);
    }
    fetchData();
  }, []);
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (timer === 0) {
        clearInterval(intervalId);
      } else {
        setTimer(currentTimer => currentTimer - 1);
      }
    }, 1000);
    return () => clearInterval(intervalId);
  }, [timer]);
  
  return (
    <Stack direction="column">
        <br/><br/>
        <Stack direction="column" alignItems="center" justifyContent="center" fontSize="100px" color="white">
          {timer}
        </Stack>
        <Stack alignItems="center" color="white">
            <h1>{question}</h1>
        </Stack>
        <br/><br/><br/><br/><br/>
        <Stack direction="row" justifyContent="space-evenly">
            <ThemeProvider theme={theme}>
            <Button variant="contained" size="large" color={correctColor} onClick={() => setCorrectColor('green')} 
              sx={{maxWidth: '300px', maxHeight: '200px', minWidth: '300px', minHeight: '200px'}}>{correctAnswer}</Button>
            <Button variant="contained" size="large" color={choiceOneColor} onClick={() => setChoiceOneColor('red')}  
              sx={{maxWidth: '300px', maxHeight: '200px', minWidth: '300px', minHeight: '200px'}}>{choiceOne}</Button>
            <Button variant="contained" size="large" color={choiceTwoColor} onClick={() => setChoiceTwoColor('red')}  
              sx={{maxWidth: '300px', maxHeight: '200px', minWidth: '300px', minHeight: '200px'}}>{choiceTwo}</Button>
            <Button variant="contained" size="large" color={choiceThreeColor} onClick={() => setChoiceThreeColor('red')}  
              sx={{maxWidth: '300px', maxHeight: '200px', minWidth: '300px', minHeight: '200px'}}>{choiceThree}</Button>
            </ThemeProvider>
        </Stack>
    </Stack>
  );
}


export default AnswerAssessment;