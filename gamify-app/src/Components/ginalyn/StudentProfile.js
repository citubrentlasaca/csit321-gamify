//import { Visibility, VisibilityOff } from "@mui/icons-material";
import * as React from 'react';
import styles from '../Cahutay/stephanie-micah-cahutay-teachers-profile.module.css'
import { Stack, Tabs, Tab, Menu, MenuItem, IconButton, ListItemIcon, ListItemText, Divider, Button } from "@mui/material";
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import HomeIcon from '@mui/icons-material/Home';
import HistoryIcon from '@mui/icons-material/History';
import ViewListIcon from '@mui/icons-material/ViewList';
import PersonIcon from '@mui/icons-material/Person';
import MenuIcon from '@mui/icons-material/Menu';
import LogoutIcon from '@mui/icons-material/Logout';
import appicon from '../../Images/Cahutay/applogo.png';
import teacher from '../../Images/Cahutay/teacher.png';
import transparent from '../../Images/Cahutay/rectangle23.png';
import gamify from '../../Images/Cahutay/gamify.png';
import { useLocation, useNavigate } from "react-router-dom";

function StudentProfile() {
    const navigate = useNavigate();
    const {state} = useLocation();

    const handleProfileClick = () => {
        navigate("/student-homepage", {
          state: {
            studentid: state.studentid
          }
        });
    }

    const handleManageAccountClick = () => {
        navigate("/student-manage-account-page-one");
    }

    const handleDeactivateAccountClick = () => {
        navigate("/student-deactivate-account");
    }

    const [studentName, setStudentName] = React.useState("");  

    const [value, setValue] = React.useState(3);  
    const handleChange = (event,newValue) => {
        setValue(newValue);
    }
    return (
        <div className="landing">
            <Stack direction="row">
                <div>
                    <img src={appicon} alt="app icon" style={{width: 120, height: 80, paddingLeft: 10}}/>
                </div>
                <div>
                    <img src={gamify} alt="brand name" style={{width: 160, height: 40, paddingTop: 30}}/>
                </div>
                <Tabs value={value} onChange={handleChange} style={{marginTop: 15, marginLeft: 30}}>
                    <Tab label="Home" href="/home" icon={<HomeIcon style={{fontSize: 28}}/>} iconPosition="start" style={{fontSize: 30, fontWeight: "bold", color: "black", marginRight: 30}}/>
                    <Tab label="Activity" href="/actvity" icon={<HistoryIcon style={{fontSize: 28}}/>} iconPosition="start" style={{fontSize: 30, fontWeight: "bold", color: "black", marginRight: 30}}/>
                    <Tab label="Assessments" href="/assessments" icon={<ViewListIcon style={{fontSize: 28}}/>} iconPosition="start" style={{fontSize: 30, fontWeight: "bold", color: "black", marginRight: 30}}/>
                    <Tab label="Profile" href="/profile" to={handleProfileClick} icon={<PersonIcon style={{fontSize: 28}}/>} iconPosition="start" style={{fontSize: 30, fontWeight: "bold", color: "black", marginRight: 30}}/>
                </Tabs>
                <PopupState variant="popover" popupId="demo-popup-menu">
                    {(popupState) => (
                        <React.Fragment>
                        <IconButton aria-label="menu" variant="contained" {...bindTrigger(popupState)} style={{backgroundColor: "white", height: 50, width: 50, marginTop: 25, marginLeft: 160}}>
                            <MenuIcon style={{fontSize: 40, fontWeight: "bold", color: "black"}} />
                        </IconButton>
                        <Menu {...bindMenu(popupState)}>
                            <MenuItem disabled style={{fontWeight: "bold", color: "black"}}>@username</MenuItem>
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
            <Divider sx={{ borderBottomWidth: 7, borderColor: "#609292", marginBottom: "0px"}}/>
        <div>
            <div className={styles['stephanie-micah-cahutay-teachers-profile-page']}>
                <img
                src={transparent}
                alt="transparent"
                className={styles['rectangle23']}
                />

                <div className={styles['group82']}>
                <span className={styles['text']}>
                    <span>{studentName}</span>
                </span>
                <span className={styles['text02']}>
                    <span>BSCS 3</span>
                </span>
                </div>

                <div className={styles['group87']}>
                <span className={styles['text04']}>
                    <span>
                    <span>@brent</span>
                    <br></br>
                    <span></span>
                    </span>
                </span>
                <img 
                    src={teacher} 
                    alt="Teacher" 
                    style={{width: 400, height: 400, paddingLeft: 45, marginTop: 0}}/>
                </div>
                
                <div className={styles['group91']}>

                <div className={styles['group83']}>
                    <span className={styles['text17']}>
                    <span>Gender</span>
                    </span>
                    <div
                    className={styles['rectangle633']}
                    ></div>
                    <span className={styles['text19']}>
                    <span>Male</span>
                    </span>
                </div>

                <div className={styles['group85']}>
                <div
                    className={styles['rectangle633']}
                    ></div>
                    <span className={styles['text21']}>
                    <span>Email</span>
                    </span>
                    <span className={styles['text23']}>
                    <span>brent@gmail.com</span>
                    </span>
                </div>
                <div className={styles['group84']}>
                <div
                    className={styles['rectangle633']}
                    ></div>
                    <span className={styles['text25']}>
                    <span>Date of Birth</span>
                    </span>
                    <span className={styles['text27']}>
                    <span>01 - 01 - 1899</span>
                    </span>
                </div>
                <div className={styles['group86']}>
                    <span className={styles['text29']}>
                    <span>Degree Program</span>
                    </span>
                    <div
                    className={styles['rectangle633']}
                    ></div>
                    <span className={styles['text310']}>
                    <span>BSCS 3</span>
                    </span>
                </div>
                </div>
                <div className={styles['group53']}>
                <Button size="large" variant="contained" onClick={handleManageAccountClick}
                style={{backgroundColor: "cyan",width: 294, marginTop: 15, borderRadius: 40, fontWeight: "bold"}}>Manage Account</Button>
                </div>
                <div className={styles['group79']}>
                <Button size="large" variant="contained" onClick={handleDeactivateAccountClick}
                style={{backgroundColor: "red",width: 294, marginTop: 15, borderRadius: 40, fontWeight: "bold"}}>Deactivate Account</Button>
                
                </div>
            </div>
        </div>
    </div>
    );
  }
  
  export default StudentProfile;