import React from 'react';
import axios from 'axios';
import styles from '../Cahutay/stephanie-micah-cahutay-teachers-profile.module.css'
import login from '../../Images/Cahutay/login.png';
import teacher from '../../Images/Cahutay/teacher.png';
import { Stack, TextField, Button } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

const LoginStudent = (props) => {
  const navigate = useNavigate();
  const {state} = useLocation();

  const handleLoginStudentClick = () => {
    navigate("/student-homepage", {
      state: {
        studentid: state.studentid
      }
    });
  }

  return (
    <div>
    
      <div className={styles['stephanie-micah-cahutay-loginfor-teacher']}>
        
      <Stack direction = "row">
      <div>
            <img src={teacher} alt="Teacher" style={{width: 250, height: 250, paddingLeft: 105, marginTop: 10}}/>
         </div>
       <div className={styles['rectangle11']}>
       </div>
       <div>
            <img src={login} alt="loginpic" style={{width: 1020, height: 750, paddingLeft: 150}}/>
        </div>  
        </Stack>
  
            <div className={styles['groupcontainer']}>
            <Stack direction = "column">
                <TextField
                    id="outlined-email"
                    label="Email"
                    sx={{backgroundColor: "transparent", borderRadius: 3, marginRight: 3, width: 330, marginTop: 5}} required
                    />
                <TextField
                    id="outlined-password"
                    label="Password"
                    sx={{backgroundColor: "transparent", borderRadius: 3, marginRight: 3, width: 330, marginTop: 5}} required
                    />
                <Button size="large" variant="contained"  onClick={handleLoginStudentClick} 
                  style={{background: "#CAFDFF", width: 150, marginTop: 25, borderRadius: 40, marginTop: 55,color:"black"
                      , marginTop: 40, marginLeft: 80}}  >Submit</Button>
                <h5 style={{textAlign: "center", color: "black", fontSize: 10, marginTop: 50}}>Do you have an account? Register</h5>
                <h5 style={{textAlign: "center", color: "black", fontSize: 10, marginTop: 5}}>Are you a teacher? Click here</h5>
            </Stack>
            </div>
      </div>
      
    </div>
  )
}

export default LoginStudent;
