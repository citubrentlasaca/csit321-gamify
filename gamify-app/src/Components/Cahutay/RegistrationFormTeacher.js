//import { Visibility, VisibilityOff } from "@mui/icons-material";
import { TextField, Stack, Button, Radio, FormControlLabel, RadioGroup} from "@mui/material";
import logo from '../../Images/Cahutay/applogo.png';

function RegistrationFormTeacher() {
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
                    <h1 style={{textAlign: "left", color: "#7A8889", fontSize: 24}}>Teacher Account Information</h1>
                    <hr className="line-gc"></hr>
                    <Stack spacing={0.5}>
                        <div>
                            <p style={{textAlign: "left", color: "black", fontSize: 20, marginBottom: 10, marginTop: 6}}>Name of the Teacher</p>
                            <Stack direction="row">
                                <TextField
                                id="outlined-firstname"
                                label="Firstname"
                                sx={{backgroundColor: "white", borderRadius: 3, marginRight: 2, width: 300}}
                                //onChange={handleFirstnameChange}
                                />
                                <TextField
                                id="outlined-lastname"
                                label="Lastname"
                                sx={{backgroundColor: "white", borderRadius: 3, width: 300}}
                                //onChange={handleLastnameChange}
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
                                sx={{backgroundColor: "white", borderRadius: 3, width: 215}}
                                //onChange={handleBirthdayChange}
                            />
                        </div>
                        <div>
                            <p style={{textAlign: "left", color: "black", fontSize: 20, marginBottom: 10, marginTop: 6}}>Course / Subject</p>
                            <Stack direction="row">
                                <TextField
                                id="outlined-subjectnumber"
                                label="Subject Number"
                                sx={{backgroundColor: "white", borderRadius: 3, marginRight: 2, width: 305}}
                                //onChange={handleFirstnameChange}
                                />
                                <TextField
                                id="outlined-descriptivetitle"
                                label="Descriptive Title"
                                sx={{backgroundColor: "white", borderRadius: 3, width: 300}}
                                //onChange={handleLastnameChange}
                                />
                            </Stack>
                        </div>
                    </Stack>
                <Button size="large" variant="contained" style={{backgroundColor: "black", marginTop: 30, borderRadius: 10, fontWeight: "bold", marginLeft: 180}}>Next</Button>
                </div>
            </Stack>
        </div>
    );
  }
  
  export default RegistrationFormTeacher;