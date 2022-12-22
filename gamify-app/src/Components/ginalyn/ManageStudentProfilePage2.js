//import { Visibility, VisibilityOff } from "@mui/icons-material";
import * as React from 'react';
import styles from '../Cahutay/stephanie-micah-cahutay-teachers-profile.module.css'
import { Stack, Tabs, Tab, Menu, MenuItem, IconButton, ListItemIcon, ListItemText, Divider, TextField, Button } from "@mui/material";
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import EditIcon from '@mui/icons-material/Edit';
import HomeIcon from '@mui/icons-material/Home';
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

function ManageStudentProfilePage2() {
    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate("/student-manage-account-page-one");
    }

    const [value, setValue] = React.useState(3);  
    const handleChange = (event,newValue) => {
        setValue(newValue);
    }

    const [accountid, setAccountid] = React.useState(); 
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

    const getStudent = async () => {
        try {
          const response = await axios.get(`http://localhost:8080/account/getByAccountid?accountid=${25}`);
          const data = response.data;
          setAccountid(data.accountid)
          setUsername(data.username);
          setEmail(data.email);
          setPassword(data.password);
          console.log(response.data); // log the data to the console
        } catch (error) {
          console.error(error); // catch any errors
        }
      }
    const updateAccount = async () => {
        try {
          const response = await axios.put(`http://localhost:8080/account/putAccount?accountid=${accountid}`, {
            username: username,
            email: email,
            password: password
          });
          console.log(response.data); // log the data to the console
          navigate("/student-profile");
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
                    <div className={styles['group54']}>
                    <span className={styles['text02']}>
                        <span>Setup Student Login Credentials</span>
                        </span>   
                    </div>
                    <div >
                    <span className={styles['text08']}>
                        <span>Username</span>
                        </span>
                    </div>
                    <div className={styles['group55']}>
                            <TextField
                                id="outlined-username"
                                label="Username"
                                sx={{backgroundColor: "white", borderRadius: 3, marginRight: 3, width: 500}}
                                //onChange={handleFirstnameChange}
                            />                
                    </div>
                    <div>
                        <span className={styles['text188']}>
                        <span>Email</span>
                        </span>
                        </div>
                        <div className={styles['group600']}>
                            <TextField
                                id="outlined-email"
                                label="Email"
                                sx={{backgroundColor: "white", borderRadius: 3, marginRight: 3, width: 500}}
                                //onChange={handleBirthdayChange}
                                />
                        </div>
                    <div>
                        <span className={styles['text222']}>
                        <span>Password</span>
                        </span>
                        </div>
                        <div className={styles['group622']}>
                            <TextField
                                id="outlined-password"
                                label="Password"
                                sx={{backgroundColor: "white", borderRadius: 3, marginRight: 3, width: 500}}
                                //onChange={handleBirthdayChange}
                                />
                        </div>
                        <div className={styles['groupback']}>
                        <Button size="large" variant="contained" onClick={handleBackClick}
                        style={{backgroundColor: "cyan", width: 110, marginTop: 15, borderRadius: 40, fontWeight: "bold"}}>Back</Button>
                        </div>

                        <div className={styles['groupsave3']}>
                        <Button size="large" variant="contained" onClick={updateAccount}
                        style={{backgroundColor: "black", width: 110, marginTop: 15, borderRadius: 40, fontWeight: "bold"}}>Save</Button>
                        </div>
                        
                        
                    </div>
                    </div>
                </div>
            </header>
        </div>
    );
  }
  
  export default ManageStudentProfilePage2;