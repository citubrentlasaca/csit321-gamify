import logo from '../../Images/Pepito/logo.png';
import brand from '../../Images/Pepito/brand.png';
import * as React from 'react';
import { TextField, Button, Stack, Tabs, Tab, FormControl, InputLabel, Select, Menu, MenuItem, IconButton, ListItemIcon, ListItemText, Divider } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import HistoryIcon from '@mui/icons-material/History';
import ViewListIcon from '@mui/icons-material/ViewList';
import PersonIcon from '@mui/icons-material/Person';
import MenuIcon from '@mui/icons-material/Menu';
import LogoutIcon from '@mui/icons-material/Logout';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { BsFillCaretLeftFill, BsSearch, BsDownload} from "react-icons/bs";
import CheckIcon from '@mui/icons-material/Check';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import BadgeIcon from '@mui/icons-material/Badge';
import axios from 'axios';


function TeacherDownloadResultPage() {
    const [resultId, setResultId] = React.useState();
    const [studentScore, setStudentScore] = React.useState();
    const [perfectScore, setPerfectScore] = React.useState();
    const [attempt, setAttempt] = React.useState();

    const changeResultId = (event) => {
        setResultId(event.target.value);
    };
    const changeAttempt = (event) => {
        setAttempt(event.target.value);
    };
    const changeStudentScore = (event) => {
        setStudentScore(event.target.value);
    };
    const changePerfectScore= (event) => {
        setPerfectScore(event.target.value);
    };
    const createResult = () => {
        axios.post('http://localhost:8080/result/postResult', {
            studentscore: studentScore,
            perfectscore: perfectScore,
            attempt: attempt,
            student:
            {
                studentid : 1
            },
            assessment:
            {
                assessmentid : 1
            }
          })
          .then((response) => {
            console.log(response);
          })
          .catch((error) => {
            console.log(error);
          });
      };
    
      const getResultId = async () => {
        try {
          const response = await axios.get(`http://localhost:8080/result/getByResultid?resultid=${resultId}`);
          //setResultId(response.data);
          setAttempt(response.data.attempt);
          setStudentScore(response.data.studentScore);
          setPerfectScore(response.data.perfectScore);
          console.log(response.data); // log the data to the console
        } catch (error) {
          console.error(error); // catch any errors
        }
      }

      const updateResult = async () => {
        try {
          const response = await axios.put(`http://localhost:8080/result/putResult?resultid=${resultId}`, {
            studentscore: studentScore,
            attempt: attempt
          });
          console.log(response.data); // log the data to the console
        } catch (error) {
          console.error(error); // catch any errors
        }
      }

      const deleteResult = async () => {
        const response = await fetch(`http://localhost:8080/result/getByResultid?resultid=${resultId}`);
        const result = await response.json();
    
        await fetch(`localhost:8080/result/deleteResult//${result}`, {
          method: "DELETE"
        });
      };

    /*const data = [
        { resultid: 1, attempt: 1, studentscore: 50, perfectscore: 50},
        { resultid: 2, attempt: 1, studentscore: 50, perfectscore: 50},
        { resultid: 3, attempt: 1, studentscore: 50, perfectscore: 50},
        { resultid: 4, attempt: 1, studentscore: 50, perfectscore: 50},
        { resultid: 5, attempt: 1, studentscore: 50, perfectscore: 50},
      ]*/
    const [value, setValue] = React.useState(0);  
    const handleChange = (event,newValue) => {
        setValue(newValue);
}
    return (
        <div className="landing">
            <Stack direction="row" >
                <div>
                    <img src={logo} alt="logo" style={{width: 120, height: 80, paddingLeft: 10}}/>
                </div>
                <div>
                    <img src={brand} alt="brand name" style={{width: 200, height: 60, paddingTop: 20}}/>
                </div>
                <Tabs value={value} onChange={handleChange} style={{marginTop: 15, marginLeft: 70}}>
                    <Tab label="Home" href="/home" icon={<HomeIcon style={{fontSize: 40}}/>} iconPosition="start" 
                        style={{fontSize: 32, fontWeight: "bold", color: "black", marginRight: 10}}/>
                    <Tab label="Activity" href="/actvity" icon={<HistoryIcon style={{fontSize: 40}}/>} iconPosition="start" 
                        style={{fontSize: 32, fontWeight: "bold", color: "black", marginRight: 10}}/>
                    <Tab label="Assessments" href="/assessments" icon={<ViewListIcon style={{fontSize: 40}}/>} iconPosition="start" 
                            style={{fontSize: 32, fontWeight: "bold", color: "black", marginRight: 10}}/>
                    <Tab label="Profile" href="/profile" icon={<PersonIcon style={{fontSize: 40}}/>} iconPosition="start" 
                            style={{fontSize: 32, fontWeight: "bold", color: "black", marginRight: 10}}/>
                </Tabs>
                <PopupState variant="popover" popupId="demo-popup-menu">
                    {(popupState) => (
                        <React.Fragment>
                        <IconButton aria-label="menu" variant="contained" {...bindTrigger(popupState)} 
                            style={{backgroundColor: "white", height: 50, width: 50, marginTop: 25, marginLeft: 30}}>
                            <MenuIcon style={{fontSize: 40, fontWeight: "bold", color: "black"}} />
                        </IconButton>
                        <Menu {...bindMenu(popupState)}>
                            <MenuItem disabled style={{fontWeight: "bold", color: "black"}}>@username</MenuItem>
                            <Divider />
                            <MenuItem onClick={popupState.close}>
                                <ListItemIcon>
                                    <LogoutIcon style={{fontSize: 30}} />
                                </ListItemIcon>
                                <ListItemText style={{fontWeight: "bold", color: "black"}}>Logout</ListItemText>
                            </MenuItem>
                        </Menu>
                    </React.Fragment>
                )}
                </PopupState>          
            </Stack>
            <Divider sx={{ borderBottomWidth: 7, borderColor: "#609292" }}/>

        <div className="Numbers-bg">  
            <div className="CourseDownload-name">
                <Stack direction = "row" justifyContent = 'center'>
                    <div>
                        <h2 style={{align: "center", color: "#00ffff"}}>
                            [CSIT321 F1 - C0] Applications Development and Emerging Technologies</h2>
                    </div>
                </Stack>
            </div>

            <div className= "Assessment-title">
                <Stack direction = "row" justifyContent = 'center'>
                    <IconButton size = "large"> <BsFillCaretLeftFill fontSize= "inherit"/> </IconButton> 
                    <div>
                        <h2 style={{align: "center"}}>Review on OOP Concepts Assessment</h2>
                    </div>
                </Stack>
            </div>
            
            <div>
                <div className = "Student-scores">
                    <Stack direction="row" justifyContent = 'center'>
                        <TextField  id = "resultid" value = {resultId} variant="outlined" fullWidth 
                                    label = "Result Id Number" helperText="Please Enter Result Id Number to View Record"
                                    style = {{width:"60vh", align: "center", marginTop: 50, color: "black", marginBottom: 20}} />
                        <IconButton aria-label = "badge" size = "large" onClick = {getResultId}> <BsSearch/> </IconButton> 
                    </Stack>

                    <Stack direction="row" justifyContent="space-between">
                        <FormControl fullWidth>
                            <InputLabel id = "attempt">Select how many attempts allowed</InputLabel>
                            <Select
                                labelId = "attempt"
                                id = "attempt"
                                value = {attempt}
                                label = "Enter number of attempt/s"
                                onChange = {changeAttempt}
                                >
                                <MenuItem value={1}>1</MenuItem>
                                <MenuItem value={2}>2</MenuItem>
                                <MenuItem value={3}>3</MenuItem>
                                <MenuItem value={4}>4</MenuItem>
                                <MenuItem value={5}>5</MenuItem>
                            </Select>
                        </FormControl>
                        <TextField id="studentscore" label="Student Score" value={studentScore} onChange={changeStudentScore} variant="outlined" 
                            style={{width:"150vh", align: "center", borderColor: "black", marginBottom: 20}}/>
                        <TextField id="perfectscore" label="Perfect Score" value={perfectScore} onChange={changePerfectScore} variant="outlined"
                            style={{borderStyle: "solid", width:"150vh", align: "center", borderColor: "black", marginBottom: 20}}/>     
                </Stack>
            
                    <Stack direction = "row" justifyContent = 'right'>   
                        <IconButton className="checkButton" aria-label="check" size="large" onClick={createResult} sx={{color:"green", marginTop:"20px"}}>
                            <CheckIcon fontSize="large"/>
                        </IconButton>
                        <IconButton className="badgeButton" aria-label="badge" size="large" onClick={getResultId} sx={{color:"blue", marginTop:"20px"}}>
                            <BadgeIcon fontSize="large"/>
                        </IconButton>
                        <IconButton className="editButton" aria-label="edit" size="large" onClick={updateResult} sx={{color:"blue", marginTop:"20px"}}>
                            <EditIcon fontSize="large"/>
                        </IconButton>
                        <IconButton className="deleteButton" aria-label="delete" size="large" onClick={deleteResult} sx={{color:"red", marginTop:"20px"}}>
                            <DeleteIcon fontSize="large"/>
                        </IconButton>
                        <Button variant="contained" size="small" startIcon={<BsDownload color = "black"/>} 
                            style={{ height: 50, backgroundColor: "#CAFDFF", marginTop: 35, marginBottom: 20, 
                            color:"black", fontWeight: "bolder",  borderRadius: "550px"}}>Download Scores
                        </Button>
                        <div style={{width: "30px"}}></div>      
                    </Stack>


                        {/*<table className = "Table">
                        <thead>
                            <tr>
                                <th style={{fontSize: 30, border: "solid", width: "300px", borderBottom: "solid"}}>Result Id</th>
                                <th style={{fontSize: 30, border: "solid", width: "300px"}}>Attempt</th>
                                <th style={{fontSize: 30, border: "solid", width: "300px"}}>Student Score</th>
                                <th style={{fontSize: 30, border: "solid", width: "300px"}}>Perfect Score</th>
                            </tr>
                        </thead>

                        <tbody>
                            {this.state.results.map( result => 
                                <tr key= {result.resultId}>
                                    <td>{result.attempt}</td>
                                    <td>{result.studentScore}</td>
                                    <td>{result.perfectScore}</td>
                                    <td></td>
                            </tr>
                        )}</tbody>

                        {data.map((val, key) => {
                        return (




                            <tr key={key}>
                            <td justifyContent = 'center' style={{border: "solid", width: "300px"}} >{val.resultid}</td>
                            <td justifyContent = 'center' style={{border: "solid", width: "300px"}} >{val.attempt}</td>
                            <td justifyContent = 'center' style={{border: "solid", width: "300px", alignContent: "center"}} >{val.studentscore}</td>
                            <td justifyContent = 'center' style={{border: "solid", width: "300px", alignContent: "center"}} >{val.perfectscore}</td>
                            </tr>
                        )})}
                        </table>*/}
                    
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TeacherDownloadResultPage;