import '../../App.css';
import {Stack, Button} from "@mui/material";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ReactDOM from 'react-dom';
import AnswerAssessment3 from '../../Components/Lasaca/AnswerAssessment3.js'

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
  const [color, setColor] = useState(initialColor);
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
      const response = await axios.get(`http://localhost:8080/item/getTimerByItemid?itemid=${2}`);
      setTimer(response.data);
    }
    fetchData();
  }, []);
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(`http://localhost:8080/item/getQuestionByItemid?itemid=${2}`);
      setQuestion(response.data);
    }
    fetchData();
  }, []);
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(`http://localhost:8080/item/getAnswerByItemid?itemid=${2}`);
      setCorrectAnswer(response.data);
    }
    fetchData();
  }, []);
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(`http://localhost:8080/item/getChoiceoneByItemid?itemid=${2}`);
      setchoiceOne(response.data);
    }
    fetchData();
  }, []);
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(`http://localhost:8080/item/getChoicetwoByItemid?itemid=${2}`);
      setchoiceTwo(response.data);
    }
    fetchData();
  }, []);
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(`http://localhost:8080/item/getChoicethreeByItemid?itemid=${2}`);
      setchoiceThree(response.data);
    }
    fetchData();
  }, []);
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (timer === 0) {
        clearInterval(intervalId);
        const container = document.getElementById('root');
      console.log('rendering new component'); // add this line to verify that a new component is being rendered
      ReactDOM.render(<AnswerAssessment3/>, container);
      } else {
        setTimer(currentTimer => currentTimer - 1);
      }
    }, 1000);
    return () => clearInterval(intervalId);
  }, [timer]);
  const timeoutAfterAnswer = () => {
    console.log('timeoutAfterAnswer called'); // add this line to verify that the function is being called
    setTimeout(() => {
      const container = document.getElementById('root');
      console.log('rendering new component'); // add this line to verify that a new component is being rendered
      ReactDOM.render(<AnswerAssessment3/>, container);
    }, 1000); // unmount component after 3 seconds
  };
  
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
        <ThemeProvider theme={theme} id="root">
  
  <Button variant="contained" size="large" color={choiceOneColor}
          onClick={() => {
            setChoiceOneColor('red');
            timeoutAfterAnswer();
          }}
          sx={{maxWidth: '300px', maxHeight: '200px', minWidth: '300px', minHeight: '200px'}}>
    {choiceOne}
  </Button>
  <Button variant="contained" size="large" color={choiceTwoColor}
          onClick={() => {
            setChoiceTwoColor('red');
            timeoutAfterAnswer();
          }}
          sx={{maxWidth: '300px', maxHeight: '200px', minWidth: '300px', minHeight: '200px'}}>
    {choiceTwo}
  </Button>
  <Button variant="contained" size="large" color={choiceThreeColor}
          onClick={() => {
            setChoiceThreeColor('red');
            timeoutAfterAnswer();
          }}
          sx={{maxWidth: '300px', maxHeight: '200px', minWidth: '300px', minHeight: '200px'}}>
    {choiceThree}
  </Button>
  <Button variant="contained" size="large" color={correctColor}
          onClick={() => {
            setCorrectColor('green');
            timeoutAfterAnswer();
          }}
          sx={{maxWidth: '300px', maxHeight: '200px', minWidth: '300px', minHeight: '200px'}}>
    {correctAnswer}
  </Button>
</ThemeProvider>
        </Stack>
    </Stack>
  );
}


export default AnswerAssessment;