//import { Visibility, VisibilityOff } from "@mui/icons-material";
import * as React from 'react';
import styles from './stephanie-micah-cahutay-teachers-profile.module.css'
import { Stack, Tabs, Tab, Menu, MenuItem, IconButton, ListItemIcon, ListItemText, Divider, TextField, RadioGroup, FormControlLabel, Radio, Button } from "@mui/material";
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import HomeIcon from '@mui/icons-material/Home';
import EditIcon from '@mui/icons-material/Edit';
import HistoryIcon from '@mui/icons-material/History';
import ViewListIcon from '@mui/icons-material/ViewList';
import PersonIcon from '@mui/icons-material/Person';
import MenuIcon from '@mui/icons-material/Menu';
import LogoutIcon from '@mui/icons-material/Logout';
import appicon from '../../Images/Cahutay/applogo.png';
import teacher from '../../Images/Cahutay/teacher.png';
import transparent from '../../Images/Cahutay/rectangle23.png';
import gamify from '../../Images/Cahutay/gamify.png';

function CahutayManageTeachersProfilePage1() {
    const [value, setValue] = React.useState(0);  
    const handleChange = (event,newValue) => {
        setValue(newValue);
    }
    return (
        <div className="landing">
            <Stack direction="row">
                <div>
                    <img src={appicon} alt="app icon" style={{width: 90, height: 50, paddingLeft: 10}}/>
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
        <div className={styles['stephanie-micah-cahutay-teachers-profile']}>
        <img
          src={transparent}
          alt="transparent"
          className={styles['rectangle23']}
        />
        <div className={styles['groupt']}>
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
                            style={{backgroundColor: "#4A88DA", height: 50, width: 50, marginTop: 300, marginLeft: 1350}}>
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
            <span>Manage Teacher’s Profile</span>
          </span>
        </div>
        <div className={styles['group54']}>
         <span className={styles['text02']}>
            <span>Teacher Account Information</span>
            </span>   
        </div>
        <div >
         <span className={styles['text08']}>
            <span>Name of the Teacher</span>
            </span>
        </div>
        <div className={styles['group55']}>
            <Stack direction="row">
                <TextField
                    id="outlined-firstname"
                    label="Firstname"
                    sx={{backgroundColor: "white", borderRadius: 3, marginRight: 3, width: 280}}
                    //onChange={handleFirstnameChange}
                />
                <TextField
                    id="outlined-lastname"
                    label="Lastname"
                    sx={{backgroundColor: "white", borderRadius: 3, marginRight: 3, width: 290}}
                    //onChange={handleLastnameChange}
                />            
            </Stack>                  
          </div>
          
        <div >
         <span className={styles['text32']}>
            <span>Gender</span>
            </span>   
        </div>

          <div className={styles['group61']}>
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
                        sx={{color: "white", marginLeft: 8, marginRight: 15}}
                    />
                    <FormControlLabel
                        value="female"
                        control={<Radio />}
                        label="Female"
                        sx={{color: "white"}}
                    />
                    </RadioGroup>
                </Stack>
            </div>
           
            <div>
                <span className={styles['text16']}>
                 <span>Date of Birth</span>
            </span>
            </div>
            <div className={styles['group59']}>
                <TextField
                    id="outlined-birthday"
                    label="mm/dd/yyyy"
                    sx={{backgroundColor: "white", borderRadius: 3, width: 240}}
                    //onChange={handleBirthdayChange}
                    />
            </div>

            <div>
                <span className={styles['text20']}>
                 <span>Course / Subject</span>
            </span>
            </div>
            <div className={styles['group58']}>
            <Stack direction="row">
                <TextField
                    id="outlined-subjectnum"
                    label="Subject Number"
                    sx={{backgroundColor: "white", borderRadius: 3, marginRight: 3, width: 280}}
                    //onChange={handleFirstnameChange}
                />
                <TextField
                    id="outlined-descriptivetitle"
                    label="Descriptive Title"
                    sx={{backgroundColor: "white", borderRadius: 3, marginRight: 3, width: 290,}}
                    //onChange={handleLastnameChange}
                />            
            </Stack>                  
          </div>

             <div className={styles['groupnext']}>
             <Button size="large" variant="contained"
              style={{backgroundColor: "cyan", width: 110, marginTop: 15, borderRadius: 40, fontWeight: "bold"}}>Next</Button>
             </div>

             <div className={styles['groupsave']}>
             <Button size="large" variant="contained"
              style={{backgroundColor: "black", width: 110, marginTop: 15, borderRadius: 40, fontWeight: "bold"}}>Save</Button>
             </div>
             
        </div>

        </div>
    </div>
    );
  }
  
  export default CahutayManageTeachersProfilePage1;