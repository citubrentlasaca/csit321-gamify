import '../../App.css';
import * as React from 'react';
import axios from 'axios';
import AddItemButton from './AddItemButton.js'
import {Stack, TextField, FormControl, InputLabel, Select, MenuItem, Box, IconButton, Button} from "@mui/material";
import CheckIcon from '@mui/icons-material/Check';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import BadgeIcon from '@mui/icons-material/Badge';

function AddItems(){
  const [itemId, setItemId] = React.useState();
  const [type, setType] = React.useState("");
  const [timer, setTimer] = React.useState("");
  const [question, setQuestion] = React.useState("");
  const [correctAnswer, setCorrectAnswer] = React.useState("");
  const [choiceOne, setchoiceOne] = React.useState("");
  const [choiceTwo, setchoiceTwo] = React.useState("");
  const [choiceThree, setchoiceThree] = React.useState("");
  const intTimer = parseInt(timer, 10);

  const changeType = (event) => {
    setType(event.target.value);
  };
  const changeTimer = (event) => {
    setTimer(event.target.value);
  };
  const changeQuestion = (event) => {
    setQuestion(event.target.value);
  };
  const changeCorrectAnswer = (event) => {
    setCorrectAnswer(event.target.value);
  };
  const changeChoiceOne = (event) => {
    setchoiceOne(event.target.value);
  };
  const changeChoiceTwo = (event) => {
    setchoiceTwo(event.target.value);
  };
  const changeChoiceThree = (event) => {
    setchoiceThree(event.target.value);
  };
  const createItem = () => {
    axios
      .post('http://localhost:8080/item/postItem', {
        questiontype: type,
        timer: intTimer,
        question: question,
        answer: correctAnswer,
        choiceone: choiceOne,
        choicetwo: choiceTwo,
        choicethree: choiceThree,
        assessment:
        {
            assessmentid : 9
        }
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const getItemId = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/item/getItemId?question=${question}`);
      setItemId(response.data);
      console.log(response.data); // log the data to the console
    } catch (error) {
      console.error(error); // catch any errors
    }
  }
  const updateItem = async () => {
    try {
      const response = await axios.put(`http://localhost:8080/item/putItem?itemid=${itemId}`, {
        questiontype: type,
        timer: intTimer,
        question: question,
        answer: correctAnswer,
        choiceone: choiceOne,
        choicetwo: choiceTwo,
        choicethree: choiceThree,
      });
      console.log(response.data); // log the data to the console
    } catch (error) {
      console.error(error); // catch any errors
    }
  }
  const deleteItem = async () => {
    const response = await fetch(`http://localhost:8080/item/getItemId?question=${question}`);
    const item = await response.json();

    await fetch(`http://localhost:8080/item/deleteItem/${item}`, {
      method: "DELETE"
    });
  };

  return (
    <Stack direction="column" justifyContent='center'>
      <Stack direction="row" justifyContent='center'>
      <Box
      sx={{
        width: '400px',
        height: 'auto',
        borderRadius: '10px',
        backgroundColor: 'white',
        margin: '50px',
        marginRight: '25px',
        padding: '50px',
        textAlign: 'center'
      }}
    >
      <FormControl fullWidth>
        <InputLabel id="type">Select Type of Question</InputLabel>
        <Select
          labelId="type"
          id="questionType"
          value={type}
          label="Select Type of Question"
          onChange={changeType}
        >
          <MenuItem value={"Multiple Choice"}>Multiple Choice</MenuItem>
          <MenuItem value={"Identification"}>Identification</MenuItem>
        </Select>
      </FormControl>
      <br></br>
      <br></br>
      <FormControl fullWidth>
        <InputLabel id="timer">Set Timer</InputLabel>
        <Select
          labelId="timer"
          id="questionTimer"
          value={timer}
          label="Set Timer"
          onChange={changeTimer}
        >
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={20}>20</MenuItem>
          <MenuItem value={30}>30</MenuItem>
          <MenuItem value={40}>40</MenuItem>
          <MenuItem value={50}>50</MenuItem>
          <MenuItem value={60}>60</MenuItem>
        </Select>
      </FormControl>
      <IconButton className="checkButton" aria-label="check" size="large" onClick={createItem} sx={{color:"green", marginTop:"20px"}}>
        <CheckIcon fontSize="large"/>
      </IconButton>
      <IconButton className="badgeButton" aria-label="badge" size="large" onClick={getItemId} sx={{color:"blue", marginTop:"20px"}}>
        <BadgeIcon fontSize="large"/>
      </IconButton>
      <IconButton className="editButton" aria-label="edit" size="large" onClick={updateItem} sx={{color:"blue", marginTop:"20px"}}>
        <EditIcon fontSize="large"/>
      </IconButton>
      <IconButton className="deleteButton" aria-label="delete" size="large" onClick={deleteItem} sx={{color:"red", marginTop:"20px"}}>
        <DeleteIcon fontSize="large"/>
      </IconButton>
    </Box>

    <Box
      sx={{
        width: '600px',
        height: 'auto',
        borderRadius: '10px',
        backgroundColor: 'white',
        margin: '50px',
        marginLeft: '25px',
        padding: '50px'
      }}
    >
      <TextField id="question" label="Question" variant="outlined" value={question} onChange={changeQuestion} fullWidth/>
      <br></br>
      <br></br>
      <Stack direction="row" justifyContent="space-between">
      <TextField id="answer" label="Correct Answer" value={correctAnswer} onChange={changeCorrectAnswer} variant="outlined" />
      <TextField id="choiceOne" label="Choice One" value={choiceOne} onChange={changeChoiceOne} variant="outlined"/>
      </Stack>
      <br></br>
      <Stack direction="row" justifyContent="space-between">
      <TextField id="choiceTwo" label="Choice Two" value={choiceTwo} onChange={changeChoiceTwo} variant="outlined" />
      <TextField id="choiceThree" label="Choice Three" value={choiceThree} onChange={changeChoiceThree} variant="outlined" />
      </Stack>
    </Box>
    </Stack>
    
    <Stack justifyContent="center" alignItems="center">
      <AddItemButton/>
    </Stack>
      <Box
      sx={{
        width: '100%',
        height: '200px',
        backgroundColor: 'white',
        bottom: 0,
        position: 'fixed',
        zIndex: '999'
      }}
      >
        <Stack direction="row" justifyContent="center" spacing={2} marginTop="80px">
          <Button variant="contained" color="success" sx={{width: "200px"}}>
            Save Changes
          </Button>
          <Button variant="contained" color="error" sx={{width: "200px"}}>
            Discard Changes
          </Button>
        </Stack>
      </Box>
    </Stack>
  );
}

export default AddItems;