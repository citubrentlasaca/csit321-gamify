//import { Visibility, VisibilityOff } from "@mui/icons-material";
import * as React from 'react';
import styles from '../Cahutay/stephanie-micah-cahutay-teachers-profile.module.css'
import { Stack, Tabs, Tab, Menu, MenuItem, IconButton, ListItemIcon, ListItemText, Divider, TextField, RadioGroup, FormControlLabel, Radio, Button } from "@mui/material";
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import HomeIcon from '@mui/icons-material/Home';
import EditIcon from '@mui/icons-material/Edit';
import HistoryIcon from '@mui/icons-material/History';
import ViewListIcon from '@mui/icons-material/ViewList';
import PersonIcon from '@mui/icons-material/Person';
import MenuIcon from '@mui/icons-material/Menu';
import LogoutIcon from '@mui/icons-material/Logout';
import appicon from '../../Images/appicon.png';
import teacher from '../../Images/Cahutay/teacher.png';
import transparent from '../../Images/Cahutay/rectangle23.png';
import brand from '../../Images/brand.png';
import { useLocation, useNavigate } from "react-router-dom";
import axios from 'axios';

function ManageStudentProfilePage1() {
    const navigate = useNavigate();
    const { state } = useLocation();

    const handleManageAccountPage2Click = () => {
        navigate("/student-manage-account-page-two");
    }

    const [value, setValue] = React.useState(3);  
    const handleChange = (event,newValue) => {
        setValue(newValue);
    }

    const [firstname, setFirstname] = React.useState("");
    const [lastname, setLastname] = React.useState("");
    const [gender, setGender] = React.useState("");
    const [birthday, setBirthday] = React.useState("");
    const [program, setProgram] = React.useState("");
    const [yearlevel, setYearlevel] = React.useState("");
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
    const changeProgram = (event) => {
        setProgram(event.target.value);
    };
    const changeYearlevel = (event) => {
        setYearlevel(event.target.value);
    };

    const getStudent = async () => {
        try {
          const response = await axios.get(`http://localhost:8080/student/getByStudentId?studentid=${33}`);
          setFirstname(response.data.firstname);
          setLastname(response.data.lastname);
          setGender(response.data.gender);
          setBirthday(response.data.birthday);
          setProgram(response.data.program);
          setYearlevel(response.data.yearlevel);
          console.log(response.data); // log the data to the console
        } catch (error) {
          console.error(error); // catch any errors
        }
    };

    const updateStudent = async () => {
        try {
          const response = await axios.put(`http://localhost:8080/student/putStudent?studentid=${33}`, {
            birthday: birthday,
            program: program,
            yearlevel: yearlevel
          });
          console.log(response.data); // log the data to the console
          navigate("/student-profile", {
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
                <div className="landing-gc">
                <Stack direction="row">
                            <div>
                                <img src={appicon} alt="app icon" style={{width: 100, height: 70, paddingLeft: 30, paddingTop: 8}}/>
                            </div>
                            <div>
                                <img src={brand} alt="brand name" style={{width: 180, height: 50, paddingTop: 25}}/>
                            </div>
                            <Tabs value={value} onChange={handleChange} style={{marginTop: 15, marginLeft: 40}}>
                                <Tab label="Home" href="/student-homepage" icon={<HomeIcon style={{fontSize: 34}}/>} iconPosition="start" style={{fontSize: 24, fontWeight: "bold", color: "black", marginRight: 10}}/>
                                <Tab label="Activity" href="/student-activity" icon={<HistoryIcon style={{fontSize: 34}}/>} iconPosition="start" style={{fontSize: 24, fontWeight: "bold", color: "black", marginRight: 10}}/>
                                <Tab label="Assessments" href="/assessments" icon={<ViewListIcon style={{fontSize: 34}}/>} iconPosition="start" style={{fontSize: 24, fontWeight: "bold", color: "black", marginRight: 10}}/>
                                <Tab label="Profile" href="/student-profile" icon={<PersonIcon style={{fontSize: 34}}/>} iconPosition="start" style={{fontSize: 24, fontWeight: "bold", color: "black", marginRight: 10}}/>
                            </Tabs>
                            <PopupState variant="popover" popupId="demo-popup-menu">
                                {(popupState) => (
                                    <React.Fragment>
                                        <IconButton aria-label="menu" variant="contained" {...bindTrigger(popupState)} style={{backgroundColor: "white", height: 50, width: 50, marginTop: 25, marginLeft: 130}}>
                                            <MenuIcon style={{fontSize: 40, fontWeight: "bold", color: "black"}} />
                                        </IconButton>
                                        <Menu {...bindMenu(popupState)}>
                                            <MenuItem disabled style={{fontWeight: "bold", color: "black"}}>@brent</MenuItem>
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
                        <div>
                    <div className={styles['stephanie-micah-cahutay-teachers-profile']}>
                    <img
                    src={transparent}
                    alt="transparent"
                    className={styles['rectangle233']}
                    />
                    <div className={styles['groups']}>
                    <img 
                        src={teacher} 
                        alt="Teacher" 
                        style={{width: 375, height: 375, paddingLeft: 45, marginTop: 5}}/>
                    </div>
                    <div>
                    <PopupState variant="popover" popupId="demo-popup-avatar">
                                {(popupState) => (
                                    <React.Fragment>
                                    <IconButton aria-label="avatar" variant="contained" {...bindTrigger(popupState)} 
                                        style={{backgroundColor: "#4A88DA", height: 50, width: 50, marginTop: 300, marginLeft: 1220}}>
                                        <EditIcon style={{fontSize: 40, fontWeight: "bold", color: "white"}} />
                                    </IconButton>
                                    <Menu {...bindMenu(popupState)}>
                                        <MenuItem onClick={popupState.close} style={{fontWeight: "bold", color: "#4A88DA"}}>Choose Avatar
                                        </MenuItem>
                                        <Divider />
                                        <MenuItem onClick={popupState.close} style={{fontWeight: "bold", color: "#4A88DA"}}>Upload Avatar
                                        </MenuItem>
                                    </Menu>
                                    </React.Fragment>
                                )}
                            </PopupState>
                    </div>
                    <div>
                    <span className={styles['text36']}>
                        <span>Manage Student’s Profile</span>
                    </span>
                    </div>
                    <div className={styles['group544']}>
                        <span className={styles['text02']}>
                            <span>Student Account Information</span>
                        </span>   
                    </div>
                    <div >
                        <span className={styles['text088']}>
                            <span>Name of the Student</span>
                        </span>
                    </div>
                    <div className={styles['group555']}>
                        <Stack direction="row">
                            <TextField
                                id="outlined-firstname"
                                label="Firstname"
                                value={firstname}
                                onChange={changeFirstname}
                                sx={{backgroundColor: "white", borderRadius: 3, marginRight: 3, width: 280}}
                                //onChange={handleFirstnameChange}
                            />
                            <TextField
                                id="outlined-lastname"
                                label="Lastname"
                                value={lastname}
                                onChange={changeLastname}
                                sx={{backgroundColor: "white", borderRadius: 3, marginRight: 3, width: 290}}
                                //onChange={handleLastnameChange}
                            />            
                        </Stack>                  
                    </div>
                    
                    <div >
                    <span className={styles['text322']}>
                        <span>Gender</span>
                        </span>   
                    </div>

                    <div className={styles['group611']}>
                        <TextField
                            id="outlined-gender"
                            label="gender"
                            value={gender}
                            onChange={changeGender}
                            sx={{backgroundColor: "white", borderRadius: 3, width: 240}}
                        />
                        </div>
                    
                        <div>
                            <span className={styles['text166']}>
                            <span>Date of Birth</span>
                        </span>
                        </div>
                        <div className={styles['group599']}>
                            <TextField
                                id="outlined-birthday"
                                label="mm/dd/yyyy"
                                value={birthday}
                                onChange={changeBirthday}
                                sx={{backgroundColor: "white", borderRadius: 3, width: 240}}
                                //onChange={handleBirthdayChange}
                                />
                        </div>

                        <div>
                            <span className={styles['text200']}>
                            <span>Degree Program</span>
                        </span>
                        </div>
                        <div className={styles['group588']}>
                        <Stack direction="row">
                            <TextField
                                id="outlined-program"
                                label="Program"
                                value={program}
                                onChange={changeProgram}
                                sx={{backgroundColor: "white", borderRadius: 3, marginRight: 3, width: 280}}
                                //onChange={handleFirstnameChange}
                            />
                            <TextField
                                id="outlined-yearlevel"
                                label="Yearlevel"
                                value={yearlevel}
                                onChange={changeYearlevel}
                                sx={{backgroundColor: "white", borderRadius: 3, marginRight: 3, width: 290,}}
                                //onChange={handleLastnameChange}
                            />            
                        </Stack>                  
                    </div>
                        <div className={styles['groupget2']}>
                            <Button size="large" variant="contained" onClick={getStudent}
                                style={{backgroundColor: "transparent", width: 110, marginTop: 15, borderRadius: 40, fontWeight: "bold"}}>Display</Button>
                        </div>

                        <div className={styles['groupnext2']}>
                            <Button size="large" variant="contained" onClick={handleManageAccountPage2Click}
                                style={{backgroundColor: "cyan", width: 110, marginTop: 15, borderRadius: 40, fontWeight: "bold"}}>Next</Button>
                        </div>

                        <div className={styles['groupsave2']}>
                            <Button size="large" variant="contained" onClick={updateStudent}
                                style={{backgroundColor: "black", width: 110, marginTop: 15, borderRadius: 40, fontWeight: "bold"}}>Save</Button>
                        </div>
                        
                    </div>

                    </div>
                </div>
            </header>
        </div>
    );
  }
  
  export default ManageStudentProfilePage1;