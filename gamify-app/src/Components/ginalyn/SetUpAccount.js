//import { Visibility, VisibilityOff } from "@mui/icons-material";
import { TextField, Stack, Button } from "@mui/material";
import logo from '../../Images/applogo.png';
//import RegistrationFormStudent from "./RegistrationFormStudent";
//import * as React from 'react';
//import { useHistory } from "react-router-dom";

function SetUpAccount() {
    //const history = useHistory();
  
    /*const routeChange = () =>{ 
        let path = RegistrationFormStudent; 
        history.push(path);
    }*/
    return (
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
                    <h1 style={{textAlign: "left", color: "#7A8889", fontSize: 24}}>Student Account Information</h1>
                    <hr className="line"></hr>
                    <Stack spacing={4}>
                        <h1 style={{textAlign: "left", color: "black", fontSize: 24, marginBottom: 5, marginTop: 5}}>Setup Login Credentials</h1>
                        <TextField
                            id="outlined-username"
                            label="Username"
                            sx={{backgroundColor: "white", borderRadius: 3}}
                            //onChange={handleUsernameChange}
                        />
                        <TextField
                            id="outlined-email"
                            label="Email"
                            sx={{backgroundColor: "white", borderRadius: 3}}
                            aize="small"
                            //onChange={handleUsernameChange}
                        />
                        <TextField
                            id="outlined-password"
                            label="Password"
                            sx={{backgroundColor: "white", borderRadius: 3}}
                            //onChange={handleChange('password')}
                        />
                    </Stack>
                <Button size="large" variant="contained" style={{backgroundColor: "black", marginTop: 40, borderRadius: 10, fontWeight: "bold", marginLeft: 180}}>Next</Button>
                </div>
            </Stack>
        </div>
    );
  }
  
  export default SetUpAccount;