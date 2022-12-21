import React from 'react'
import styles from './stephanie-micah-cahutay-teachers-profile.module.css'
import background from '../../Images/Cahutay/abstractbluewhitegradientgeometricbackground23106-v73c-1400h.jpg';
import appicon from '../../Images/Cahutay/applogo.png';
import brand from '../../Images/Cahutay/gamify.png';
import transparent2 from '../../Images/Cahutay/rectangle2.png';
import { Button} from "@mui/material";
import teacher from '../../Images/Cahutay/teacher.png';
import student from '../../Images/Cahutay/student.png';
import { useNavigate } from "react-router-dom";

const CahutayChooseAccount = (props) => {
  const navigate = useNavigate();

  const handleStudentClick = () => {
      navigate("/register-setup-student-account");
  }

  const handleTeacherClick = () => {
    navigate("/register-setup-teacher-account");
  }

  return (
    <div>
      <div className={styles['stephanie-micah-cahutay-create-teacher-account']}>
      <img src={background} alt="app icon" style={{width: 1550, height: 750}}/>
      <div>
      <img
          src={appicon}
          alt="applogo"
          className={styles['icon']}
        />
        <img
          src={brand}
          alt="gamify"
          className={styles['brand']}
        />
        <img
          src={transparent2}
          alt="transparent"
          className={styles['rectangle12']}
        />
         
      </div>
      <span className={styles['choose']}>
          <span>Choose your Role</span>
        </span>
      <div className={styles['teacherbutton']}>
             <Button size="large" variant="contained" onClick={handleTeacherClick}
              style={{backgroundColor: "white", color: "black", height: 300, width: 300, marginTop: 0, borderRadius: 40, fontWeight: "bold"}}>Teacher</Button>
             </div>
            <span className={styles['teachertext']}>
              <span>Teacher</span>
            </span>
            
            <img 
            src={teacher} 
            alt="Teacher" 
            className={styles['teacherpic']}
            />
            <div className={styles['studentbutton']}>
             <Button size="large" variant="contained" onClick={handleStudentClick}
              style={{backgroundColor: "white", color: "black", height: 300, width: 300, marginTop: 0, borderRadius: 40, fontWeight: "bold"}}>Student</Button>
            <img 
            src={student} 
            alt="Student" 
            className={styles['studentpic']}
            />
            </div>
            <span className={styles['studenttext']}>
              <span>Student</span>
            </span>
    </div>
    </div>
  )
}

export default CahutayChooseAccount
