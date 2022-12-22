import React from 'react';
import axios from 'axios';
import styles from '../Cahutay/stephanie-micah-cahutay-teachers-profile.module.css'
import login from '../../Images/Cahutay/login.png';
import teacher from '../../Images/Cahutay/teacher.png';
import { Stack, TextField, Button } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

const LoginStudent = (props) => {
  const navigate = useNavigate();
  const { state } = useLocation();

  const [firstname, setFirstname] = React.useState("");
  const [lastname, setLastname] = React.useState("");
  const [gender, setGender] = React.useState("");
  const [birthday, setBirthday] = React.useState("");
  const [program, setProgram] = React.useState("");
  const [yearlevel, setYearlevel] = React.useState("");

  const handleLoginStudentClick  = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/student/getByStudentId?studentid=${state.studentid}`);
          setFirstname(response.data.firstname);
          setLastname(response.data.lastname);
          setGender(response.data.gender);
          setBirthday(response.data.birthday);
          setProgram(response.data.program);
          setYearlevel(response.data.yearlevel);
      console.log(response);
      navigate("/student-homepage", {
        state: {
            firstname: response.data.firstname,
            gender: response.data.gender,
            birthday: response.data.birthday,
            program: response.data.program,
            yearlevel: response.data.yearlevel,
            email: response.data.account.email,
            username: response.data.account.username
        }
      })
    } catch (error) {
      console.error(error); // catch any errors
    }
  }

  return (
    <div classname="App">
      <header className="App-header2-gc">
        <div>    
          <div className={styles['stephanie-micah-cahutay-loginfor-student']}>
            
          <Stack direction = "row">
          <div>
                <img src={teacher} alt="Teacher" style={{width: 250, height: 250, paddingLeft: 130, marginTop: 10}}/>
            </div>
          <div className={styles['rectangle111']}>
          </div>
          <div>
                <img src={login} alt="loginpic" style={{width: 860, height: 700, paddingLeft: 110}}/>
              </div>  
                </Stack>

              <div className={styles['groupcontainer']}>
                  <Stack direction = "column">
                    <TextField
                        id="outlined-email"
                        label="Email"
                        sx={{backgroundColor: "transparent", borderRadius: 3, marginRight: 3, width: 330, marginTop: 1}} required
                        />
                    <TextField
                        id="outlined-password"
                        label="Password"
                        sx={{backgroundColor: "transparent", borderRadius: 3, marginRight: 3, width: 330, marginTop: 5}} required
                        />
                    <Button size="large" variant="contained"  onClick={handleLoginStudentClick} 
                      style={{background: "#CAFDFF", width: 150, borderRadius: 40, marginTop: 55,color:"black", marginLeft: 100}} >
                        Submit
                    </Button>
                    <h5 style={{textAlign: "center", color: "black", fontSize: 10, marginTop: 50}}>Do you have an account? Register</h5>
                    <h5 style={{textAlign: "center", color: "black", fontSize: 10, marginTop: 5}}>Are you a teacher? Click here</h5>
                  </Stack>
              </div>
            </div>    
        </div>
      </header>
    </div>        
  )
}

export default LoginStudent;
