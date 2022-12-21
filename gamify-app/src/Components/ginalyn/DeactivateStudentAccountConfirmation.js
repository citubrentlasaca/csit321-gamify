//import { Visibility, VisibilityOff } from "@mui/icons-material";
import * as React from 'react';
import styles from '../Cahutay/stephanie-micah-cahutay-teachers-profile.module.css'
import { Stack, Tabs, Tab, Menu, MenuItem, IconButton, ListItemIcon, ListItemText, Divider, TextField, Button } from "@mui/material";
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

function DeactivateStudentAccountConfirmation() {
  const navigate = useNavigate();

  const handleCancelClick = () => {
      navigate("/student-profile");
  }

    const [value, setValue] = React.useState(0);  
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
                    <Tab label="Home" href="/student-homepage" icon={<HomeIcon style={{fontSize: 28}}/>} iconPosition="start" style={{fontSize: 30, fontWeight: "bold", color: "black", marginRight: 30}}/>
                    <Tab label="Activity" href="/student-actvity" icon={<HistoryIcon style={{fontSize: 28}}/>} iconPosition="start" style={{fontSize: 30, fontWeight: "bold", color: "black", marginRight: 30}}/>
                    <Tab label="Assessments" href="/assessments" icon={<ViewListIcon style={{fontSize: 28}}/>} iconPosition="start" style={{fontSize: 30, fontWeight: "bold", color: "black", marginRight: 30}}/>
                    <Tab label="Profile" href="/student-profile" icon={<PersonIcon style={{fontSize: 28}}/>} iconPosition="start" style={{fontSize: 30, fontWeight: "bold", color: "black", marginRight: 30}}/>
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
      <div className={styles['stephanie-micah-cahutay-teachers-profile']}>
        <img
          src={transparent}
          alt="transparent"
          className={styles['rectangle23']}
        />

        <div className={styles['group82']}>
          <span className={styles['text']}>
            <span>Jane Doe</span>
          </span>
          <span className={styles['text02']}>
            <span>CSIT321</span>
          </span>
        </div>

        <div className={styles['group87']}>
          <span className={styles['text04']}>
            <span>
              <span>@janeee</span>
              <br></br>
              <span></span>
            </span>
          </span>
          <img 
            src={teacher} 
            alt="Teacher" 
            style={{width: 400, height: 400, paddingLeft: 45, marginTop: 10}}/>
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
              <span>Female</span>
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
              <span>janedoe@gmail.com</span>
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
              <span>Descriptive Title</span>
            </span>
            <div
              className={styles['rectangle633']}
            ></div>
            <span className={styles['text31']}>
              <span>Applications Development</span>
            </span>
          </div>
        </div>
        <div className={styles['group53']}>
          <Button size="large" variant="contained"
           style={{backgroundColor: "cyan",width: 294, marginTop: 15, borderRadius: 40, fontWeight: "bold"}}>Manage Account</Button>
        </div>
        <div className={styles['group79']}>
        <Button size="large" variant="contained"
           style={{backgroundColor: "red",width: 294, marginTop: 15, borderRadius: 40, fontWeight: "bold"}}>Deactivate Account</Button>
          
        </div>

        <div className={styles['group103']}>
        <span className={styles['text40']}>
            <span className={styles['text38']}>
              Once you
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            <span className={styles['text39']}>
              <span> deactivate </span>
              <span></span>
            </span>
            <span> your account, you only have  </span>
            <br></br>
            <span>30 days to reactivate it before having your account </span>
            <br></br>
            <span>permanently deleted.</span>
            </span>
        </span>   
        <span className={styles['text41']}>
            <span>Please input password to confirm account deactivation.</span>
        </span> 
        <Stack direction="column">
        <TextField
                                id="outlined-password"
                                label="Password"
                                sx={{backgroundColor: "transparent", borderRadius: 3, width: 450, size: "small", top: 155, left: 80}} required
                                //onChange={handlePasswordChange}
                                />
        <Stack direction="row">
             <Button size="small" variant="contained" onClick={handleCancelClick}
              style={{backgroundColor: "#618888", width: 120, height: 40, marginTop: 180, fontWeight: "bold", left: 130, borderRadius: 40}}>Cancel</Button>
               <Button size="small" variant="contained"
              style={{backgroundColor: "red", width: 120, height: 40, marginTop: 180, fontWeight: "bold", left: 260, borderRadius: 40}}>Proceed</Button>
              </Stack>
              </Stack>
        </div>
      </div>
    </div>
    </div>
    );
  }
  
  export default DeactivateStudentAccountConfirmation;