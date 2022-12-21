//import { Visibility, VisibilityOff } from "@mui/icons-material";
import * as React from 'react';
import styles from './stephanie-micah-cahutay-teachers-profile.module.css'
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

function CahutayDeactivateTeacherAccount() {
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
                    <Tab label="Home" href="/home" icon={<HomeIcon style={{fontSize: 28}}/>} iconPosition="start" style={{fontSize: 30, fontWeight: "bold", color: "black", marginRight: 30}}/>
                    <Tab label="Activity" href="/actvity" icon={<HistoryIcon style={{fontSize: 28}}/>} iconPosition="start" style={{fontSize: 30, fontWeight: "bold", color: "black", marginRight: 30}}/>
                    <Tab label="Assessments" href="/assessments" icon={<ViewListIcon style={{fontSize: 28}}/>} iconPosition="start" style={{fontSize: 30, fontWeight: "bold", color: "black", marginRight: 30}}/>
                    <Tab label="Profile" href="/profile" icon={<PersonIcon style={{fontSize: 28}}/>} iconPosition="start" style={{fontSize: 30, fontWeight: "bold", color: "black", marginRight: 30}}/>
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
      <div className={styles['stephanie-micah-cahutay-deactivate-teachers-account-page']}>
        <img
          src={transparent}
          alt="transparent"
          className={styles['rectangle23']}
        />

        <div className={styles['group82']}>
          <span className={styles['text']}>
            <span>Leah Barbaso</span>
          </span>
          <span className={styles['text02']}>
            <span>CSIT321</span>
          </span>
        </div>

        <div className={styles['group87']}>
          <span className={styles['text04']}>
            <span>
              <span>@leah</span>
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
              <span>leahbarbaso@gmail.com</span>
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
              <span>01 - 01 - 1997</span>
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
        <span className={styles['text37']}>
            <span className={styles['text38']}>
              Are you sure you want to
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            <span className={styles['text39']}>
              <span>deactivate</span>
              <br></br>
              <span></span>
            </span>
            <span>this account?</span>
            </span>
        </span>    
        <Stack direction="row">
             <Button size="small" variant="contained"
              style={{backgroundColor: "transparent", width: 90, height: 90, marginTop: 180, fontWeight: "bold", left: 130, borderRadius: 100}}>YES</Button>
               <Button size="small" variant="contained"
              style={{backgroundColor: "transparent", width: 90, height: 90, marginTop: 180, fontWeight: "bold", left: 280, borderRadius: 100}}>NO</Button>
              </Stack>
        </div>
      </div>
    </div>
    </div>
    );
  }
  
  export default CahutayDeactivateTeacherAccount;