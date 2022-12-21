import about from '../../Images/Pepito/aboutGamify.png';
import logo from '../../Images/Pepito/logo.png';
import * as React from 'react';
import { Button, Stack, Tabs, Tab, Menu, MenuItem, IconButton, ListItemIcon, ListItemText, Divider } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import LogoutIcon from '@mui/icons-material/Logout';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import brand from '../../Images/Pepito/brand.png';


function AboutUs() {
    const [value, setValue] = React.useState(0);  
    const handleChange = (event,newValue) => {
        setValue(newValue);
}
return (  
    <div className="landing">
        <Stack direction="row">
            <div>
                <img src={logo} alt="logo" style={{width: 120, height: 80, paddingLeft: 10}}/>
            </div>
            <div>
                <img src={brand} alt="brand name" style={{width: 200, height: 60, paddingTop: 20}}/>
            </div>
            <Tabs value={value} onChange={handleChange} style={{marginTop: 15, marginLeft: 70}}>
                <Tab label="About Us" href="/home" 
                    style={{font:"Arial", fontSize: 32, fontWeight: "bold", color: "black", marginRight: 20}}/>
                <Tab label="Contact Us" href="/activity" 
                    style={{font:"Arial", fontSize: 32, fontWeight: "bold", color: "black", marginRight: 450}}/>
            </Tabs>
            <PopupState variant="popover" popupId="demo-popup-menu">
            {(popupState) => (
                <React.Fragment>
                    <IconButton aria-label="menu" variant="contained" {...bindTrigger(popupState)} 
                        style={{backgroundColor: "white", height: 50, width: 50, marginTop: 25, marginLeft: 130}}>
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

        <Stack direction="row" backgroundColor = "rgba(0, 0, 0, 0.829)" height= "120vh">
            <div>
                <Tabs value={value} onChange={handleChange} style={{marginTop: 15, marginLeft: 60}}>
                    <Tab label="ABOUT GAMIFY" href="/home" 
                        style={{fontSize: 20, fontWeight: "normal", color: "white", marginRight: 40}}/>
                    <Tab label="PLANS AND PRICING" href="/actvity" 
                        style={{fontSize: 20, fontWeight: "normal", color: "white", marginRight: 35}}/>
                    <Tab label="FAQ" href="/assessments" 
                        style={{fontSize: 20, fontWeight: "normal", color: "white", marginRight: 60}}/>
                </Tabs>
                <h2 style ={{color: "white", margin: 50, fontWeight: "normal", textAlign: "justify", 
                    fontSize: 24, textIndent: 50, marginRight: 80}}>
                    Gamify is everything you need to create, 
                    play and share fun experience doing digitized 
                    and gamified assessments. 
                </h2>
                <h2 style ={{color: "#00ffff", margin: 50, marginTop: 5, fontStyle: "italic", fontWeight: "normal", textAlign: "center", 
                    fontSize: 24, textIndent: 50, marginRight: 80}}>
                    Wide Range of Subject Areas
                    <br/>Assessment Templates
                    <br/>Autograding
                    <br/>Downloadable Results
                </h2>
                <Button variant="contained" size="medium" style={{ height: 50, backgroundColor: "#CAFDFF",
                    marginTop: 35, marginBottom: 20, color:"black", fontWeight: "bolder", marginLeft:"310px", borderRadius: "10px"}}>
                    Create Account
                </Button>
                <Stack direction = "row">
                    <h3 style = {{color: "white", fontSize: 16, marginLeft: "250px", marginTop: 5}} >ALREADY HAVE AN ACCOUNT?</h3>
                    <Button variant = "text" 
                        style = {{color: "#00ffff", fontSize: 16, margin: 0}}>SIGN IN</Button>
                </Stack>
            </div>
            
            
            <img src = {about} className="About-image" alt='about'/>
        </Stack>
        
        
    </div>

  );

}

export default AboutUs;