//import { Visibility, VisibilityOff } from "@mui/icons-material";
import * as React from 'react';
import axios from 'axios';
import { TextField, Stack, Button, Radio, FormControlLabel, RadioGroup} from "@mui/material";
import logo from '../../Images/Cahutay/applogo.png';
import { useLocation, useNavigate } from "react-router-dom";

function RegistrationFormTeacher() {
    const {state} = useLocation();

    const [firstname, setFirstname] = React.useState("");
    const [lastname, setLastname] = React.useState("");
    const [gender, setGender] = React.useState("");
    const [birthday, setBirthday] = React.useState("");
    const [subjectnumber, setSubjectnumber] = React.useState("");
    const [descriptivetitle, setDescriptivetitle] = React.useState("");

    const changeFirstname = (event) => {
        setFirstname(event.target.value);
    };
    const changeLastname = (event) => {
        setLastname(event.target.value);
    };
    const changeGender = (event) => {
        setGender(event.target.value);
    };
    const changeBirthday = (event) => {
        setBirthday(event.target.value);
    };
    const changeSubjectnumber = (event) => {
        setSubjectnumber(event.target.value);
    };
    const changeDescriptivetitle = (event) => {
        setDescriptivetitle(event.target.value);
    };
    const navigate = useNavigate();
    
    const createTeacher = () => {
        axios
          .post('http://localhost:8080/teacher/postTeacher', {
            firstname: firstname,
            lastname: lastname,
            gender: gender,
            birthday: birthday,
            subjectnumber: subjectnumber,
            descriptivetitle: descriptivetitle,
            account: {
                accountid: state.accountid
            },
          })
          .then((response) => {
            console.log(response);
            navigate("/register-choose-teacher-avatar");
          })
          .catch((error) => {
            console.log(error);
          });
    };


    return (
        <div classname="App">
            <header className="App-header2-gc">
                <div className="bg-registration-gc">
                    <hr className="line-mid-gc"></hr>
                    <Stack direction="row">
                        <div className="welcome-gc">
                            <Stack>
                                <h1 style={{textAlign: "center", color: "black", fontSize: 30, marginBottom: 5}}>Welcome to Gamify!</h1>
                                <p style={{textAlign: "center", color: "black", fontSize: 22, marginBottom: 40}}>
                                    <em>Start your journey and make the most out<br/>
                                    of the fun and exciting assessment<br/>
                                    experience that you will ever have.</em>
                                </p>
                                <img src={logo} alt="gamify logo" style={{width: 300, height: 200, paddingLeft: 50}}/>
                            </Stack>
                        </div>
                        <div className="Registration-container-gc">
                            <h1 style={{textAlign: "left", color: "#7A8889", fontSize: 24}}>Teacheer Account Information</h1>
                            <hr className="line-gc"></hr>
                            <Stack spacing={0.5}>
                                <div>
                                    <p style={{textAlign: "left", color: "black", fontSize: 20, marginBottom: 10, marginTop: 6}}>Name of the Teacher</p>
                                    <Stack direction="row">
                                        <TextField
                                        id="outlined-firstname"
                                        label="Firstname"
                                        value={firstname}
                                        onChange={changeFirstname}
                                        sx={{backgroundColor: "white", borderRadius: 3, marginRight: 2, width: 300}}
                                        />
                                        <TextField
                                        id="outlined-lastname"
                                        label="Lastname"
                                        value={lastname}
                                        onChange={changeLastname}
                                        sx={{backgroundColor: "white", borderRadius: 3, width: 300}}
                                        />
                                    </Stack>
                                </div>
                                <div>
                                    <p style={{textAlign: "left", color: "black", fontSize: 20, marginBottom: 5, marginTop: 6}}>Gender</p>
                                    <Stack direction="row">
                                        <RadioGroup
                                            row
                                            aria-labelledby="register-gender"
                                            name="gender"
                                            defaultValue="male"
                                            value={gender}
                                            onChange={changeGender}
                                        >
                                            <FormControlLabel
                                            value="male"
                                            control={<Radio />}
                                            label="Male"
                                            sx={{color: "black", marginLeft: 8, marginRight: 15}}
                                            />
                                            <FormControlLabel
                                            value="female"
                                            control={<Radio />}
                                            label="Female"
                                            sx={{color: "black"}}
                                            />
                                        </RadioGroup>
                                    </Stack>
                                </div>
                                <div align="left">
                                    <p style={{textAlign: "left", color: "black", fontSize: 20, marginBottom: 10, marginTop: 6}}>Date of Birth</p>
                                    <TextField
                                        id="outlined-birthday"
                                        label="mm/dd/yyyy"
                                        value={birthday}
                                        onChange={changeBirthday}
                                        sx={{backgroundColor: "white", borderRadius: 3, width: 215}}
                                    />
                                </div>
                                <div>
                                    <p style={{textAlign: "left", color: "black", fontSize: 20, marginBottom: 10, marginTop: 6}}>Course / Subject</p>
                                    <Stack direction="row">
                                        <TextField
                                        id="outlined-subnum"
                                        label="Subject Number"
                                        value={subjectnumber}
                                        onChange={changeSubjectnumber}
                                        sx={{backgroundColor: "white", borderRadius: 3, marginRight: 2, width: 305}}
                                        />
                                        <TextField
                                        id="outlined-title"
                                        label="Descriptive Title"
                                        value={descriptivetitle}
                                        onChange={changeDescriptivetitle}
                                        sx={{backgroundColor: "white", borderRadius: 3, width: 300}}
                                        />
                                    </Stack>
                                </div>
                            </Stack>
                        <Button size="large" variant="contained" onClick={createTeacher} style={{backgroundColor: "black", marginTop: 30, borderRadius: 10, fontWeight: "bold", marginLeft: 180}}>Next</Button>
                        </div>
                    </Stack>
                </div>
            </header>
        </div>
    );
  }
  
  export default RegistrationFormTeacher;