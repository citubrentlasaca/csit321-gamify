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

function Homepage() {
    const [value, setValue] = React.useState(0);  
    const handleChange = (event,newValue) => {
        setValue(newValue);
    }
    return (
        <div className="landing">
            <Stack direction="row">
                <div>
                    <img src={appicon} alt="app icon" style={{width: 100, height: 70, paddingLeft: 30, paddingTop: 8}}/>
                </div>
                <div>
                    <img src={brand} alt="brand name" style={{width: 180, height: 50, paddingTop: 25}}/>
                </div>
                <Tabs value={value} onChange={handleChange} style={{marginTop: 15, marginLeft: 40}}>
                    <Tab label="Home" href="/home" icon={<HomeIcon style={{fontSize: 34}}/>} iconPosition="start" style={{fontSize: 24, fontWeight: "bold", color: "black", marginRight: 10}}/>
                    <Tab label="Activity" href="/actvity" icon={<HistoryIcon style={{fontSize: 34}}/>} iconPosition="start" style={{fontSize: 24, fontWeight: "bold", color: "black", marginRight: 10}}/>
                    <Tab label="Assessments" href="/assessments" icon={<ViewListIcon style={{fontSize: 34}}/>} iconPosition="start" style={{fontSize: 24, fontWeight: "bold", color: "black", marginRight: 10}}/>
                    <Tab label="Profile" href="/profile" icon={<PersonIcon style={{fontSize: 34}}/>} iconPosition="start" style={{fontSize: 24, fontWeight: "bold", color: "black", marginRight: 10}}/>
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
        </div>
    );
  }
  
  export default Homepage;