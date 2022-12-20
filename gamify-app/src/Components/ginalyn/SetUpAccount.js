import * as React from 'react';
import axios from 'axios';
import { TextField, Stack, Button } from "@mui/material";
import logo from '../../Images/applogo.png';
import { useNavigate } from "react-router-dom";

function SetUpAccount() {
    const [username, setUsername] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const changeUsername = (event) => {
        setUsername(event.target.value);
    };
    const changeEmail = (event) => {
        setEmail(event.target.value);
    };
    const changePassword = (event) => {
        setPassword(event.target.value);
    };

    const navigate = useNavigate();
    
    const createAccount = () => {
        axios
          .post('http://localhost:8080/account/postAccount', {
            username: username,
            email: email,
            password: password,
          })
          .then((response) => {
            console.log(response);
            navigate("/register-student", {
                state: {
                    accountid: response.accountid,
                }
            });
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
                            <h1 style={{textAlign: "left", color: "#7A8889", fontSize: 24}}>Student Account Information</h1>
                            <hr className="line"></hr>
                            <Stack spacing={4}>
                                <h1 style={{textAlign: "left", color: "black", fontSize: 24, marginBottom: 5, marginTop: 5}}>Setup Login Credentials</h1>
                                <TextField
                                    id="outlined-username"
                                    label="Username"
                                    value={username}
                                    onChange={changeUsername}
                                    sx={{backgroundColor: "white", borderRadius: 3}}
                                />
                                <TextField
                                    id="outlined-email"
                                    label="Email"
                                    value={email}
                                    onChange={changeEmail}
                                    sx={{backgroundColor: "white", borderRadius: 3}}
                                />
                                <TextField
                                    id="outlined-password"
                                    label="Password"
                                    value={password}
                                    onChange={changePassword}
                                    sx={{backgroundColor: "white", borderRadius: 3}}
                                />
                            </Stack>
                        <Button
                            size="large" 
                            variant="contained" 
                            onClick={createAccount}
                            style={{backgroundColor: "black", marginTop: 40, borderRadius: 10, fontWeight: "bold", marginLeft: 180}}>
                                Next
                            </Button>
                        </div>
                    </Stack>
                </div>
            </header>
        </div>
    );
  }
  
  export default SetUpAccount;