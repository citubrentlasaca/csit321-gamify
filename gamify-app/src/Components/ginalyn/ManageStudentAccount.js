//import { Visibility, VisibilityOff } from "@mui/icons-material";
import * as React from 'react';
import { Stack, Tabs, Tab, Menu, MenuItem, IconButton, ListItemIcon, ListItemText, Divider } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import HistoryIcon from '@mui/icons-material/History';
import ViewListIcon from '@mui/icons-material/ViewList';
import PersonIcon from '@mui/icons-material/Person';
import MenuIcon from '@mui/icons-material/Menu';
import LogoutIcon from '@mui/icons-material/Logout';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import brand from '../../Images/brand.png';
import appicon from '../../Images/appicon.png';

function ManageStudentAccount() {
    const [value, setValue] = React.useState(3);  
    const handleChange = (event,newValue) => {
        setValue(newValue);
    }
    return (
        <div className="landing-gc">
            <Stack direction="row">
                <div>
                    <img src={appicon} alt="app icon" style={{width: 120, height: 80, paddingLeft: 10}}/>
                </div>
                <div>
                    <img src={brand} alt="brand name" style={{width: 200, height: 60, paddingTop: 20}}/>
                </div>
                <Tabs value={value} onChange={handleChange} style={{marginTop: 15, marginLeft: 100}}>
                    <Tab label="Home" href="/student-homepage" icon={<HomeIcon style={{fontSize: 40}}/>} iconPosition="start" style={{fontSize: 32, fontWeight: "bold", color: "black", marginRight: 30}}/>
                    <Tab label="Activity" href="/student-actvity" icon={<HistoryIcon style={{fontSize: 40}}/>} iconPosition="start" style={{fontSize: 32, fontWeight: "bold", color: "black", marginRight: 30}}/>
                    <Tab label="Assessments" href="/assessments" icon={<ViewListIcon style={{fontSize: 40}}/>} iconPosition="start" style={{fontSize: 32, fontWeight: "bold", color: "black", marginRight: 30}}/>
                    <Tab label="Profile" href="/student-profile" icon={<PersonIcon style={{fontSize: 40}}/>} iconPosition="start" style={{fontSize: 32, fontWeight: "bold", color: "black", marginRight: 30}}/>
                </Tabs>
                <PopupState variant="popover" popupId="demo-popup-menu">
                    {(popupState) => (
                        <React.Fragment>
                        <IconButton aria-label="menu" variant="contained" {...bindTrigger(popupState)} style={{backgroundColor: "white", height: 50, width: 50, marginTop: 25, marginLeft: 200}}>
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
            <Divider sx={{ borderBottomWidth: 7, borderColor: "#609292" }}/>
        </div>
    );
  }
  
  export default ManageStudentAccount;