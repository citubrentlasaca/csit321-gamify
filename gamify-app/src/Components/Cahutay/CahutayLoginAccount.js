import React, { useState } from "react";
import login from '../../Images/Cahutay/login.png';
import teacher from '../../Images/Cahutay/teacher.png';
import { Stack, TextField } from "@mui/material";


function LoginApp() {
    // React States
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    // User Login info
    const database = [
        {
            email: "user1",
            password: "pass1"
        },
        {
            email: "user2",
            password: "pass2"
        }
    ];

    const errors = {
        emailadd: "invalid email",
        pass: "invalid password"
    };

    const handleSubmit = (event) => {
        //Prevent page reload
        event.preventDefault();

        var { emailadd, pass } = document.forms[0];

        // Find user login info
        const userData = database.find((user) => emailadd.email === emailadd.value);

        // Compare user info
        if (userData) {
            if (userData.password !== pass.value) {
                // Invalid password
                setErrorMessages({ name: "pass", message: errors.pass });
            } else {
                setIsSubmitted(true);
            }
        } else {
            // Username not found
            setErrorMessages({ name: "emailadd", message: errors.emailadd });
        }
    };

    // Generate JSX code for error message
    const renderErrorMessage = (name) =>
        name === errorMessages.name && (
            <div className="error">{errorMessages.message}</div>
        );

    // JSX code for login form
    const renderForm = (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <div className="input-container">
                    <TextField id="outlined-basic" label="Email" name="emailadd" variant="outlined" required/>
                    {renderErrorMessage("emailadd")}
                </div>
                <br></br>
                <div className="input-container">
                    <TextField id="outlined-basic" label="Password" name="pass" variant="outlined" required/>
                    {renderErrorMessage("pass")}
                </div>
                <br></br>
                <div className="button-container">
                    <input type="submit" />
                </div>
                <div >
                    <Stack>
                        <h5 style={{textAlign: "center", color: "black", fontSize: 10, marginTop: 0}}>Do you have an account? Register</h5>
                        <h5 style={{textAlign: "center", color: "black", fontSize: 10, marginTop: 0}}>Are you a student? Click here</h5>
                    </Stack>
                </div>
            </form>
        </div>
    );

    return (
        <Stack direction = "row">
            <div className="login-form">
                <div>
                    <img src={teacher} alt="Teacher" style={{width: 250, height: 250, paddingLeft: 95, marginTop: 10}}/>
                </div>
                <div className="title"><center>Login as Teacher</center></div>
                {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
            </div>
            <div>
            <img src={login} alt="loginpic" style={{width: 1000, height: 750}}/>
            </div>

        </Stack>
    );
}

export default LoginApp;