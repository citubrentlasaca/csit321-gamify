//import { Visibility, VisibilityOff } from "@mui/icons-material";
import * as React from 'react';
import { Stack, Tabs, Tab, Menu, MenuItem, IconButton, ListItemIcon, ListItem, ListItemText, Divider, Box, ListItemButton, List } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import HistoryIcon from '@mui/icons-material/History';
import ViewListIcon from '@mui/icons-material/ViewList';
import PersonIcon from '@mui/icons-material/Person';
import MenuIcon from '@mui/icons-material/Menu';
import LogoutIcon from '@mui/icons-material/Logout';
import VerifiedIcon from '@mui/icons-material/Verified';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import brand from '../../Images/brand.png';
import appicon from '../../Images/appicon.png';
import studentactivity from '../../Images/activity-student.png';
import { useNavigate } from "react-router-dom";

function ActivityStudent() {
    const navigate = useNavigate();

    const handleAssessmentClick = () => {
        navigate("/student-activity-result");
    }

    const [value, setValue] = React.useState(1);  
    const handleChange = (event,newValue) => {
        setValue(newValue);
    }
    
    return (
        <div classname="App">
            <header className="App-header2-gc">
                <div className="landing-gc">
                    <Stack>
                        <Stack direction="row">
                            <div>
                                <img src={appicon} alt="app icon" style={{width: 100, height: 70, paddingLeft: 30, paddingTop: 8}}/>
                            </div>
                            <div>
                                <img src={brand} alt="brand name" style={{width: 180, height: 50, paddingTop: 25}}/>
                            </div>
                            <Tabs value={value} onChange={handleChange} style={{marginTop: 15, marginLeft: 40}}>
                                <Tab label="Home" href="/student-homepage" icon={<HomeIcon style={{fontSize: 34}}/>} iconPosition="start" style={{fontSize: 24, fontWeight: "bold", color: "black", marginRight: 10}}/>
                                <Tab label="Activity" href="/student-actvity" icon={<HistoryIcon style={{fontSize: 34}}/>} iconPosition="start" style={{fontSize: 24, fontWeight: "bold", color: "black", marginRight: 10}}/>
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
                        <Box style={{backgroundColor: "#FFFFFF", opacity: "80%"}}>
                            <Stack direction="row">
                                <div style={{marginTop: 20}}>
                                    <VerifiedIcon style={{fontSize: 34, marginLeft: 40}}/>
                                </div>
                                <div>
                                    <h3 style={{marginTop: 23, marginLeft: 10, fontSize: 24}}>Completed</h3>
                                </div>
                            </Stack>
                            <Box style={{backgroundColor: "black"}}>        
                                <img src={studentactivity} alt="activity-student" onClick={handleAssessmentClick} style={{width: 1300, height: 70, paddingLeft: 50, paddingTop: 8}}/>
                            </Box>
                        </Box>
                    </Stack>
                </div>
            </header>
        </div>
    );
  }
  
  export default ActivityStudent;