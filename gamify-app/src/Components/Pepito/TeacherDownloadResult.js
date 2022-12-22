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
import Collapsible from 'react-collapsible';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function TeacherDownloadResultPage() {
    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate("/teacher-assessments");
    }
    const [resultId, setResultId] = React.useState();
    const [studentScore, setStudentScore] = React.useState();
    const [perfectScore, setPerfectScore] = React.useState();
    const [attempt, setAttempt] = React.useState();

    const results = [
        { resultid: 1, attempt: 1, studentscore: 46, perfectscore: 50},
        { resultid: 2, attempt: 1, studentscore: 47, perfectscore: 50},
        { resultid: 3, attempt: 1, studentscore: 48, perfectscore: 50},
        { resultid: 4, attempt: 1, studentscore: 50, perfectscore: 50},
        { resultid: 5, attempt: 1, studentscore: 49, perfectscore: 50},
      ]

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
                studentid : 5
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
    
      const getAll = async () => {
        try {
          const response = await axios.get(`http://localhost:8080/result/getAllResult`);
        } catch (error) {
          console.error(error); // catch any errors
        }
      } 

      const getResult = async () => {
        try {
          const response = await axios.get(`http://localhost:8080/result/getByResultid?resultid=${resultId}`);
          setAttempt(response.data.attempt);
          setStudentScore(response.data.studentscore);
          setPerfectScore(response.data.perfectscore);
          console.log(response.data); // log the data to the console
        } catch (error) {
          console.error(error); // catch any errors
        }
      } 

      const getAttempt = async () => {
        try {
          const response = await axios.get(`http://localhost:8080/result/getAttempt?resultid=${resultId}`);
          setAttempt(response.data);
          console.log(response.data); // log the data to the console
        } catch (error) {
          console.error(error); // catch any errors
        }
      }

      const getStudentScore = async () => {
        try {
          const response = await axios.get(`http://localhost:8080/result/getStudentScore?resultid=${resultId}`);
          setStudentScore(response.data);
          console.log(response.data); // log the data to the console
        } catch (error) {
          console.error(error); // catch any errors
        }
      }

      const getPerfectScore = async () => {
        try {
          const response = await axios.get(`http://localhost:8080/result/getPerfectScore?resultid=${resultId}`);
          setPerfectScore(response.data);
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
        try {
            const response = await axios.delete(`http://localhost:8080/result/deleteResult/${resultId}`);
            console.log(response.data); // log the data to the console
          } catch (error) {
            console.error(error); // catch any errors
          }
      };

    const [value, setValue] = React.useState(2);  
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
                    <Tab label="Home" href="/teacher-homepage" icon={<HomeIcon style={{fontSize: 40}}/>} iconPosition="start" 
                        style={{fontSize: 32, fontWeight: "bold", color: "black", marginRight: 10}}/>
                    <Tab label="Activity" href="/actvity" icon={<HistoryIcon style={{fontSize: 40}}/>} iconPosition="start" 
                        style={{fontSize: 32, fontWeight: "bold", color: "black", marginRight: 10}}/>
                    <Tab label="Assessments" href="/teacher-assessments" icon={<ViewListIcon style={{fontSize: 40}}/>} iconPosition="start" 
                            style={{fontSize: 32, fontWeight: "bold", color: "black", marginRight: 10}}/>
                    <Tab label="Profile" href="/teacher-profile" icon={<PersonIcon style={{fontSize: 40}}/>} iconPosition="start" 
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
                    <IconButton size = "large"> <BsFillCaretLeftFill fontSize= "inherit" onClick={handleBackClick}/> </IconButton> 
                    <div>
                        <h2 style={{align: "center"}}>Review on OOP Concepts Assessment</h2>
                    </div>
                </Stack>
            </div>
            
            <div>
                <div className = "Student-scores">
                    <table className = "Table" >
                        <thead>
                            <tr>
                                <th style={{fontSize: 20, border: "solid", width: "300px", borderBottom: "solid", backgroundColor: "#00ffff"}}>Result Id</th>
                                <th style={{fontSize: 20, border: "solid", width: "300px", backgroundColor: "#00ffff"}}>Attempt/s Allowed</th>
                                <th style={{fontSize: 20, border: "solid", width: "300px", backgroundColor: "#00ffff"}}>Student Score</th>
                                <th style={{fontSize: 20, border: "solid", width: "300px", backgroundColor: "#00ffff"}}>Perfect Score</th>
                            </tr>
                        </thead>

                        <tbody>
                            { results.map((val, key) =>
                                <tr key= {key}>
                                    <td style={{border: "solid", width: "300px"}} >{val.resultid}</td>
                                    <td style={{border: "solid", width: "300px"}} >{val.attempt}</td>
                                    <td style={{border: "solid", width: "300px"}} >{val.studentscore}</td>
                                    <td style={{border: "solid", width: "300px"}} >{val.perfectscore}</td>
                                    <td></td>
                                </tr>
                            )}</tbody>
                        </table>
                        <Button 
                            justifyContent="right"
                            variant="contained" 
                            size="small" 
                            startIcon={<BsDownload color = "black"/>} 
                            style={{ height: 50, backgroundColor: "#CAFDFF", marginTop: 15, marginBottom: 20, 
                            color:"black", fontWeight: "bolder",  borderRadius: "550px"}}>Download Scores
                        </Button>
                        <div 
                            style={{backgroundColor: "#016B85", color: "#016B8"}}>
                            <Collapsible 
                                backgroundcolor="white"
                                fullWidth 
                                triggerStyle={{margin: 10,color: "white"}} 
                                trigger=" ▼ Manage Students Scores">
                                
                                <div style={{backgroundColor: "white", border: "solid", borderColor: "#016B85", 
                                    borderWidth: "10px", marginTop: 5}}>
                                <Stack direction="row" justifyContent = 'center'>
                                    <TextField  
                                        id = "resultid" 
                                        value = {resultId} 
                                        onChange = {changeResultId}
                                        variant="outlined" 
                                        fullWidth        
                                        label = "Result Id Number" 
                                        helperText="Please Enter Result Id Number to View Record"
                                        style = {{
                                            width:"60vh", 
                                            align: "center", 
                                            marginTop: 50, 
                                            color: "black",
                                            marginBottom: 20}} />
                                    <IconButton aria-label = "badge" size = "large" onClick = {getResult}> <BsSearch/> </IconButton> 
                                </Stack>
                            
                                <Stack direction = "row" justifyContent = "space-between">
                                    <TextField 
                                        id="attempt" 
                                        value={attempt} 
                                        onChange={changeAttempt} 
                                        variant="outlined" 
                                        style={{
                                            border: "outset", 
                                            width:"150vh", 
                                            align: "center", 
                                            marginBottom: 0}}/>
                                    <TextField 
                                        id="studentscore" 
                                        value={studentScore} 
                                        onChange={changeStudentScore} 
                                        variant="outlined" 
                                        style={{
                                            border: "outset", 
                                            width:"150vh", 
                                            align: "center", 
                                            marginBottom: 0}}/>
                                    <TextField 
                                        id="perfectscore" 
                                        value={perfectScore} 
                                        onChange={changePerfectScore} 
                                        variant="outlined"
                                        style={{
                                            border: "outset", 
                                            width:"150vh", 
                                            align: "center", 
                                            marginBottom: 0}}/>     
                                </Stack>
                                
                                <Stack  direction="row" justifyContent="center">
                                    <div style={{marginRight: 200, marginTop: 0}}>Attempt/s Allowed</div>
                                    <div style={{marginRight: 225, marginTop: 0}}>Student Score</div>
                                    <div style={{marginLeft: 10, marginTop: 0}}>Perfect Score</div>
                                </Stack>
                    
                                <Stack direction = "row" justifyContent = 'center'>
                                    <Button 
                                        marginLeft= "100px"
                                        variant="contained" 
                                        size="small" 
                                        onClick={createResult} 
                                        startIcon = {<CheckIcon color = "black"/>} 
                                        style={{ height: 50, borderColor: "#32CD30", border:"solid", backgroundColor: "white", marginTop: 35, marginBottom: 20, 
                                        marginRight: 20, color:"green", fontWeight: "bolder",  borderRadius: "550px"}}>Add Score
                                    </Button>
                                    <Button 
                                        variant="contained" 
                                        size="small" 
                                        onClick={updateResult} 
                                        startIcon = {<EditIcon color = "blue"/>} 
                                        style={{ borderColor: "blue", border:"solid", marginRight: 20, height: 50, backgroundColor: "white", marginTop: 35, marginBottom: 20, 
                                        color:"blue", fontWeight: "bolder",  borderRadius: "550px"}}>Edit Score
                                    </Button>
                                    <Button 
                                        variant="contained" 
                                        size="small" 
                                        onClick={deleteResult} 
                                        startIcon = {<DeleteIcon color = "black"/>} 
                                        style={{ borderColor: "#FF0000", border:"solid", marginRight: 20, height: 50, backgroundColor: "white", marginTop: 35, marginBottom: 20, 
                                        color:"#FF0000", fontWeight: "bolder",  borderRadius: "550px"}}>Delete Score
                                    </Button>
                              
                                    </Stack>
                                </div>

                                </Collapsible>
                            </div> 
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TeacherDownloadResultPage;