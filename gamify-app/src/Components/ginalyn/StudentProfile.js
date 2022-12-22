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
import appicon from '../../Images/appicon.png';
import teacher from '../../Images/Cahutay/teacher.png';
import transparent from '../../Images/Cahutay/rectangle23.png';
import brand from '../../Images/brand.png';
import { useLocation, useNavigate } from "react-router-dom";

function StudentProfile() {
    const navigate = useNavigate();
    const {state} = useLocation();

    const handleManageAccountClick = () => {
        navigate("/student-manage-account-page-one");
    }

    const handleDeactivateAccountClick = () => {
        navigate("/student-deactivate-account");
    }

    const [value, setValue] = React.useState(3);  
    const handleChange = (event,newValue) => {
        setValue(newValue);
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
                                            <MenuItem disabled style={{fontWeight: "bold", color: "black"}}>{"@"+state.username}</MenuItem>
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
                            <div className={styles['stephanie-micah-cahutay-students-profile-page']}>
                                <img
                                    src={transparent}
                                    alt="transparent"
                                    className={styles['rectangle233']}
                                />

                                <div className={styles['group822']}>
                                    <span className={styles['text']}>
                                        <span>{state.firstname}</span>
                                    </span>
                                </div>

                                <div className={styles['group877']}>
                                    <span className={styles['text044']}>
                                        <span>
                                            <span>{"@"+state.username}</span>
                                            <br></br>
                                            <span></span>
                                        </span>
                                    </span>
                                    <img 
                                        src={teacher} 
                                        alt="Teacher" 
                                        style={{width: 350, height: 350, paddingLeft: 45, marginTop: 0}}
                                    />
                                </div>
                            
                                <div className={styles['group911']}>
                                    <div className={styles['group83']}>
                                        <span className={styles['text17']}>
                                            <span>Gender</span>
                                        </span>
                                    <div className={styles['rectangle633']}></div>
                                    <span className={styles['text19']}>
                                        <span>{state.gender}</span>
                                    </span>
                                </div>

                                <div className={styles['group85']}>
                                    <div className={styles['rectangle633']}></div>
                                    <span className={styles['text21']}>
                                        <span>Email</span>
                                    </span>
                                    <span className={styles['text23']}>
                                        <span>{state.email}</span>
                                    </span>
                                </div>

                                <div className={styles['group844']}>
                                    <div className={styles['rectangle633']}></div>
                                    <span className={styles['text25']}>
                                        <span>Date of Birth</span>
                                    </span>
                                    <span className={styles['text27']}>
                                        <span>{state.birthday}</span>
                                    </span>
                                </div>
                                
                                <div className={styles['group866']}>
                                    <span className={styles['text29']}>
                                        <span>Degree Program</span>
                                    </span>
                                    <div className={styles['rectangle633']}></div>
                                    <span className={styles['text310']}>
                                        <span>{state.program + " " + state.yearlevel}</span>
                                    </span>
                                </div>
                            </div>
                            <div className={styles['group533']}>
                                <Button size="large" variant="contained" onClick={handleManageAccountClick}
                                    style={{backgroundColor: "cyan",width: 294, marginTop: 0, borderRadius: 40, fontWeight: "bold"}}>Manage Account</Button>
                            </div>
                            <div className={styles['group799']}>
                                <Button size="large" variant="contained" onClick={handleDeactivateAccountClick}
                                    style={{backgroundColor: "red",width: 294, marginTop: 0, borderRadius: 40, fontWeight: "bold"}}>Deactivate Account</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
  }
  
  export default StudentProfile;